
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const trends = [
  {
    id: 1,
    title: "Oversized Tailoring",
    description: "Embrace comfort with structured yet relaxed silhouettes.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    category: "Workwear"
  },
  {
    id: 2,
    title: "Sustainable Fashion",
    description: "Eco-conscious pieces designed with the planet in mind.",
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=2067&auto=format&fit=crop",
    category: "Eco-friendly"
  },
  {
    id: 3,
    title: "Statement Sleeves",
    description: "Bold shoulder details that transform any silhouette.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    category: "Evening Wear"
  }
];

const TrendingSection = () => {
  return (
    <section id="trends" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-md mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
          <p className="font-montserrat text-gray-600">
            Stay ahead of the curve with these emerging fashion trends making waves this season.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend) => (
            <div 
              key={trend.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={trend.image} 
                  alt={trend.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block font-montserrat text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {trend.category}
                </span>
                <h3 className="font-playfair text-xl font-bold mb-2">{trend.title}</h3>
                <p className="font-montserrat text-gray-600 mb-4">{trend.description}</p>
                <Button variant="ghost" className="group flex items-center p-0 h-auto font-montserrat">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
