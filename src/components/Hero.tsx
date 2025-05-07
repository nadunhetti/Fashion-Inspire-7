
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Your <span className="italic">Signature</span> Style
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-white/90 mb-8">
            Explore the latest trends, timeless classics, and get inspired to express yourself through fashion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-white text-black hover:bg-white/90 font-montserrat"
              size="lg"
            >
              Explore Trends
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-montserrat"
              size="lg"
            >
              Get Inspired
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in">
        <a 
          href="#trends" 
          className="flex flex-col items-center text-white hover:text-white/80 transition-colors"
        >
          <span className="font-montserrat text-sm uppercase tracking-wider mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
