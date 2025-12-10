import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import pearlIslandLogo from "@/assets/logo/PIR_only.png";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === "en";

  return (
    <nav className="fixed h-14 top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
        {" "}
        {/* Added h-full here for alignment */}
        <div className="flex items-center justify-between h-14">
          {/* 1. Logo (Left) */}
          <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors flex-shrink-0">
            <img src={pearlIslandLogo} alt="Pearl Island Resort" className="h-3 w-auto" />
          </button>

          {/* Desktop Navigation */}
          {/* 2. Desktop Navigation (Center) - New wrapping div for centering */}
          <div className="hidden md:flex flex-grow justify-center items-center">
            <div className="flex items-center space-x-8">
              {" "}
              {/* This div contains the links to be centered */}
              <a href="https://www.inbayuresorts.com" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                {t("nav.inbayu")}
              </a>
              <button onClick={() => scrollToSection("scenery")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.scenery")}
              </button>
              <button onClick={() => scrollToSection("hiking")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.hiking")}
              </button>
              <button onClick={() => scrollToSection("activities")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.activities")}
              </button>
              <button onClick={() => scrollToSection("culinary")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.culinary")}
              </button>
              <button onClick={() => scrollToSection("testimonies")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.testimonies")}
              </button>
              <button onClick={() => scrollToSection("rooms")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.rooms")}
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-foreground hover:text-primary transition-colors">
                {t("nav.contact")}
              </button>
            </div>
          </div>
          <button onClick={toggleLanguage} className="px-2 py-2 text-xs bg-primary md:bg-transparent md:text-base text-white md:text-black rounded-sm">
              {isEnglish ? "ENG" : "中文"}
            </button>
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <ContactDialog trigger={<button className="bg-primary hover:bg-primary/90 text-white px-4 h-8 rounded-sm">{t("nav.enquiry")}</button>} />
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
              <a href="https://www.inbayuresorts.com" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                {t("nav.inbayu")}
              </a>
              <button onClick={() => scrollToSection("scenery")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.scenery")}
              </button>
              <button onClick={() => scrollToSection("hiking")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.hiking")}
              </button>
              <button onClick={() => scrollToSection("activities")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.activities")}
              </button>
              <button onClick={() => scrollToSection("culinary")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.culinary")}
              </button>
              <button onClick={() => scrollToSection("testimonies")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.testimonies")}
              </button>
              <button onClick={() => scrollToSection("rooms")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.rooms")}
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t("nav.contact")}
              </button>
              <ContactDialog trigger={<button className="bg-primary hover:bg-primary/90 text-white w-full py-2 rounded-sm mt-4">{t("nav.enquiry")}</button>} />
              {/* <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full mt-4">Enquiry</Button>
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
