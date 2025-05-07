
import { Button } from "@/components/ui/button";

const inspirations = [
  {
    id: 1,
    title: "Summer Casual",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop",
    tags: ["casual", "summer"]
  },
  {
    id: 2,
    title: "Office Chic",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1926&auto=format&fit=crop",
    tags: ["workwear", "elegant"]
  },
  {
    id: 3,
    title: "Evening Glamour",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1973&auto=format&fit=crop",
    tags: ["evening", "glamour"]
  },
  {
    id: 4,
    title: "Street Style",
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1974&auto=format&fit=crop",
    tags: ["street", "urban"]
  },
  {
    id: 5,
    title: "Minimalist",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1935&auto=format&fit=crop",
    tags: ["minimal", "modern"]
  },
  {
    id: 6,
    title: "Vintage Inspired",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1783&auto=format&fit=crop",
    tags: ["vintage", "retro"]
  }
];

const InspirationGrid = () => {
  return (
    <section id="inspiration" className="py-20">
      <div className="container px-4">
        <div className="max-w-md mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Style Inspiration</h2>
          <p className="font-montserrat text-gray-600">
            Find your perfect look with these curated style inspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {inspirations.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="font-playfair text-xl text-white font-bold">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full font-montserrat">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="font-montserrat" size="lg">
            Load More Styles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InspirationGrid;
