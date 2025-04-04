
import { Award, FileText, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-dark-red to-dark-red/90 text-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Najdi svojo zimsko opremo
          </h1>
          <p className="font-body text-xl md:text-2xl mb-12 opacity-90">
            Največja izbira rabljene in nove smučarske opreme na enem mestu
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center justify-center">
              <Award className="h-10 w-10 mb-3 text-white/80" strokeWidth={1.5} />
              <span className="font-body text-lg font-semibold">17 let zadovoljnih strank</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FileText className="h-10 w-10 mb-3 text-white/80" strokeWidth={1.5} />
              <span className="font-body text-lg font-semibold">53000 izvodov</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Users className="h-10 w-10 mb-3 text-white/80" strokeWidth={1.5} />
              <span className="font-body text-lg font-semibold">168000 potencialnih strank</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
