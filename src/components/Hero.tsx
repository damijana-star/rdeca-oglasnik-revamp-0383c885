
export const Hero = () => {
  return (
    <div className="relative text-white py-16 md:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ef9f75c3-294b-441f-b566-cb6e2e20abb9.png" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-red/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl mb-8 font-bold uppercase">
            IMATE IZDELEK, STORITEV ALI DOGODEK, KI BI GA RADI PREDSTAVILI ŠIRŠI LOKALNI SKUPNOSTI?
          </p>
          <p className="font-body text-lg md:text-xl mb-12 opacity-90">
            Distribucija po Notranjsko-kraški, Notranjsko-obalni in Goriški regiji zagotavlja visoko prepoznavnost in direkten stik z vašimi strankami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
