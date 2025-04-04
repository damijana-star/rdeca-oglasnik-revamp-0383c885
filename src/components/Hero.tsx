
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary/90 to-red-500/90 text-white py-12 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Najdi svojo zimsko opremo
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Največja izbira rabljene in nove smučarske opreme na enem mestu
          </p>
          
          <div className="bg-white rounded-lg p-2 flex items-center gap-2 shadow-lg max-w-xl mx-auto">
            <Input 
              type="text" 
              placeholder="Kaj iščete?" 
              className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button type="submit" className="flex items-center gap-2">
              <Search size={18} />
              <span>Išči</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
