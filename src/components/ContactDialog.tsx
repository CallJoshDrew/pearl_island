import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Phone, Mail, MapPin, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  trigger: React.ReactNode;
}

// Country codes and nationalities data
const countryCodes = [
  { code: "+60", country: "Malaysia" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+84", country: "Vietnam" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+64", country: "New Zealand" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
];

const nationalities = ["Malaysian", "Singaporean", "Thai", "Indonesian", "Filipino", "Vietnamese", "Chinese", "Japanese", "Korean", "American", "Canadian", "British", "Australian", "New Zealander", "French", "German", "Italian", "Spanish", "Other"];

const roomOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20+"];
const diverOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20+"];

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    alias: "",
    email: "",
    nationality: "",
    countryCode: "+60",
    contactNumber: "",
    arrivalDate: undefined as Date | undefined,
    departureDate: undefined as Date | undefined,
    numberOfRooms: "",
    numberOfDivers: "",
    numberOfNonDivers: "",
    specialRequirements: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for required fields (arrivalDate removed from required list)
    if (!formData.fullName || !formData.email || !formData.contactNumber || !formData.nationality || !formData.departureDate || !formData.numberOfRooms || !formData.numberOfDivers || !formData.numberOfNonDivers) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Check if departure date is after arrival date only when arrivalDate is provided
    if (formData.arrivalDate && formData.departureDate && formData.departureDate <= formData.arrivalDate) {
      toast({
        title: "Departure date must be after arrival date",
        variant: "destructive",
      });
      return;
    }

    // Create email content for mailto:
    const subject = `Booking Inquiry from ${formData.fullName}`;
    const emailBody = `
BOOKING INQUIRY - Pearl Island Resort

PERSONAL INFORMATION:
• Full Name: ${formData.fullName}
• Alias: ${formData.alias || "Not provided"}
• Email: ${formData.email}
• Nationality: ${formData.nationality}
• Contact Number: ${formData.countryCode} ${formData.contactNumber}

BOOKING DETAILS:
• Arrival Date: ${formData.arrivalDate ? format(formData.arrivalDate, "PPPP") : "Not provided"}
• Departure Date: ${formData.departureDate ? format(formData.departureDate, "PPPP") : "Not provided"}
• Number of Rooms: ${formData.numberOfRooms}
• Number of Divers: ${formData.numberOfDivers}
• Number of Non-divers: ${formData.numberOfNonDivers}

SPECIAL REQUIREMENTS:
${formData.specialRequirements || "None"}

---
This inquiry was submitted via the website on ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:mail@pearlislandresorts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the email client
    window.open(mailtoLink, "_blank");

    // Show success message
    toast({
      title: "Email client opened!",
      description: "Please review and send the pre-filled email to complete your booking inquiry.",
    });

    // Reset form
    setFormData({
      fullName: "",
      alias: "",
      email: "",
      nationality: "",
      countryCode: "+60",
      contactNumber: "",
      arrivalDate: undefined,
      departureDate: undefined,
      numberOfRooms: "",
      numberOfDivers: "",
      numberOfNonDivers: "",
      specialRequirements: "",
    });
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Booking Inquiry</DialogTitle>
          </DialogHeader>
          <button onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100 transition-opacity">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm">Get in touch with us for reservations about your dream vacation.</p>

        {/* <div className="mt-3 grid grid-cols-1 gap-3">
          <div className="flex items-center gap-2 text-foreground">
            <Phone size={18} className="text-primary" />
            <span>+60 89-781-378</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Mail size={18} className="text-primary" />
            <span>info@sipadan-kapalai.com</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin size={18} className="text-primary" />
            <span>Semporna, Sabah, Malaysia</span>
          </div>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Full Name and Alias */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name (As Per ID/Passport) *</Label>
              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="As shown on your passport" className="bg-background/60 border-border placeholder:text-gray-500" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alias">Alias</Label>
              <Input id="alias" name="alias" value={formData.alias} onChange={handleChange} placeholder="Preferred name (optional)" className="bg-background/60 border-border placeholder:text-gray-500" />
            </div>
          </div>

          {/* Email and Nationality */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="bg-background/60 border-border placeholder:text-gray-500" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality *</Label>
              <Select value={formData.nationality} onValueChange={(value) => handleSelectChange("nationality", value)}>
                <SelectTrigger className="bg-background/60 border-border placeholder:text-gray-500">
                  <SelectValue placeholder="Select your nationality" />
                </SelectTrigger>
                <SelectContent>
                  {nationalities.map((nationality) => (
                    <SelectItem key={nationality} value={nationality}>
                      {nationality}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Number with Country Code */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="countryCode">Country Code *</Label>
              <Select value={formData.countryCode} onValueChange={(value) => handleSelectChange("countryCode", value)}>
                <SelectTrigger className="bg-background/60 border-border placeholder:text-gray-500">
                  <SelectValue placeholder="Select code" />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.code} ({country.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Phone number" className="bg-background/60 border-border placeholder:text-gray-500" required />
            </div>
          </div>

          {/* Arrival and Departure Dates */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Arrival Date </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal bg-background/60 border-border", !formData.arrivalDate && "placeholder:text-gray-500")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={formData.arrivalDate} onSelect={(date) => handleDateChange("arrivalDate", date)} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Departure Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal bg-background/60 border-border", !formData.departureDate && "placeholder:text-gray-500")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.departureDate ? format(formData.departureDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={formData.departureDate} onSelect={(date) => handleDateChange("departureDate", date)} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Room and Guest Numbers */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numberOfRooms">Number of Rooms *</Label>
              <Select value={formData.numberOfRooms} onValueChange={(value) => handleSelectChange("numberOfRooms", value)}>
                <SelectTrigger className="bg-background/60 border-border placeholder:text-gray-500">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {roomOptions.map((rooms) => (
                    <SelectItem key={rooms} value={rooms}>
                      {rooms}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="numberOfDivers">Number of Divers *</Label>
              <Select value={formData.numberOfDivers} onValueChange={(value) => handleSelectChange("numberOfDivers", value)}>
                <SelectTrigger className="bg-background/60 border-border placeholder:text-gray-500">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {diverOptions.map((divers) => (
                    <SelectItem key={divers} value={divers}>
                      {divers}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="numberOfNonDivers">Number of Non-divers *</Label>
              <Select value={formData.numberOfNonDivers} onValueChange={(value) => handleSelectChange("numberOfNonDivers", value)}>
                <SelectTrigger className="bg-background/60 border-border placeholder:text-gray-500">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {diverOptions.map((nonDivers) => (
                    <SelectItem key={nonDivers} value={nonDivers}>
                      {nonDivers}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Special Requirements */}
          <div className="space-y-2">
            <Label htmlFor="specialRequirements">Special Requirements</Label>
            <Textarea id="specialRequirements" name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} placeholder="Any special requirements, dietary restrictions, or additional information..." rows={3} className="bg-background/60 border-border placeholder:text-gray-500" />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors">
            <Send className="w-4 h-4 mr-2" />
            Open Email to Send Inquiry
          </Button>
        </form>

        <div className="text-sm text-left">
          <p>After clicking the button, your email client will open with a pre-filled message.</p>
          <p>Please review and click "Send" to complete your booking inquiry.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
