
import { Newspaper, Award, Users, Target, TrendingUp, Calendar } from "lucide-react";

const AdvertisingBenefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">ZAKAJ OGLAŠEVATI Z NAMI</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Tiskano oglaševanje prinaša edinstvene prednosti, ki jih digitalni kanali ne morejo ponuditi.
            Odkrijte, zakaj so tiskani oglasi še vedno nepogrešljiv del vašega oglaševalskega miksa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#e32530]/10 p-3 rounded-full mr-4">
                <Newspaper className="h-7 w-7 text-[#e32530]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Otipljivost in trajnost</h3>
            </div>
            <p className="text-sm text-gray-600">
              Tiskani oglasi so fizični in otipljivi, kar prinaša višjo stopnjo zaupanja in daljšo prisotnost v domovih bralcev.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#e32530]/10 p-3 rounded-full mr-4">
                <Users className="h-7 w-7 text-[#e32530]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Ciljana lokalna publika</h3>
            </div>
            <p className="text-sm text-gray-600">
              Naši tiskani oglasi dosežejo natančno segmentirano lokalno občinstvo, kar zagotavlja relevantnost in učinkovitost oglaševanja.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#e32530]/10 p-3 rounded-full mr-4">
                <Award className="h-7 w-7 text-[#e32530]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Verodostojnost in zaupanje</h3>
            </div>
            <p className="text-sm text-gray-600">
              Tiskani mediji uživajo visoko stopnjo zaupanja, kar se prenaša tudi na oglase in blagovne znamke, ki se v njih pojavljajo.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#e32530]/10 p-3 rounded-full mr-4">
                <Target className="h-7 w-7 text-[#e32530]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Manjša konkurenčnost</h3>
            </div>
            <p className="text-sm text-gray-600">
              Zaradi premika oglaševanja na splet je v tiskanih medijih manj oglasov, kar pomeni večjo vidnost vaših oglasov.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#e32530]/10 p-3 rounded-full mr-4">
                <TrendingUp className="h-7 w-7 text-[#e32530]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Višja stopnja angažiranosti</h3>
            </div>
            <p className="text-sm text-gray-600">
              Bralci tiskanih medijev so bolj osredotočeni in posvečajo več pozornosti vsebini, vključno z oglasi.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#e32530]/10 p-3 rounded-full mr-4">
                <Calendar className="h-7 w-7 text-[#e32530]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Dolgoročna vrednost</h3>
            </div>
            <p className="text-sm text-gray-600">
              Medtem ko spletni oglasi hitro izginejo, tiskani oglasi ostajajo prisotni dlje časa in prinašajo dolgoročno vrednost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingBenefits;
