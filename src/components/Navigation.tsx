import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-primary">Pearl Island Resort</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("scenery")} className="text-foreground hover:text-primary transition-colors">
              Scenery
            </button>
            <button onClick={() => scrollToSection("hiking")} className="text-foreground hover:text-primary transition-colors">
              Hiking
            </button>
            <button onClick={() => scrollToSection("activities")} className="text-foreground hover:text-primary transition-colors">
              Activities
            </button>
            <button onClick={() => scrollToSection("culinary")} className="text-foreground hover:text-primary transition-colors">
              Culinary
            </button>
            <button onClick={() => scrollToSection("testimonies")} className="text-foreground hover:text-primary transition-colors">
              Testimonies
            </button>
            <button onClick={() => scrollToSection("rooms")} className="text-foreground hover:text-primary transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection("contacts")} className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </button>
            {/* <ContactDialog
              trigger={
                <button className="text-foreground hover:text-primary transition-colors">
                  Enquiry
                </button>
              }
            /> */}
            <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">Book Now</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection("hero")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollToSection("scenery")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Scenery
              </button>
              <button onClick={() => scrollToSection("hiking")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Hiking
              </button>
              <button onClick={() => scrollToSection("activities")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Activities
              </button>
              <button onClick={() => scrollToSection("culinary")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Culinary
              </button>
              <button onClick={() => scrollToSection("testimonies")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Testimonies
              </button>
              <button onClick={() => scrollToSection("rooms")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Rooms
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Contact Us
              </button>
              <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full mt-4">Book Now</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
