
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Women's", href: "#" },
        { name: "Men's", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Beauty", href: "#" },
        { name: "Sale", href: "#" },
      ]
    },
    {
      title: "Information",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "FAQs", href: "#" },
      ]
    },
    {
      title: "Customer Care",
      links: [
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Size Guide", href: "#" },
        { name: "Track Order", href: "#" },
        { name: "Gift Cards", href: "#" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
  ];
  
  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <a href="/" className="font-playfair text-2xl font-bold">
              Fashion<span className="italic">Inspiration</span>
            </a>
            <p className="font-montserrat text-sm text-gray-600 mt-4">
              Your daily source of fashion inspiration, trends, and style advice.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white p-2 rounded-full text-gray-600 hover:text-black hover:shadow-sm transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-playfair font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="font-montserrat text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="font-montserrat text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} Fashion Inspiration. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="American Express" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
