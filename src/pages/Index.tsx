import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactDialog from "@/components/ContactDialog";
import ImageModal from "@/components/ImageModal";
import { Phone, Mail, MapPin } from "lucide-react";

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

const hikingImages = [
  {
    src: bdHiking,
    alt: "2 minutes journey from Pearl Island Resort to Bohey Dulang Island",
    title: "Arrival at Bohey Dulang ",
    description: "2 minutes journey from Pearl Island Resort",
  },
  {
    src: hikingStart,
    alt: "Hiking Trail Information",
    title: "Welcome to the Trail",
    description: "Guided start point with trail information",
  },
  {
    src: hikingStairs,
    alt: "Natural Mountain Trail with Staircase",
    title: "The Staircase Path",
    description: "Rocky trail through staircase",
  },
  {
    src: mountainTopView1,
    alt: "Mountain Top View",
    title: "Panoramic Summit View",
    description: "Stunning ocean and island vistas",
  },
  {
    src: mountainTopView2,
    alt: "Mountain Top View",
    title: "Panoramic Summit View",
    description: "Stunning ocean and island vistas",
  },
];

const activities = [
  { src: divingActivity, alt: "Scuba Diving", title: "Diving" },
  { src: snorkelingActivity, alt: "Snorkeling", title: "Snorkeling" },
  { src: kayakingActivity, alt: "Kayaking", title: "Kayaking" },
  { src: cyclingActivity, alt: "Cycling", title: "Cycling" },
  { src: relaxingActivity, alt: "Relaxing", title: "Relaxation" },
  { src: diningActivity, alt: "Fine Dining", title: "Dining" },
  { src: sunsetActivity, alt: "Sunset Viewing", title: "Sunset Views" },
  { src: conversationActivity, alt: "Social Time", title: "Social" },
];

const foodGallery = [
  { src: foodSeafoodPlatter, name: "Seafood Platter", description: "Fresh grilled fish, prawns & seasonal vegetables" },
  { src: foodBeefSteak, name: "Premium Beef Steak", description: "Tender beef with truffle sauce & roasted vegetables" },
  { src: foodLobsterThermidor, name: "Lobster Thermidor", description: "Fresh lobster with herbs & butter sauce" },
  { src: foodTrufflePasta, name: "Truffle Pasta", description: "Handmade pasta with truffle cream & parmesan" },
  { src: foodSushiPlatter, name: "Artisan Sushi", description: "Fresh sashimi & specialty rolls" },
  { src: foodChocolateDessert, name: "Chocolate Dessert", description: "Decadent chocolate with berry compote" },
  { src: foodMediterraneanVegetables, name: "Mediterranean Vegetables", description: "Grilled vegetables with herbs & olive oil" },
  { src: foodDuckBreast, name: "Pan-Seared Duck", description: "Duck breast with orange glaze & root vegetables" },
  { src: foodFreshOysters, name: "Fresh Oysters", description: "Local oysters on ice with lemon & mignonette" },
  { src: foodMushroomRisotto, name: "Mushroom Risotto", description: "Creamy risotto with wild mushrooms" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    platform: "TripAdvisor",
    rating: 5,
    text: "Absolutely magical experience! The hiking trail to the mountain top was breathtaking, and the marine life while snorkeling was incredible. This resort truly delivers on creating unforgettable memories.",
  },
  {
    name: "Mike Chen",
    platform: "Trip.com",
    rating: 5,
    text: "Perfect family vacation spot! Kids loved the boat ride to hiking trail, and adults appreciated the luxury amenities. The conservation efforts make you feel good about visiting this pristine location.",
  },
  {
    name: "Emma Williams",
    platform: "Google Reviews",
    rating: 5,
    text: "The most beautiful resort I've ever stayed at. The mountain views from our room were stunning, and the diving experience showed us marine life we'd never seen before. Highly recommended!",
  },
  {
    name: "David Rodriguez",
    platform: "TripAdvisor",
    rating: 5,
    text: "Every detail was perfect - from the comfortable hiking facilities to the delicious local cuisine. The staff went above and beyond to make our anniversary trip special.",
  },
  {
    name: "Lisa Park",
    platform: "Trip.com",
    rating: 5,
    text: "Unparalleled natural beauty combined with luxury accommodations. The protected marine area is a diver's paradise, and the hiking trails offer spectacular island views.",
  },
  {
    name: "James Thompson",
    platform: "Booking.com",
    rating: 5,
    text: "This resort exceeded all expectations. The conservation focus is admirable, and the activities are perfectly organized. The sunset views from the mountain are unforgettable!",
  },
  {
    name: "Anna Martinez",
    platform: "TripAdvisor",
    rating: 5,
    text: "A true gem in paradise! The combination of adventure activities and relaxation options makes this perfect for couples and families. We're already planning our return visit.",
  },
  {
    name: "Tom Wilson",
    platform: "Trip.com",
    rating: 5,
    text: "Outstanding service and incredible location. The protected waters offer amazing snorkeling, and the mountain hiking trail is well-maintained with stunning payoffs at the top.",
  },
];

const sceneryGallery = [
  { src: sceneryResortExterior, alt: "Greeting!", title: "Welcome!", description: "Enjoy the best holiday in Semporna" },
  { src: sceneryDiningHall, alt: "Resort Exterior", title: "Pearl Island", description: "The natural resort surrounded by pristine nature of ocean and island" },
  { src: sceneryPoolInfinity, alt: "Dining Hall", title: "Elegant Dining", description: "Sophisticated dining hall with panoramic ocean views and mountains" },
  { src: sceneryBeachWhiteSand, alt: "White Sand Beach", title: "Dining Hall Center", description: "Enjoy watching sea turtles in the center hall while dining" },
  { src: scenerySpaPavilion, alt: "Spa Pavilion", title: "Walkway Path", description: "Enjoying the sky and sea view while walking" },
  { src: sceneryLobby, alt: "Resort Lobby", title: "Towards Diving Center", description: "A short walk before going for divng center" },
  { src: sceneryWoodenPier, alt: "Wooden Pier", title: "Water Chalets", description: "Our spacious and comfortable water chalets" },
  { src: sceneryOutdoorBar, alt: "Tiki Bar", title: "Horizontal View", description: "Endless joy while going for adventures" },
  { src: sceneryGardenWalkway, alt: "Garden Path", title: "Sunset View", description: "Time pass while enjoying the sunset" },
  { src: sceneryWellnessCenter, alt: "Wellness Center", title: "Meditation Space", description: "Peaceful environment to comfort and regenerate your soul" },
  { src: sceneryTennisCourt, alt: "Tennis Court", title: "Beautiful Sky", description: "Surrounded nature that helps you relax" },
  { src: scenerySunsetTerrace, alt: "Sunset Terrace", title: "Golden Hour Views", description: "Spectacular sunset viewing terrace with panoramic ocean vistas" },
];

const rooms = [
  { src: roomOceanView, alt: "Ocean Retreat", title: "Ocean Retreat" },
  { src: roomFamilySuite, alt: "View from Bliss", title: "View from Bliss" },
  { src: roomBeachfrontVilla, alt: "Spacious Comfort", title: "Spacious Comfort" },
  { src: roomMountainView, alt: "Minimal Yet Cozy", title: "Minimal Yet Cozy" },
  { src: roomPresidentialSuite, alt: "Tropical Indoor Oasis", title: "Tropical Indoor Oasis" },
  { src: roomGardenView, alt: "Clean Contemporary Charm", title: "Clean Contemporary Charm" },
  { src: roomHoneymoonBungalow, alt: "Storage Area", title: "Storage Area" },
  { src: roomStandard, alt: "Elevated Nature Outlook", title: "Elevated Nature Outlook" },
  { src: roomExecutiveSuite, alt: "Water Chalets", title: "Water Chalets" },
  { src: roomPenthouseTerrace, alt: "Tranquil Nature Canvas", title: "Tranquil Nature Canvas" },
  { src: roomDeluxeOcean, alt: "Sunset View", title: "Sunset View" },
  { src: roomSpaSuite, alt: "Spa Suite", title: "Spa Suite" },
];

const Index = () => {
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

  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Generate YouTube URL based on mute state
  const youtubeUrl = `https://www.youtube.com/embed/MSuWgKDOohw?autoplay=1&mute=${isMuted ? 0 : 1}&loop=1&playlist=MSuWgKDOohw&controls=0&showinfo=0&rel=0&modestbranding=1&background=1&vq=hd1440`;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col md:block overflow-hidden">
        {/* Music Toggle Button */}
        <button onClick={toggleMute} className="absolute top-56 md:top-auto md:bottom-4 right-4 z-20 bg-primary/75 md:hover:bg-primary/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-105" aria-label={isMuted ? "Unmute background music" : "Mute background music"}>
          {isMuted ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          )}
        </button>
        {/* YouTube Video Background */}
        <div className="relative z-10 w-full mt-16" style={{ aspectRatio: "16/9" }}>
          <iframe ref={iframeRef} src={youtubeUrl} className="w-full h-full object-cover" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Background Video" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex items-center md:flex-col md:items-end justify-center md:justify-start md:mt-24 w-full md:absolute md:inset-0">
          <div className="absolute inset-0 bg-black/40 hidden md:block"></div>

          <div className="text-center md:text-right text-white max-w-4xl px-6 w-full md:mb-14 md:w-1/3 py-8 md:py-0 relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-white">Specially Crafted for Your Holiday</h1>
            <p className="text-lg text-center md:text-right md:m-0 md:text-xl lg:text-2xl md:text-white mb-6 md:mb-8 max-w-3xl mx-auto text-muted-foreground leading-relaxed">Escape into nature's sanctuary with refined comfort and warm, attentive service—memories to last a lifetime.</p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-white"
              onClick={() => {
                const element = document.getElementById("scenery");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Explore Now
            </Button>
          </div>
        </div>
      </section>

      {/* Scenery Section */}
      <section id="scenery" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resort Scenery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Discover the breathtaking beauty of our resort through stunning landscapes, elegant architecture, and tropical paradise settings that create an unforgettable experience.</p>
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
            <div className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer" style={{ aspectRatio: "9/16" }} onClick={() => setSelectedSceneryImage(sceneryGallery[currentSceneryIndex])}>
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
      <section id="hiking" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mountain Adventure Trail</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Embark on a scenic journey through our protected national park. From a quick 2-minute boat ride to a 30-40 minute hike, discover breathtaking views that will leave you in awe.</p>
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
                  <div key={index} className={`cursor-pointer rounded-lg overflow-hidden h-full transition-colors duration-300 ${selectedHikingImage === index ? "ring-4 ring-primary" : "ring-0"}`} onClick={() => setSelectedHikingImage(index)}>
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Endless Adventures Await</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From underwater exploration to mountain adventures, create lasting memories with activities designed for every member of your family.</p>
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Culinary Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Taste a world of flavors with our dishes, made using the best local ingredients and a touch of international flair. Every meal is a journey, set in a truly beautiful location</p>
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Guest Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Discover what makes our resort special through the words of our valued guests who have experienced the magic of our protected paradise.</p>
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
            <Card className="border-2 border-border hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-xl min-h-[300px]">
              <CardContent className="p-8">
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
                <p className="text-muted-foreground mb-6 italic leading-relaxed text-center text-lg">"{testimonials[currentTestimonialIndex].text}"</p>
                <p className="font-semibold text-foreground text-center text-xl">- {testimonials[currentTestimonialIndex].name}</p>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Spacious & Comfortable</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Discover our thoughtfully designed rooms, created for your comfort and relaxation. Each spacious room offers a clean, modern aesthetic, stunning views, and all the amenities you need for a perfect stay</p>
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
            {/* <ContactDialog
              trigger={ */}
            <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Book Now
              </Button>
            </a>
            {/* } */}
            {/* /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Information: 2 columns */}
          <h3 className="text-2xl font-bold mb-6 text-white">Pearl Island Resort</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Sandakan Office */}
            <div>
              <div className="space-y-3 text-white">
                <p>Sandakan Office</p>
                <a href="https://maps.app.goo.gl/pkaqfYKCzzatt6kC9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                  <MapPin size={20} className="text-white shrink-0" />
                  <span>Ground Floor, Lot 38 &amp; 39, Block C, Bandar Tyng, Mile 5, North Road, PPM 255 Elopura, 90000 Sandakan, Sabah, Malaysia.</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-white shrink-0" />
                  <a href="tel:+6089673999" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-673999
                  </a>
                  <a href="tel:+6089674999" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-674999
                  </a>
                  <a href="tel:+6089675999" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-675999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a href="mailto:mail@pearlislandresorts.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                    <Mail size={18} className="text-white shrink-0" />
                    <span>mail@pearlislandresorts.com</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Tawau Office */}
            <div>
              <div className="space-y-3 text-white">
                <p>Tawau Office</p>
                <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                  <MapPin size={20} className="text-white shrink-0" />
                  <span>1st Floor, No. 484, Block P, Bandar Sabindo, P.O Box 61120, 91021 Tawau, Sabah, Malaysia.</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-white shrink-0" />
                  <a href="tel:+6089765200" className="hover:underline transition-all duration-300 hover:scale-105">
                    (+60) 89-765200
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a href="mailto:mail@pearlislandresorts.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                    <Mail size={18} className="text-white shrink-0" />
                    <span>mail@pearlislandresorts.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media & Contact: full width below */}
          <div id="contacts">
            <h4 className="text-xl font-semibold mb-6 text-white">Follow Us</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61574060822782" target="_blank" className="text-white transition-all duration-300 hover:scale-110">
                Facebook
              </a>
              <a href="https://www.instagram.com/boheydulangresort/" target="_blank" className="text-white transition-all duration-300 hover:scale-110">
                Instagram
              </a>
              <span className="text-white">TikTok</span>
              <span className="text-white">Rednotes</span>
            </div>
          </div>
          <div className="border-t border-white mt-12 pt-8 text-center">
            <p className="text-white">© 2025 Pearl Island Resort. All rights reserved.</p>
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
