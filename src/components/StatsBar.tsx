
import { Award, FileText, Users } from "lucide-react";

export const StatsBar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 border-y border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-500 hover:shadow-soft hover:-translate-y-1 bg-white">
            <div className="rounded-full bg-red-50 p-4 mb-4">
              <Award className="h-10 w-10 text-dark-red" strokeWidth={1.5} />
            </div>
            <span className="font-body text-lg font-bold">
              17 let zadovoljnih strank
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-500 hover:shadow-soft hover:-translate-y-1 bg-white">
            <div className="rounded-full bg-red-50 p-4 mb-4">
              <FileText className="h-10 w-10 text-dark-red" strokeWidth={1.5} />
            </div>
            <span className="font-body text-lg font-bold">
              53000 izvodov
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-500 hover:shadow-soft hover:-translate-y-1 bg-white">
            <div className="rounded-full bg-red-50 p-4 mb-4">
              <Users className="h-10 w-10 text-dark-red" strokeWidth={1.5} />
            </div>
            <span className="font-body text-lg font-bold">
              168000 potencialnih strank
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
