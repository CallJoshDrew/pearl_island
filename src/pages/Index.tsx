import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactDialog from "@/components/ContactDialog";
import ImageModal from "@/components/ImageModal";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import tiktok from "@/assets/logo/tiktok.png";
import rednote from "@/assets/logo/rednote.png";
import pearlIslandLogo from "@/assets/logo/Latest_PIR_WB.png";
import inbayuRightReserved from "@/assets/logo/All_right_reserved.png";
import { useTranslation } from "react-i18next";
import "@/i18n/config"; // ensure i18n is initialized

// Import hero and hiking images
import heroPlaceholder from "@/assets/scenery/PIScene3.jpg";
// import hikingTrail from "@/assets/hiking-trail.jpg";
import bdHiking from "@/assets/hiking/hiking1a.png";
// import boatTravel from "@/assets/hiking/hiking1.jpg";
import hikingStart from "@/assets/hiking/hiking2a.png";
import hikingStairs from "@/assets/hiking/hiking3a.png";
import mountainTopView1 from "@/assets/hiking/hiking4a.png";
import mountainTopView2 from "@/assets/hiking/hiking5a.png";

// Import food images
import foodSeafoodPlatter from "@/assets/food/food1.jpg";
import foodBeefSteak from "@/assets/food/food2.jpg";
import foodLobsterThermidor from "@/assets/food/food3.jpg";
import foodTrufflePasta from "@/assets/food/food4.jpg";
import foodSushiPlatter from "@/assets/food/food5.jpg";
import foodChocolateDessert from "@/assets/food/food6.jpg";
import foodMediterraneanVegetables from "@/assets/food/food7.jpg";
import foodDuckBreast from "@/assets/food/food8.jpg";
import foodFreshOysters from "@/assets/food/food9.jpg";
import foodMushroomRisotto from "@/assets/food/food10.jpg";

// Import activity images
import divingActivity from "@/assets/activities/diving2.png";
import snorkelingActivity from "@/assets/activities/snorkeling.png";
import kayakingActivity from "@/assets/activities/kayaking.png";
import cyclingActivity from "@/assets/activities/cycling2.png";
import relaxingActivity from "@/assets/activities/relaxation.png";
import diningActivity from "@/assets/activities/dining.png";
import sunsetActivity from "@/assets/activities/sunset2.png";
import conversationActivity from "@/assets/activities/social.png";

// Import room images
import roomOceanView from "@/assets/rooms/room1.jpg";
import roomFamilySuite from "@/assets/rooms/room2.jpg";
import roomBeachfrontVilla from "@/assets/rooms/room3.jpg";
import roomMountainView from "@/assets/rooms/room4.jpg";
import roomPresidentialSuite from "@/assets/rooms/room5.jpg";
import roomGardenView from "@/assets/rooms/room6.jpg";
import roomHoneymoonBungalow from "@/assets/rooms/room7.jpg";
import roomStandard from "@/assets/rooms/room8.jpg";
import roomExecutiveSuite from "@/assets/rooms/room9.jpg";
import roomPenthouseTerrace from "@/assets/rooms/room10.jpg";
import roomDeluxeOcean from "@/assets/rooms/room11.jpg";
import roomSpaSuite from "@/assets/rooms/room12.jpg";

// Import scenery images
import sceneryResortExterior from "@/assets/HeroSection1.jpg";
import sceneryDiningHall from "@/assets/scenery/PIScene1.jpeg";
import sceneryPoolInfinity from "@/assets/scenery/PIScene2.jpg";
import sceneryBeachWhiteSand from "@/assets/scenery/PIScene4.jpg";
import scenerySpaPavilion from "@/assets/scenery/PIScene5.jpg";
import sceneryLobby from "@/assets/scenery/PIScene6.jpg";
import sceneryWoodenPier from "@/assets/scenery/PIScene7.jpg";
import sceneryOutdoorBar from "@/assets/scenery/PIScene8.jpg";
import sceneryGardenWalkway from "@/assets/scenery/PIScene9.jpg";
import sceneryWellnessCenter from "@/assets/scenery/PIScene10.jpg";
import sceneryTennisCourt from "@/assets/scenery/PIScene11.jpg";
import scenerySunsetTerrace from "@/assets/scenery/PIScene12.jpg";

const Index = () => {
  const { t } = useTranslation();
  const sceneryGallery = [
    { src: sceneryResortExterior, alt: "Greeting!", title: t("scenery.welcome"), description: t("scenery.welcomeDesc") },
    { src: sceneryDiningHall, alt: "Resort Exterior", title: t("scenery.pearlIsland"), description: t("scenery.pearlIslandDesc") },
    { src: sceneryPoolInfinity, alt: "Dining Hall", title: t("scenery.elegantDining"), description: t("scenery.elegantDiningDesc") },
    { src: sceneryBeachWhiteSand, alt: "White Sand Beach", title: t("scenery.diningHallCenter"), description: t("scenery.diningHallCenterDesc") },
    { src: scenerySpaPavilion, alt: "Spa Pavilion", title: t("scenery.walkwayPath"), description: t("scenery.walkwayPathDesc") },
    { src: sceneryLobby, alt: "Resort Lobby", title: t("scenery.divingCenter"), description: t("scenery.divingCenterDesc") },
    { src: sceneryWoodenPier, alt: "Wooden Pier", title: t("scenery.waterChalets"), description: t("scenery.waterCharletsDesc") },
    { src: sceneryOutdoorBar, alt: "Tiki Bar", title: t("scenery.horizontalView"), description: t("scenery.horizontalViewDesc") },
    { src: sceneryGardenWalkway, alt: "Garden Path", title: t("scenery.sunsetView"), description: t("scenery.sunsetViewDesc") },
    { src: sceneryWellnessCenter, alt: "Wellness Center", title: t("scenery.meditationSpace"), description: t("scenery.meditationSpaceDesc") },
    { src: sceneryTennisCourt, alt: "Tennis Court", title: t("scenery.beautifulSky"), description: t("scenery.beautifulSkyDesc") },
    { src: scenerySunsetTerrace, alt: "Sunset Terrace", title: t("scenery.goldenHour"), description: t("scenery.goldenHourDesc") },
  ];

  const hikingImages = [
    {
      src: bdHiking,
      alt: "2 minutes journey from Pearl Island Resort to Bohey Dulang Island",
      title: t("hiking.boheyDulang"),
      description: t("hiking.boheyDulangDesc"),
    },
    {
      src: hikingStart,
      alt: "Hiking Trail Information",
      title: t("hiking.welcomeTrail"),
      description: t("hiking.welcomeTrailDesc"),
    },
    {
      src: hikingStairs,
      alt: "Natural Mountain Trail with Staircase",
      title: t("hiking.staircasePath"),
      description: t("hiking.stairCasePathDesc"),
    },
    {
      src: mountainTopView1,
      alt: "Mountain Top View",
      title: t("hiking.panoramicView"),
      description: t("hiking.panoramicViewDesc"),
    },
    {
      src: mountainTopView2,
      alt: "Mountain Top View",
      title: t("hiking.panoramicView"),
      description: t("hiking.panoramicViewDesc"),
    },
  ];

  const activities = [
    { src: divingActivity, alt: "Scuba Diving", title: t("activities.diving") },
    { src: snorkelingActivity, alt: "Snorkeling", title: t("activities.snorkeling") },
    { src: kayakingActivity, alt: "Kayaking", title: t("activities.kayaking") },
    { src: cyclingActivity, alt: "Cycling", title: t("activities.cycling") },
    { src: relaxingActivity, alt: "Relaxing", title: t("activities.relaxation") },
    { src: diningActivity, alt: "Fine Dining", title: t("activities.dining") },
    { src: sunsetActivity, alt: "Sunset Viewing", title: t("activities.sunset") },
    { src: conversationActivity, alt: "Social Time", title: t("activities.social") },
  ];

  const foodGallery = [
    { src: foodSeafoodPlatter, name: t("culinary.seafoodSpaghetti"), description: t("culinary.seafoodSpaghettiDesc") },
    { src: foodBeefSteak, name: t("culinary.koreanWings"), description: t("culinary.koreanWingsDesc") },
    { src: foodLobsterThermidor, name: t("culinary.roastedDuck"), description: t("culinary.roastedDuckDesc") },
    { src: foodTrufflePasta, name: t("culinary.saltPepperCrab"), description: t("culinary.saltPepperCrabDesc") },
    { src: foodSushiPlatter, name: t("culinary.saladPrawns"), description: t("culinary.saladPrawnsDesc") },
    { src: foodChocolateDessert, name: t("culinary.bakedMussels"), description: t("culinary.bakedMusselsDesc") },
    { src: foodMediterraneanVegetables, name: t("culinary.roastedVegetables"), description: t("culinary.roastedVegetablesDesc") },
    { src: foodDuckBreast, name: t("culinary.pudding"), description: t("culinary.puddingDesc") },
    { src: foodFreshOysters, name: t("culinary.miniCake"), description: t("culinary.miniCakeDesc") },
    { src: foodMushroomRisotto, name: t("culinary.cheeseTart"), description: t("culinary.cheeseTartDesc") },
  ];

  const testimonials = [
    {
      name: t("testimonials.oceanPrince"),
      platform: t("testimonials.tripcom"),
      rating: 5,
      text: t("testimonials.oceanPrinceText"),
    },
    {
      name: t("testimonials.zhunemiguiyi"),
      platform: t("testimonials.tripcom"),
      rating: 5,
      text: t("testimonials.zhunemigyiyiText"),
    },
    {
      name: t("testimonials.wechatUser"),
      platform: t("testimonials.tripcom"),
      rating: 5,
      text: t("testimonials.wechatUserText"),
    },
    {
      name: t("testimonials.yilushunfeng"),
      platform: t("testimonials.tripcom"),
      rating: 5,
      text: t("testimonials.yilushunfengText"),
    },
    {
      name: t("testimonials.tk650156"),
      platform: t("testimonials.tripcom"),
      rating: 5,
      text: t("testimonials.tk650156Text"),
    },
  ];

  const rooms = [
    { src: roomOceanView, alt: "Ocean Retreat", title: t("rooms.oceanRetreat") },
    { src: roomFamilySuite, alt: "View from Bliss", title: t("rooms.viewFromBliss") },
    { src: roomBeachfrontVilla, alt: "Spacious Comfort", title: t("rooms.spaciousComfort") },
    { src: roomMountainView, alt: "Minimal Yet Cozy", title: t("rooms.minimalYetCozy") },
    { src: roomPresidentialSuite, alt: "Tropical Indoor Oasis", title: t("rooms.tropicalIndoorOasis") },
    { src: roomGardenView, alt: "Clean Contemporary Charm", title: t("rooms.cleanContemporaryCharm") },
    { src: roomHoneymoonBungalow, alt: "Storage Area", title: t("rooms.storageArea") },
    { src: roomStandard, alt: "Elevated Nature Outlook", title: t("rooms.elevatedNatureOutlook") },
    { src: roomExecutiveSuite, alt: "Water Chalets", title: t("rooms.waterChalets") },
    { src: roomPenthouseTerrace, alt: "Tranquil Nature Canvas", title: t("rooms.tranquilNatureCanvas") },
    { src: roomDeluxeOcean, alt: "Sunset View", title: t("rooms.sunsetView") },
    { src: roomSpaSuite, alt: "Spa Suite", title: t("rooms.spaSuite") },
  ];

  const [selectedHikingImage, setSelectedHikingImage] = useState(0);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedActivityImage, setSelectedActivityImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [selectedRoomImage, setSelectedRoomImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [selectedFoodImage, setSelectedFoodImage] = useState<{ src: string; name: string; description: string } | null>(null);
  const [selectedSceneryImage, setSelectedSceneryImage] = useState<{ src: string; alt: string; title: string; description: string } | null>(null);
  const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);

  const nextRoom = () => setCurrentRoomIndex((prev) => (prev + 1) % rooms.length);
  const prevRoom = () => setCurrentRoomIndex((prev) => (prev - 1 + rooms.length) % rooms.length);

  const nextTestimonial = () => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleActivityNavigation = (index: number) => {
    setCurrentActivityIndex(index);
    setSelectedActivityImage(activities[index]);
  };

  const handleRoomNavigation = (index: number) => {
    setCurrentRoomIndex(index);
    setSelectedRoomImage(rooms[index]);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative h-[28vh] mt-14 md:h-[90vh] overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="relative z-10 w-full h-full">
          <iframe src="https://www.youtube.com/embed/N3iA7KvlMrM?si=IyNtL3yNLCE-7mqG&autoplay=1&mute=0&loop=1&playlist=N3iA7KvlMrM&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&vq=hd1440" className="w-full h-full object-cover" allow="autoplay; encrypted-media" title="Pearl Island Video" />
        </div>
      </section>
      {/* Content Section */}
      {/* <div className="flex-1 flex items-center md:flex-col md:items-end justify-center md:justify-start md:mt-24 w-full md:absolute md:inset-0">
          <div className="absolute inset-0 bg-black/40 hidden md:block"></div>

          <div className="text-center md:text-right text-white max-w-4xl px-6 w-full md:mb-14 md:w-1/3 py-8 md:py-0 relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-white">Specially Crafted for Your Holiday</h1>
            <p className="text-lg text-center md:text-right md:m-0 md:text-xl lg:text-2xl md:text-white mb-6 md:mb-8 max-w-3xl mx-auto text-muted-foreground leading-relaxed">Escape into nature's sanctuary with refined comfort and warm, attentive service—memories to last a lifetime.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-white" onClick={toggleVideo}>
              {isVideoPlaying ? "Stop" : "Play Video"}
            </Button>
          </div>
        </div> */}

      {/* Scenery Section */}
      <section id="scenery" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("sections.scenery")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("sections.sceneryDesc")}</p>
          </div>

          {/* Desktop: Instagram-style grid (4 columns x 3 rows) */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-8">
            {sceneryGallery.map((scenery, index) => (
              <div key={index} className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105" style={{ aspectRatio: "9/16" }} onClick={() => setSelectedSceneryImage(scenery)}>
                <img src={scenery.src} alt={scenery.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm">{scenery.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Tinder-style carousel */}
          <div className="md:hidden max-w-sm mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer h-96" onClick={() => setSelectedSceneryImage(sceneryGallery[currentSceneryIndex])}>
              <img src={sceneryGallery[currentSceneryIndex].src} alt={sceneryGallery[currentSceneryIndex].alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">{sceneryGallery[currentSceneryIndex].title}</h3>
                <p className="text-white/90 text-sm">{sceneryGallery[currentSceneryIndex].description}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="lg" onClick={() => setCurrentSceneryIndex((prev) => (prev - 1 + sceneryGallery.length) % sceneryGallery.length)} className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary">
                Previous
              </Button>
              <Button variant="outline" size="lg" onClick={() => setCurrentSceneryIndex((prev) => (prev + 1) % sceneryGallery.length)} className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary">
                Next
              </Button>
            </div>

            {/* Dot navigation */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {sceneryGallery.map((_, index) => (
                <div key={index} className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${index === currentSceneryIndex ? "bg-primary border-primary" : "bg-primary/20 border-primary/40 hover:bg-primary/30"}`} onClick={() => setCurrentSceneryIndex(index)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiking Section */}
      <section id="hiking" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20 mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("sections.hiking")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("sections.hikingDesc")}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
            {/* Main Display */}
            <div className="lg:w-[90%] order-1 lg:order-1 lg:h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full">
                <img src={hikingImages[selectedHikingImage].src} alt={hikingImages[selectedHikingImage].alt} className="w-full h-full object-cover transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{hikingImages[selectedHikingImage].title}</h3>
                  <p className="text-white/90">{hikingImages[selectedHikingImage].description}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="lg:w-[10%] order-2 lg:order-2 lg:h-full">
              <div className="grid grid-cols-5 lg:grid-cols-1 lg:grid-rows-5 gap-3 h-full">
                {hikingImages.map((image, index) => (
                  <div key={index} className={`cursor-pointer rounded-sm overflow-hidden h-full transition-colors duration-300 ${selectedHikingImage === index ? "ring-4 ring-primary" : "ring-0"}`} onClick={() => setSelectedHikingImage(index)}>
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{t("sections.activities")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("sections.activitiesDesc")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                onClick={() => {
                  setCurrentActivityIndex(index);
                  setSelectedActivityImage({ src: activity.src, alt: activity.alt, title: activity.title });
                }}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={activity.src} alt={activity.alt} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{activity.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section id="culinary" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("sections.culinary")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("sections.culinaryDesc")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {foodGallery.map((food, index) => (
              <div key={index} className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105" onClick={() => setSelectedFoodImage(food)}>
                <div className="aspect-square">
                  <img src={food.src} alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Always visible title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <h3 className="text-white font-semibold text-sm mb-1">{food.name}</h3>
                </div>

                {/* Hover overlay with title and description */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h3 className="text-white font-bold text-base mb-2">{food.name}</h3>
                    <p className="text-white/90 text-sm leading-tight">{food.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="testimonies" className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{t("sections.testimonials")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("sections.testimonialsDesc")}</p>
          </div>

          {/* Desktop/Tablet: Grid layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 justify-center">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-muted-foreground font-medium">{testimonial.platform}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed text-center">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground text-center">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Tinder-style testimonial carousel */}
          <div className="md:hidden max-w-md mx-auto">
            <Card className="border-2 border-border hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-xl min-h-[400px] flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                {/* Rating and platform */}
                <div className="flex items-center mb-6 justify-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                      <span key={i} className="text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-muted-foreground font-medium">{testimonials[currentTestimonialIndex].platform}</span>
                </div>

                {/* Testimonial text - this section will grow to fill available space */}
                <div className="flex-1 flex items-center justify-center min-h-0">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-center text-lg flex-1">"{testimonials[currentTestimonialIndex].text}"</p>
                </div>

                {/* Author name - fixed at bottom */}
                <p className="font-semibold text-foreground text-center text-xl mt-auto pt-4">- {testimonials[currentTestimonialIndex].name}</p>
              </CardContent>
            </Card>

            {/* Navigation buttons - these will now stay in fixed position */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="lg" onClick={prevTestimonial} className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary">
                Previous
              </Button>
              <Button variant="outline" size="lg" onClick={nextTestimonial} className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary">
                Next
              </Button>
            </div>

            {/* Dot navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <div key={index} className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${index === currentTestimonialIndex ? "bg-primary border-primary" : "bg-primary/20 border-primary/40 hover:bg-primary/30"}`} onClick={() => setCurrentTestimonialIndex(index)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("sections.rooms")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("sections.roomsDesc")}</p>
          </div>

          {/* Desktop: Pinterest-style layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                {[0, 4, 8].map(
                  (index) =>
                    rooms[index] && (
                      <Card
                        key={index}
                        className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        onClick={() => {
                          setCurrentRoomIndex(index);
                          setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                        }}>
                        <CardContent className="p-0">
                          <div className="relative">
                            <img src={rooms[index].src} alt={rooms[index].alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ height: `${240 + (index % 3) * 80}px` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-semibold text-lg">{rooms[index].title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                )}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                {[1, 5, 9].map(
                  (index) =>
                    rooms[index] && (
                      <Card
                        key={index}
                        className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        onClick={() => {
                          setCurrentRoomIndex(index);
                          setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                        }}>
                        <CardContent className="p-0">
                          <div className="relative">
                            <img src={rooms[index].src} alt={rooms[index].alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ height: `${280 + (index % 3) * 60}px` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-semibold text-lg">{rooms[index].title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                )}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                {[2, 6, 10].map(
                  (index) =>
                    rooms[index] && (
                      <Card
                        key={index}
                        className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        onClick={() => {
                          setCurrentRoomIndex(index);
                          setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                        }}>
                        <CardContent className="p-0">
                          <div className="relative">
                            <img src={rooms[index].src} alt={rooms[index].alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ height: `${260 + (index % 3) * 90}px` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-semibold text-lg">{rooms[index].title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                )}
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-6">
                {[3, 7, 11].map(
                  (index) =>
                    rooms[index] && (
                      <Card
                        key={index}
                        className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        onClick={() => {
                          setCurrentRoomIndex(index);
                          setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                        }}>
                        <CardContent className="p-0">
                          <div className="relative">
                            <img src={rooms[index].src} alt={rooms[index].alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ height: `${250 + (index % 3) * 120}px` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-semibold text-lg">{rooms[index].title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Mobile: Tinder-style layout */}
          <div className="md:hidden">
            <div className="relative max-w-sm mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img src={rooms[currentRoomIndex].src} alt={rooms[currentRoomIndex].alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">{rooms[currentRoomIndex].title}</h3>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" size="lg" onClick={prevRoom} className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary">
                  Previous
                </Button>
                <Button variant="outline" size="lg" onClick={nextRoom} className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary">
                  Next
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {rooms.map((_, index) => (
                  <div key={index} className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${index === currentRoomIndex ? "bg-primary border-primary" : "bg-primary/20 border-primary/40 hover:bg-primary/30"}`} onClick={() => setCurrentRoomIndex(index)} />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <ContactDialog
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  {t("contact.enquiry")}
                </Button>
              }
            />
            {/* <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Enquiry
              </Button>
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Sandakan Office */}
            <div className="space-y-4 text-white">
              <h4 className="text-xl font-semibold mb-6 text-white">{t("footer.sandakanOffice")}</h4>
              <a href="https://maps.app.goo.gl/pkaqfYKCzzatt6kC9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                <span>{t("footer.sandakanAddress")}</span>
              </a>
              <div className="flex items-start gap-2">
                <div className="flex flex-col gap-2">
                  <a href="tel:+6089673999" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-673999
                  </a>
                  <a href="tel:+6089674999" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-674999
                  </a>
                  <a href="tel:+6089675999" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-675999
                  </a>
                  <a href="tel:+60178927100" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 17-892 7100 (Caroline)
                  </a>
                  <a href="tel:+60178992700" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 17-899 2700 (Stella)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="mailto:mail@pearlislandresorts.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                  <span>mail@pearlislandresorts.com</span>
                </a>
              </div>
            </div>

            {/* Tawau Office */}
            <div className="space-y-4 text-white">
              <h4 className="text-xl font-semibold mb-6 text-white">{t("footer.tawauOffice")}</h4>
              <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                <span>{t("footer.tawauAddress")}</span>
              </a>
              <div className="flex flex-col gap-2">
                <a href="tel:+6089765200" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 89-765200
                </a>
                <a href="tel:+60178991700" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 17-899 1700 (Veronica)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href="mailto:mail@pearlislandresorts.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                  <span>mail@pearlislandresorts.com</span>
                </a>
              </div>
            </div>

            {/* KK Office */}
            <div className="space-y-4 text-white">
              <h4 className="text-xl font-semibold mb-6 text-white">{t("footer.kkOffice")}</h4>
              <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                <span>{t("footer.kkAddress")}</span>
              </a>
              <div className="flex items-center gap-2">
                <a href="tel:+60178995700" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 17-899 5700 (Shannel)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href="mailto:mail@pearlislandresorts.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                  <span>mail@pearlislandresorts.com</span>
                </a>
              </div>
            </div>

            {/* Social Media & Contact */}
            <div id="contacts" className="space-y-4 text-white">
              <h4 className="text-xl font-semibold mb-6 text-white">{t("footer.followUs")}</h4>
              <p className="text-gray-300 leading-relaxed">{t("footer.tagline")}</p>
              <div className="flex space-x-5 items-center">
                <a href="https://www.facebook.com/profile.php?id=61574060822782" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white mt-12 pt-8 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center my-10 md:my-10">
              <img
                src={pearlIslandLogo}
                alt="Pearl Island Resort"
                className="h-28 md:h-72 w-auto"
              />
            </div>
            <p className="text-white text-xs md:text-sm">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>

      {/* Food Image Modal */}
      {selectedFoodImage && (
        <ImageModal
          isOpen={!!selectedFoodImage}
          onClose={() => setSelectedFoodImage(null)}
          image={{
            src: selectedFoodImage.src,
            alt: selectedFoodImage.name,
            title: selectedFoodImage.name,
            description: selectedFoodImage.description,
          }}
          images={foodGallery.map((food) => ({
            src: food.src,
            alt: food.name,
            title: food.name,
            description: food.description,
          }))}
          currentIndex={foodGallery.findIndex((food) => food.src === selectedFoodImage.src)}
          onNavigate={(index) => {
            setSelectedFoodImage(foodGallery[index]);
          }}
        />
      )}

      {/* Image Modals */}
      {selectedActivityImage && <ImageModal isOpen={!!selectedActivityImage} onClose={() => setSelectedActivityImage(null)} image={selectedActivityImage} images={activities} currentIndex={currentActivityIndex} onNavigate={handleActivityNavigation} />}

      {selectedRoomImage && <ImageModal isOpen={!!selectedRoomImage} onClose={() => setSelectedRoomImage(null)} image={selectedRoomImage} images={rooms} currentIndex={currentRoomIndex} onNavigate={handleRoomNavigation} />}

      {/* Scenery Image Modal */}
      {selectedSceneryImage && (
        <ImageModal
          isOpen={!!selectedSceneryImage}
          onClose={() => setSelectedSceneryImage(null)}
          image={{
            src: selectedSceneryImage.src,
            alt: selectedSceneryImage.alt,
            title: selectedSceneryImage.title,
            description: selectedSceneryImage.description,
          }}
          images={sceneryGallery.map((scenery) => ({
            src: scenery.src,
            alt: scenery.alt,
            title: scenery.title,
            description: scenery.description,
          }))}
          currentIndex={sceneryGallery.findIndex((scenery) => scenery.src === selectedSceneryImage.src)}
          onNavigate={(index) => {
            setSelectedSceneryImage(sceneryGallery[index]);
          }}
        />
      )}
    </div>
  );
};

export default Index;
