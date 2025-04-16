
import ContactInfoDisplay from "./ContactInfoDisplay";

export const ContactForm = () => {
  return (
    <div id="contact" className="section bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Kontaktni obrazec</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Imate vprašanje ali potrebujete dodatne informacije? Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form
              target="_blank"
              action="https://formsubmit.co/info@nanoski-oglasnik.eu"
              method="POST"
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Ime in Priimek"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Email naslov"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={10}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
                    placeholder="Sporočilo"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-red hover:bg-dark-red/90 text-white px-4 py-3 rounded-md transition-colors"
              >
                Pošlji sporočilo
              </button>
            </form>
          </div>
          <ContactInfoDisplay />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
