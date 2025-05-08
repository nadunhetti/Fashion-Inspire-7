
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Sustainable Wardrobe That Lasts",
    excerpt: "Learn the fundamentals of creating a versatile and eco-friendly wardrobe that stands the test of time.",
    image: "url:sexy.jpg",
    author: "Emma Johnson",
    date: "May 3, 2025"
  },
  {
    id: 2,
    title: "The Art of Mixing Patterns Like a Fashion Pro",
    excerpt: "Master the technique of combining different patterns and prints for a bold, sophisticated look.",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=2086&auto=format&fit=crop",
    author: "Michael Chang",
    date: "April 28, 2025"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-md mb-6 md:mb-0">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Fashion Journal</h2>
            <p className="font-montserrat text-gray-600">
              Insights, guides, and stories from the world of fashion.
            </p>
          </div>
          <Button variant="outline" className="group flex items-center font-montserrat">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                  <span className="font-montserrat text-xs text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="font-montserrat text-xs text-gray-500">By {post.author}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3">{post.title}</h3>
                <p className="font-montserrat text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                <Button variant="ghost" className="group w-fit flex items-center p-0 h-auto font-montserrat">
                  Read Article
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

export default BlogSection;
