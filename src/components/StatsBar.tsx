
import { Award, FileText, Users } from "lucide-react";

export const StatsBar = () => {
  return (
    <div className="bg-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <Award className="h-10 w-10 mb-3 text-dark-red" strokeWidth={1.5} />
            <span className="font-body text-lg font-extrabold">
              17 let zadovoljnih strank
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FileText className="h-10 w-10 mb-3 text-dark-red" strokeWidth={1.5} />
            <span className="font-body text-lg font-extrabold">
              53000 izvodov
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Users className="h-10 w-10 mb-3 text-dark-red" strokeWidth={1.5} />
            <span className="font-body text-lg font-extrabold">
              168000 potencialnih strank
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
