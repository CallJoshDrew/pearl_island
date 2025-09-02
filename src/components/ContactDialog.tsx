import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
interface ContactDialogProps {
  trigger: React.ReactNode;
}

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Enquiry</DialogTitle>
        </DialogHeader>
        <p className="mt-2 text-sm text-muted-foreground">
          Get in touch with us for reservations or inquiries about your dream vacation.
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className="flex items-center gap-2 text-foreground">
            <Phone size={18} className="text-primary" />
            <span>+60 12-345 6789</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Mail size={18} className="text-primary" />
            <span>info@pearlisland.com</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin size={18} className="text-primary" />
            <span>Semporna, Sabah, Malaysia</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Your Name"
              className="bg-background/60 border-border"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-background/60 border-border"
              required
            />
          </div>
          <Input
            placeholder="Subject"
            className="bg-background/60 border-border"
            required
          />
          <Textarea
            placeholder="Your Message"
            rows={4}
            className="bg-background/60 border-border"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;