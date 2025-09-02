import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ContactDialog from '@/components/ContactDialog';
import ImageModal from '@/components/ImageModal';
import { Phone, Mail, MapPin } from 'lucide-react';

// Import hero and hiking images
import heroPlaceholder from '@/assets/hero-video-placeholder.jpg';
import hikingTrail from '@/assets/hiking-trail.jpg';
import boatTravel from '@/assets/hiking-boat-travel.jpg';
import hikingMap from '@/assets/hiking-map.jpg';
import hikingStart from '@/assets/hiking-start-new.jpg';
import hikingStairs from '@/assets/hiking-trail-new.jpg';
import mountainTopView from '@/assets/mountain-top-view.jpg';

// Import food images
import foodSeafoodPlatter from '@/assets/food-seafood-platter.jpg';
import foodBeefSteak from '@/assets/food-beef-steak.jpg';
import foodLobsterThermidor from '@/assets/food-lobster-thermidor.jpg';
import foodTrufflePasta from '@/assets/food-truffle-pasta.jpg';
import foodSushiPlatter from '@/assets/food-sushi-platter.jpg';
import foodChocolateDessert from '@/assets/food-chocolate-dessert.jpg';
import foodMediterraneanVegetables from '@/assets/food-mediterranean-vegetables.jpg';
import foodDuckBreast from '@/assets/food-duck-breast.jpg';
import foodFreshOysters from '@/assets/food-fresh-oysters.jpg';
import foodMushroomRisotto from '@/assets/food-mushroom-risotto.jpg';

// Import activity images
import divingActivity from '@/assets/diving-activity.jpg';
import snorkelingActivity from '@/assets/snorkeling-activity.jpg';
import kayakingActivity from '@/assets/kayaking-activity.jpg';
import cyclingActivity from '@/assets/cycling-activity.jpg';
import relaxingActivity from '@/assets/relaxing-activity.jpg';
import diningActivity from '@/assets/dining-activity.jpg';
import sunsetActivity from '@/assets/sunset-activity.jpg';
import conversationActivity from '@/assets/conversation-activity.jpg';

// Import room images
import roomOceanView from '@/assets/room-ocean-view.jpg';
import roomFamilySuite from '@/assets/room-family-suite.jpg';
import roomBeachfrontVilla from '@/assets/room-beachfront-villa.jpg';
import roomMountainView from '@/assets/room-mountain-view.jpg';
import roomPresidentialSuite from '@/assets/room-presidential-suite.jpg';
import roomGardenView from '@/assets/room-garden-view.jpg';
import roomHoneymoonBungalow from '@/assets/room-honeymoon-bungalow.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import roomExecutiveSuite from '@/assets/room-executive-suite.jpg';
import roomPenthouseTerrace from '@/assets/room-penthouse-terrace.jpg';
import roomDeluxeOcean from '@/assets/room-deluxe-ocean.jpg';
import roomSpaSuite from '@/assets/room-spa-suite.jpg';

// Import scenery images
import sceneryResortExterior from '@/assets/scenery-resort-exterior.jpg';
import sceneryDiningHall from '@/assets/scenery-dining-hall.jpg';
import sceneryPoolInfinity from '@/assets/scenery-pool-infinity.jpg';
import sceneryBeachWhiteSand from '@/assets/scenery-beach-white-sand.jpg';
import scenerySpaPavilion from '@/assets/scenery-spa-pavilion.jpg';
import sceneryLobby from '@/assets/scenery-lobby.jpg';
import sceneryWoodenPier from '@/assets/scenery-wooden-pier.jpg';
import sceneryOutdoorBar from '@/assets/scenery-outdoor-bar.jpg';
import sceneryGardenWalkway from '@/assets/scenery-garden-walkway.jpg';
import sceneryWellnessCenter from '@/assets/scenery-wellness-center.jpg';
import sceneryTennisCourt from '@/assets/scenery-tennis-court.jpg';
import scenerySunsetTerrace from '@/assets/scenery-sunset-terrace.jpg';

const hikingImages = [
  { 
    src: hikingMap, 
    alt: "Hiking trail map from resort to mountain top",
    title: "Complete Trail Map",
    description: "30-40 minute journey from resort to summit" 
  },
  { 
    src: boatTravel, 
    alt: "Cabin Cruiser Journey",
    title: "Luxury Boat Transfer",
    description: "Scenic cabin cruiser ride to the island" 
  },
  { 
    src: hikingStart, 
    alt: "Hiking Trail Entrance",
    title: "Welcome to the Trail", 
    description: "Guided start point with trail information"
  },
  { 
    src: hikingStairs, 
    alt: "Natural Mountain Trail",
    title: "Natural Walking Path",
    description: "Rocky trail through tropical terrain" 
  },
  { 
    src: mountainTopView, 
    alt: "Mountain Top View",
    title: "Panoramic Summit View",
    description: "Stunning ocean and island vistas" 
  }
];

const activities = [
  { src: divingActivity, alt: "Scuba Diving", title: "Diving" },
  { src: snorkelingActivity, alt: "Snorkeling", title: "Snorkeling" },
  { src: kayakingActivity, alt: "Kayaking", title: "Kayaking" },
  { src: cyclingActivity, alt: "Cycling", title: "Cycling" },
  { src: relaxingActivity, alt: "Relaxing", title: "Relaxation" },
  { src: diningActivity, alt: "Fine Dining", title: "Fine Dining" },
  { src: sunsetActivity, alt: "Sunset Viewing", title: "Sunset Views" },
  { src: conversationActivity, alt: "Social Time", title: "Social Activities" }
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
  { src: foodMushroomRisotto, name: "Mushroom Risotto", description: "Creamy risotto with wild mushrooms" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    platform: "TripAdvisor",
    rating: 5,
    text: "Absolutely magical experience! The hiking trail to the mountain top was breathtaking, and the marine life while snorkeling was incredible. This resort truly delivers on creating unforgettable memories."
  },
  {
    name: "Mike Chen", 
    platform: "Trip.com",
    rating: 5,
    text: "Perfect family vacation spot! Kids loved the boat ride to hiking trail, and adults appreciated the luxury amenities. The conservation efforts make you feel good about visiting this pristine location."
  },
  {
    name: "Emma Williams",
    platform: "Google Reviews", 
    rating: 5,
    text: "The most beautiful resort I've ever stayed at. The mountain views from our room were stunning, and the diving experience showed us marine life we'd never seen before. Highly recommended!"
  },
  {
    name: "David Rodriguez",
    platform: "TripAdvisor",
    rating: 5,
    text: "Every detail was perfect - from the comfortable hiking facilities to the delicious local cuisine. The staff went above and beyond to make our anniversary trip special."
  },
  {
    name: "Lisa Park",
    platform: "Trip.com", 
    rating: 5,
    text: "Unparalleled natural beauty combined with luxury accommodations. The protected marine area is a diver's paradise, and the hiking trails offer spectacular island views."
  },
  {
    name: "James Thompson",
    platform: "Booking.com",
    rating: 5,
    text: "This resort exceeded all expectations. The conservation focus is admirable, and the activities are perfectly organized. The sunset views from the mountain are unforgettable!"
  },
  {
    name: "Anna Martinez", 
    platform: "TripAdvisor",
    rating: 5,
    text: "A true gem in paradise! The combination of adventure activities and relaxation options makes this perfect for couples and families. We're already planning our return visit."
  },
  {
    name: "Tom Wilson",
    platform: "Trip.com",
    rating: 5,
    text: "Outstanding service and incredible location. The protected waters offer amazing snorkeling, and the mountain hiking trail is well-maintained with stunning payoffs at the top."
  }
];

const sceneryGallery = [
  { src: sceneryResortExterior, alt: "Resort Exterior", title: "Tropical Paradise", description: "Luxurious resort surrounded by pristine tropical gardens and swaying palm trees" },
  { src: sceneryDiningHall, alt: "Main Dining Hall", title: "Elegant Dining", description: "Sophisticated dining hall with panoramic ocean views and crystal chandeliers" },
  { src: sceneryPoolInfinity, alt: "Infinity Pool", title: "Infinity Edge Pool", description: "Stunning infinity pool offering breathtaking views of the endless ocean horizon" },
  { src: sceneryBeachWhiteSand, alt: "White Sand Beach", title: "Pristine Beach", description: "Powder-white sand beach with crystal clear turquoise waters" },
  { src: scenerySpaPavilion, alt: "Spa Pavilion", title: "Wellness Sanctuary", description: "Tranquil spa pavilion nestled in lush tropical gardens for ultimate relaxation" },
  { src: sceneryLobby, alt: "Resort Lobby", title: "Grand Lobby", description: "Impressive lobby featuring high ceilings and natural tropical elements" },
  { src: sceneryWoodenPier, alt: "Wooden Pier", title: "Ocean Pier", description: "Beautiful wooden pier extending into the crystal clear ocean waters" },
  { src: sceneryOutdoorBar, alt: "Tiki Bar", title: "Tropical Bar", description: "Authentic tiki bar with thatched roof overlooking the stunning ocean views" },
  { src: sceneryGardenWalkway, alt: "Garden Path", title: "Tropical Gardens", description: "Meandering stone pathways through vibrant tropical flowers and greenery" },
  { src: sceneryWellnessCenter, alt: "Wellness Center", title: "Meditation Space", description: "Peaceful wellness center with yoga pavilions and meditation areas" },
  { src: sceneryTennisCourt, alt: "Tennis Court", title: "Sports Facilities", description: "Professional tennis court surrounded by tropical landscaping" },
  { src: scenerySunsetTerrace, alt: "Sunset Terrace", title: "Golden Hour Views", description: "Spectacular sunset viewing terrace with panoramic ocean vistas" }
];

const rooms = [
  { src: roomOceanView, alt: "Ocean View Room", title: "Ocean View Room" },
  { src: roomFamilySuite, alt: "Family Suite", title: "Family Suite" },
  { src: roomBeachfrontVilla, alt: "Beachfront Villa", title: "Beachfront Villa" },
  { src: roomMountainView, alt: "Mountain View Room", title: "Mountain View Room" },
  { src: roomPresidentialSuite, alt: "Presidential Suite", title: "Presidential Suite" },
  { src: roomGardenView, alt: "Garden View Room", title: "Garden View Room" },
  { src: roomHoneymoonBungalow, alt: "Honeymoon Bungalow", title: "Honeymoon Bungalow" },
  { src: roomStandard, alt: "Standard Room", title: "Standard Room" },
  { src: roomExecutiveSuite, alt: "Executive Suite", title: "Executive Suite" },
  { src: roomPenthouseTerrace, alt: "Penthouse Terrace", title: "Penthouse Terrace" },
  { src: roomDeluxeOcean, alt: "Deluxe Ocean Suite", title: "Deluxe Ocean Suite" },
  { src: roomSpaSuite, alt: "Spa Suite", title: "Spa Suite" }
];

const Index = () => {
  const [selectedHikingImage, setSelectedHikingImage] = useState(0);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedActivityImage, setSelectedActivityImage] = useState<{src: string; alt: string; title: string} | null>(null);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [selectedRoomImage, setSelectedRoomImage] = useState<{src: string; alt: string; title: string} | null>(null);
  const [selectedFoodImage, setSelectedFoodImage] = useState<{src: string; name: string; description: string} | null>(null);
  const [selectedSceneryImage, setSelectedSceneryImage] = useState<{src: string; alt: string; title: string; description: string} | null>(null);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroPlaceholder})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Specially Crafted for Your Holiday
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Escape into nature’s sanctuary with refined comfort and warm, attentive service—memories to last a lifetime.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.getElementById('scenery');
              // const element = document.getElementById('hiking');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Now
          </Button>
        </div>
      </section>

      {/* Scenery Section */}
      <section id="scenery" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resort Scenery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the breathtaking beauty of our resort through stunning landscapes, elegant architecture, 
              and tropical paradise settings that create an unforgettable experience.
            </p>
          </div>
          
          {/* Desktop: Instagram-style grid (4 columns x 3 rows) */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-8">
            {sceneryGallery.map((scenery, index) => (
              <div
                key={index}
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ aspectRatio: '9/16' }}
                onClick={() => setSelectedSceneryImage(scenery)}
              >
                <img
                  src={scenery.src}
                  alt={scenery.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm">
                    {scenery.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Tinder-style carousel */}
          <div className="md:hidden max-w-sm mx-auto">
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ aspectRatio: '9/16' }}
              onClick={() => setSelectedSceneryImage(sceneryGallery[currentSceneryIndex])}
            >
              <img
                src={sceneryGallery[currentSceneryIndex].src}
                alt={sceneryGallery[currentSceneryIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {sceneryGallery[currentSceneryIndex].title}
                </h3>
                <p className="text-white/90 text-sm">
                  {sceneryGallery[currentSceneryIndex].description}
                </p>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentSceneryIndex((prev) => (prev - 1 + sceneryGallery.length) % sceneryGallery.length)}
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentSceneryIndex((prev) => (prev + 1) % sceneryGallery.length)}
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary"
              >
                Next
              </Button>
            </div>
            
            {/* Dot navigation */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {sceneryGallery.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${
                    index === currentSceneryIndex ? 'bg-primary border-primary' : 'bg-primary/20 border-primary/40 hover:bg-primary/30'
                  }`}
                  onClick={() => setCurrentSceneryIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiking Section */}
      <section id="hiking" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mountain Adventure Trail
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Embark on a scenic journey through our protected national park. From a quick 2-minute boat ride to a 
              30-40 minute hike, discover breathtaking views that will leave you in awe.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
            {/* Main Display */}
            <div className="lg:w-[90%] order-1 lg:order-1 lg:h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full">
                <img
                  src={hikingImages[selectedHikingImage].src}
                  alt={hikingImages[selectedHikingImage].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {hikingImages[selectedHikingImage].title}
                  </h3>
                  <p className="text-white/90">
                    {hikingImages[selectedHikingImage].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="lg:w-[10%] order-2 lg:order-2 lg:h-full">
              <div className="grid grid-cols-5 lg:grid-cols-1 lg:grid-rows-5 gap-3 h-full">
                {hikingImages.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg overflow-hidden h-full transition-colors duration-300 ${
                      selectedHikingImage === index ? 'ring-4 ring-primary' : 'ring-0'
                    }`}
                    onClick={() => setSelectedHikingImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Endless Adventures Await
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From underwater exploration to mountain adventures, create lasting memories with activities 
              designed for every member of your family.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                onClick={() => {
                  setCurrentActivityIndex(index);
                  setSelectedActivityImage({ src: activity.src, alt: activity.alt, title: activity.title });
                }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={activity.src}
                      alt={activity.alt}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">
                        {activity.title}
                      </h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Culinary Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Taste a world of flavors with our dishes, made using the best local ingredients and a touch of international flair. Every meal is a journey, set in a truly beautiful location
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {foodGallery.map((food, index) => (
              <div
                key={index}
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedFoodImage(food)}
              >
                <div className="aspect-square">
                  <img
                    src={food.src}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Always visible title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {food.name}
                  </h3>
                </div>
                
                {/* Hover overlay with title and description */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h3 className="text-white font-bold text-base mb-2">
                      {food.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-tight">
                      {food.description}
                    </p>
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
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Guest Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes our resort special through the words of our valued guests who have 
              experienced the magic of our protected paradise.
            </p>
          </div>
          
          {/* Desktop/Tablet: Grid layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 justify-center">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-xl">★</span>
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-muted-foreground font-medium">
                      {testimonial.platform}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed text-center">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground text-center">
                    - {testimonial.name}
                  </p>
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
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-muted-foreground font-medium">
                    {testimonials[currentTestimonialIndex].platform}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed text-center text-lg">
                  "{testimonials[currentTestimonialIndex].text}"
                </p>
                <p className="font-semibold text-foreground text-center text-xl">
                  - {testimonials[currentTestimonialIndex].name}
                </p>
              </CardContent>
            </Card>
            
            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={prevTestimonial}
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextTestimonial}
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary"
              >
                Next
              </Button>
            </div>
            
            {/* Dot navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${
                    index === currentTestimonialIndex ? 'bg-primary border-primary' : 'bg-primary/20 border-primary/40 hover:bg-primary/30'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Spacious & Comfortable
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our thoughtfully designed rooms, created for your comfort and relaxation. Each spacious room offers a clean, modern aesthetic, stunning views, and all the amenities you need for a perfect stay
            </p>
          </div>
          
          {/* Desktop: Pinterest-style layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                {[0, 4, 8].map(index => rooms[index] && (
                  <Card 
                    key={index} 
                    className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    onClick={() => {
                      setCurrentRoomIndex(index);
                      setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={rooms[index].src}
                          alt={rooms[index].alt}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ height: `${240 + (index % 3) * 80}px` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">
                            {rooms[index].title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                {[1, 5, 9].map(index => rooms[index] && (
                  <Card 
                    key={index} 
                    className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    onClick={() => {
                      setCurrentRoomIndex(index);
                      setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={rooms[index].src}
                          alt={rooms[index].alt}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ height: `${280 + (index % 3) * 60}px` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">
                            {rooms[index].title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                {[2, 6, 10].map(index => rooms[index] && (
                  <Card 
                    key={index} 
                    className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    onClick={() => {
                      setCurrentRoomIndex(index);
                      setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={rooms[index].src}
                          alt={rooms[index].alt}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ height: `${260 + (index % 3) * 90}px` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">
                            {rooms[index].title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col gap-6">
                {[3, 7, 11].map(index => rooms[index] && (
                  <Card 
                    key={index} 
                    className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    onClick={() => {
                      setCurrentRoomIndex(index);
                      setSelectedRoomImage({ src: rooms[index].src, alt: rooms[index].alt, title: rooms[index].title });
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={rooms[index].src}
                          alt={rooms[index].alt}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ height: `${250 + (index % 3) * 120}px` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">
                            {rooms[index].title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Tinder-style layout */}
          <div className="md:hidden">
            <div className="relative max-w-sm mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={rooms[currentRoomIndex].src}
                  alt={rooms[currentRoomIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {rooms[currentRoomIndex].title}
                  </h3>
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevRoom}
                  className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={nextRoom}
                  className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-primary"
                >
                  Next
                </Button>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                {rooms.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${
                      index === currentRoomIndex ? 'bg-primary border-primary' : 'bg-primary/20 border-primary/40 hover:bg-primary/30'
                    }`}
                    onClick={() => setCurrentRoomIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <ContactDialog
              trigger={
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Pearl Island Resort</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>123 Mountain View Drive, Pearl Island Resort, National Park Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-primary" />
                  <span>info@pearlisland.com</span>
                </div>
              </div>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Follow Us</h4>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  TikTok
                </a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  RedNotes
                </a>
                <ContactDialog
                  trigger={
                    <button className="text-slate-300 hover:text-primary transition-colors">
                      Enquiry
                    </button>
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Pearl Island Resort. All rights reserved.
            </p>
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
            description: selectedFoodImage.description
          }}
          images={foodGallery.map(food => ({
            src: food.src,
            alt: food.name,
            title: food.name,
            description: food.description
          }))}
          currentIndex={foodGallery.findIndex(food => food.src === selectedFoodImage.src)}
          onNavigate={(index) => {
            setSelectedFoodImage(foodGallery[index]);
          }}
        />
      )}

      {/* Image Modals */}
      {selectedActivityImage && (
        <ImageModal
          isOpen={!!selectedActivityImage}
          onClose={() => setSelectedActivityImage(null)}
          image={selectedActivityImage}
          images={activities}
          currentIndex={currentActivityIndex}
          onNavigate={handleActivityNavigation}
        />
      )}
      
      {selectedRoomImage && (
        <ImageModal
          isOpen={!!selectedRoomImage}
          onClose={() => setSelectedRoomImage(null)}
          image={selectedRoomImage}
          images={rooms}
          currentIndex={currentRoomIndex}
          onNavigate={handleRoomNavigation}
        />
      )}

      {/* Scenery Image Modal */}
      {selectedSceneryImage && (
        <ImageModal
          isOpen={!!selectedSceneryImage}
          onClose={() => setSelectedSceneryImage(null)}
          image={{
            src: selectedSceneryImage.src,
            alt: selectedSceneryImage.alt,
            title: selectedSceneryImage.title,
            description: selectedSceneryImage.description
          }}
          images={sceneryGallery.map(scenery => ({
            src: scenery.src,
            alt: scenery.alt,
            title: scenery.title,
            description: scenery.description
          }))}
          currentIndex={sceneryGallery.findIndex(scenery => scenery.src === selectedSceneryImage.src)}
          onNavigate={(index) => {
            setSelectedSceneryImage(sceneryGallery[index]);
          }}
        />
      )}
    </div>
  );
};

export default Index;
