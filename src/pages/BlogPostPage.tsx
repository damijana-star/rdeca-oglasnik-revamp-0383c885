import React from 'react';
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const allBlogPosts = [{
  id: 1,
  title: "Kako izbrati pravo smučarsko opremo za začetnike",
  excerpt: "Pred nakupom smučarske opreme je pomembno upoštevati nekaj ključnih dejavnikov, ki vam bodo pomagali pri izbiri prave opreme za vaše potrebe in raven znanja.",
  content: `
      <p>Pred nakupom smučarske opreme je pomembno upoštevati nekaj ključnih dejavnikov, ki vam bodo pomagali pri izbiri prave opreme za vaše potrebe in raven znanja.</p>
      
      <h2>1. Izbira pravih smuči</h2>
      <p>Za začetnike so najprimernejše smuči, ki so nekoliko krajše in širše, saj omogočajo lažje vodenje zavojev in boljšo stabilnost. Pri izbiri dolžine smuči velja pravilo, da naj bodo smuči za začetnike visoke do brade, za naprednejše smučarje pa do čela ali višje.</p>
      
      <h2>2. Smučarski čevlji</h2>
      <p>Smučarski čevlji so morda najpomembnejši del opreme, saj neposredno prenašajo vaše gibe na smuči. Pomembno je, da so čevlji udobni, a hkrati dovolj tesni za dobro kontrolo. Pri začetnikih naj bo "flex" indeks (togost čevlja) nižji, običajno med 60-80 za ženske in 70-90 za moške.</p>
      
      <h2>3. Smučarske palice</h2>
      <p>Za določitev prave dolžine palic velja pravilo, da jih obrnete z ročajem navzdol in prime te pod košarico. Komolec naj bo pod pravim kotom. Za začetnike so primerne nekoliko krajše palice, ki omogočajo lažje ravnotežje.</p>
      
      <h2>4. Zaščitna oprema</h2>
      <p>Nikoli ne podcenjujte pomena zaščitne opreme. Čelada je obvezna, priporočljiva pa je tudi zaščita za hrbtenico, zapestja in kolena, posebej za začetnike, pri katerih je verjetnost padca večja.</p>
      
      <h2>5. Oblačila</h2>
      <p>Smučarska oblačila morajo biti vodoodporna, topla in zračna. Sistem oblačenja v plasteh vam omogoča prilagajanje glede na vremenske pogoje in intenzivnost smučanja.</p>
      
      <h2>Zaključek</h2>
      <p>Za začetnike priporočamo, da opremo najprej najamete in jo šele po nekaj smučarskih dneh, ko boste bolje razumeli svoje potrebe in preference, tudi kupite. Pri nakupu poiščite nasvet izkušenega prodajalca, ki vam bo znal svetovati glede na vaše fizične značilnosti in raven znanja.</p>
    `,
  date: "15. 10. 2024",
  author: "Janez Novak",
  image: "https://images.unsplash.com/photo-1622484212776-62edf9a686e8?ixlib=rb-4.0.3",
  category: "Nasveti",
  tags: ["oprema", "začetniki", "smuči", "nakup"]
}, {
  id: 2,
  title: "5 top smučarskih destinacij v Sloveniji",
  excerpt: "Slovenija kljub majhnosti ponuja odlična smučišča za vse ravni smučarjev. Preverite naš izbor petih najboljših destinacij za zimsko smuko v naši državi.",
  content: `
      <p>Slovenija kljub majhnosti ponuja odlična smučišča za vse ravni smučarjev. Preverite naš izbor petih najboljših destinacij za zimsko smuko v naši državi.</p>
      
      <h2>1. Kranjska Gora</h2>
      <p>Kot gostiteljica tekem svetovnega pokala je Kranjska Gora eno najbolj znanih slovenskih smučišč. Ponuja proge različnih težavnosti, od začetniških do zahtevnih, kot je legendarna proga Podkoren. Zaradi svoje lege blizu meje je priljubljena tudi med tujimi smučarji.</p>
      
      <h2>2. Krvavec</h2>
      <p>Zaradi bližine Ljubljane in letališča Jožeta Pučnika je Krvavec izjemno dostopno smučišče. Z nadmorsko višino do 1971 metrov ponuja zanesljive snežne razmere in raznolike proge za vse ravni smučarjev. Pogled na Ljubljansko kotlino med smučanjem je neprecenljiv.</p>
      
      <h2>3. Rogla</h2>
      <p>Rogla na Pohorju je znana po urejenih progah in zanesljivih snežnih razmerah. Zaradi svoje lege je manj izpostavljena vetru in megli, kar omogoča prijetno smučanje tudi v manj idealnih vremenskih pogojih. Odlična je za družine z različnimi ravnmi smučarskega znanja.</p>
      
      <h2>4. Mariborsko Pohorje</h2>
      <p>Pohorje ponuja najdaljšo osvetljeno smučarsko progo v Evropi za nočno smučanje. 41,5 km prog različnih težavnostnih stopenj in bližina Maribora ga delajo privlačnega za dnevne in večdnevne smučarske izlete.</p>
      
      <h2>5. Cerkno</h2>
      <p>Smučišče Cerkno se ponaša z nazivom "Najbolj urejeno slovensko smučišče" že več let zapored. Moderne naprave, raznolike proge in odlična urejenost ga uvrščajo med najboljše slovenske smučarske destinacije, posebej za družine in smučarje srednjega znanja.</p>
      
      <h2>Zaključek</h2>
      <p>Slovenska smučišča morda niso tako obsežna kot alpski velikani, vendar s svojo dostopnostjo, raznolikostjo in kakovostno ponudbo predstavljajo odlično izbiro za zimske užitke. Vsako od naštetih smučišč ima svoje edinstvene značilnosti, ki jih je vredno izkusiti.</p>
    `,
  date: "28. 09. 2024",
  author: "Maja Kovač",
  image: "https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3",
  category: "Destinacije",
  tags: ["Slovenija", "smučišča", "destinacije", "zima"]
}, {
  id: 3,
  title: "Kako pravilno vzdrževati smuči med sezono",
  excerpt: "Pravilno vzdrževanje smuči je ključno za optimalno izkušnjo smučanja. Naučite se, kako poskrbeti za svojo opremo, da bo trajala dlje in bolje delovala.",
  content: `
      <p>Pravilno vzdrževanje smuči je ključno za optimalno izkušnjo smučanja. Naučite se, kako poskrbeti za svojo opremo, da bo trajala dlje in bolje delovala.</p>
      
      <h2>1. Redno čiščenje</h2>
      <p>Po vsakem smučarskem dnevu je pomembno, da smuči očistite. Odstranite sneg in umazanijo s celotne površine, posebej pozorni pa bodite na robnikei drsno ploskev. Uporabite mehko krpo in se izogibajte uporabi agresivnih čistil, ki bi lahko poškodovala površino.</p>
      
      <h2>2. Sušenje</h2>
      <p>Smuči vedno hranite na suhem mestu pri sobni temperaturi. Izogibajte se shranjevanju v avtomobilih ali vlažnih kleteh. Po uporabi jih temeljito posušite, preden jih pospravite, saj lahko vlaga povzroči korozijo robnikov.</p>
      
      <h2>3. Mazanje drsne ploskve</h2>
      <p>Za optimalno drsnost in zaščito drsne ploskve je potrebno redno mazanje. Pogostost je odvisna od intenzivnosti uporabe in vrste snega, običajno pa je priporočljivo mazanje vsakih 3-5 smučarskih dni. Izberite vosek, ki ustreza temperaturam, v katerih smučate.</p>
      
      <h2>4. Brušenje robnikov</h2>
      <p>Ostri robniki so ključni za dobro kontrolo, posebej na trdem snegu in ledu. Če opazite, da smuči slabše držijo na robnikih ali če so ti vidno poškodovani, je čas za brušenje. To lahko storite sami z ustreznim orodjem ali zaupate strokovnjakom v specializiranih trgovinah.</p>
      
      <h2>5. Popravilo poškodb</h2>
      <p>Manjše praske in poškodbe drsne ploskve lahko popravite sami s pomočjo posebnih voskov za popravila. Večje poškodbe, kot so globoke zareze ali poškodovani robniki, pa zahtevajo strokovno obravnavo.</p>
      
      <h2>6. Pravilno shranjevanje izven sezone</h2>
      <p>Pred dolgotrajnejšim shranjevanjem smuči temeljito očistite, namažite z debelejšim slojem voska (ki ga ne odstranite) in spnite skupaj, da ohranijo obliko. Hranite jih v navpičnem položaju na suhem mestu, zaščitene pred UV žarki in toploto.</p>
      
      <h2>Zaključek</h2>
      <p>Redno vzdrževanje smuči ni le vprašanje dolgoročne investicije, temveč tudi varnosti in kvalitete smučanja. Z malo truda in znanja lahko sami poskrbite za večino vzdrževalnih del in si tako zagotovite vedno optimalno pripravljeno opremo za zimske užitke.</p>
    `,
  date: "05. 09. 2024",
  author: "Matej Horvat",
  image: "https://images.unsplash.com/photo-1520715874916-4ad5dd38bef2?ixlib=rb-4.0.3",
  category: "Vzdrževanje",
  tags: ["vzdrževanje", "smuči", "oprema", "servis"]
}, {
  id: 4,
  title: "📰 Oglaševanje s tiskanimi oglasi: Zakaj jih podjetja še vedno uporabljajo",
  excerpt: "V dobi digitalnega sveta, kjer nas vsak dan preplavljajo spletni oglasi, tiskani oglasi še vedno ohranjajo svojo moč – še posebej v lokalnem okolju.",
  content: `
      <p>V dobi digitalnega sveta, kjer nas vsak dan preplavljajo spletni oglasi, tiskani oglasi še vedno ohranjajo svojo moč – še posebej v lokalnem okolju. Mnoga podjetja opažajo, da prav preko tiskanih medijev dosežejo najbolj zvesto in odzivno publiko.</p>
      
      <p>V nadaljevanju predstavljamo glavne prednosti oglaševanja v tiskanih oglasnikih in zakaj se ga splača vključiti v vašo marketinško strategijo.</p>
      
      <h2>✅ 1. Dolgotrajna prisotnost in opaznost</h2>
      <p>Tiskani oglas ne izgine po 5 sekundah kot spletni pasični oglasi. Bralci časopis ali oglasnik listajo večkrat, oglas ostane na mizi, v torbi, na pultu. S tem se poveča možnost, da bo vaš oglas opažen večkrat – tudi več dni zapored.</p>
      
      <h2>📍 2. Močan lokalni doseg</h2>
      <p>Tiskani oglasniki so izjemno učinkoviti pri ciljanju lokalne skupnosti. Če želite doseči stranke v določeni regiji (npr. Primorska, Gorenjska...), so tovrstni oglasi idealni za lokalna podjetja, obrtnike, trgovine in storitve.</p>
      
      <h2>🧠 3. Večje zaupanje bralcev</h2>
      <p>Študije kažejo, da ljudje bolj zaupajo informacijam v tiskanih medijih kot v spletnih. Oglas v tiskanem oglasniku deluje bolj profesionalno in zanesljivo, kar se lahko odraža v višji stopnji odziva.</p>
      
      <h2>💬 4. Manj konkurence – več pozornosti</h2>
      <p>Na spletu se podjetja dobesedno borijo za vsak klik. V tiskanem oglasniku pa ni toliko motenj – vaš oglas ima več prostora, manj konkurentov in večjo možnost, da pritegne oko bralca.</p>
      
      <h2>💡 5. Enostavno, dostopno, učinkovito</h2>
      <p>Oglaševanje v tiskanem oglasniku je pogosto cenovno dostopnejše od drugih oblik oglaševanja, hkrati pa omogoča personalizacijo: lahko vključite sliko, kontakt, QR kodo, logo podjetja... in vse to brez večjih tehničnih znanj.</p>
      
      <h2>📈 6. Kombinacija z digitalnim oglaševanjem = zmagovalna</h2>
      <p>Najboljše rezultate dosežete z kombinacijo tiskanega in spletnega oglaševanja. Tiskani oglas lahko deluje kot "prvi stik", medtem ko digitalna prisotnost nadgradi vašo zgodbo. QR koda ali spletna povezava v oglasu lahko preusmeri bralce na vašo spletno stran ali družbena omrežja.</p>
      
      <h2>🎯 Zaključek: Tiskani oglasi še zdaleč niso preteklost</h2>
      <p>Čeprav živimo v digitalnem svetu, tiskani oglasi ostajajo močno orodje, še posebej za lokalna podjetja, ki želijo dosegati konkretne, zveste in resnično zainteresirane stranke.</p>
      
      <p>➡️ Razmislite, kako lahko vaš naslednji oglas izstopa prav v tiskanem oglasniku – s pravim sporočilom, v pravem okolju.</p>
    `,
  date: "09. 04. 2025",
  author: "Ana Kovač",
  image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3",
  category: "Marketing",
  tags: ["marketing", "oglasi", "tiskani mediji", "lokalno oglaševanje", "strategija"]
}, {
  id: 5,
  title: "Kako pripraviti učinkovit oglas, ki pritegne pozornost (in prodaja)",
  excerpt: "Ali se tudi ti sprašuješ, zakaj nekateri oglasi pritegnejo takojšnjo pozornost, drugi pa ostanejo spregledani? Učinkovit oglas ima jasno strukturo, močno sporočilo in poziv k dejanju.",
  content: `
      <p>Ali se tudi ti sprašuješ, zakaj nekateri oglasi pritegnejo takojšnjo pozornost, drugi pa ostanejo spregledani? Ne gre za naključje. Učinkovit oglas ima jasno strukturo, močno sporočilo in poziv k dejanju. Pa naj bo to v tiskanem oglasniku, na družbenih omrežjih ali spletni strani.</p>
      
      <p>V nadaljevanju ti razkrijemo preproste, a zanesljive korake, kako ustvariti oglas, ki izstopa in prinaša rezultate.</p>
      
      <h2>1. Določi svoj cilj</h2>
      <p>Preden napišeš eno samo besedo, se vprašaj:</p>
      <ul>
        <li>Kaj želiš z oglasom doseči?</li>
        <li>Koga nagovarjaš?</li>
        <li>Kakšno dejanje želiš, da oseba naredi?</li>
      </ul>
      <p>Primer cilja: "Želim, da me kontaktira stranka, ki potrebuje pleskarske storitve v Kopru."</p>
      
      <h2>2. Močan naslov je ključ</h2>
      <p>Naslov je prva stvar, ki jo bralec opazi. Naj bo kratek, jasen in privlačen. Uporabi besede, ki izzovejo zanimanje ali rešujejo težavo.</p>
      <p>Dobri primeri:</p>
      <ul>
        <li>"Iščete zanesljivega pleskarja v Kopru?"</li>
        <li>"Prodaja! Do -50 % na vse sedežne garniture – samo ta teden!"</li>
      </ul>
      <p>Slabi primeri:</p>
      <ul>
        <li>"Ponudba storitev"</li>
        <li>"Oglas podjetja X"</li>
      </ul>
      
      <h2>3. Jasno povej, kaj ponujaš</h2>
      <p>V nekaj stavkih povej bistvo:</p>
      <ul>
        <li>Kaj ponujaš?</li>
        <li>Zakaj si ti najboljša izbira?</li>
        <li>Kaj dobi kupec?</li>
      </ul>
      <p>Ne naštevaj samo suhoparnih storitev – dodaj koristi:</p>
      <p>"Z več kot 10-letnimi izkušnjami ponujamo hitro in natančno pleskanje vaših prostorov – brez packanja, brez stresa."</p>
      
      <h2>4. Poziv k dejanju (Call to Action)</h2>
      <p>Naj bo bralcu jasno, kaj mora narediti:</p>
      <ul>
        <li>Pokliči zdaj</li>
        <li>Piši na e-mail</li>
        <li>Obišči našo spletno stran</li>
        <li>Rezerviraj termin danes</li>
      </ul>
      <p>Primer:</p>
      <p>"Pokliči 040 123 456 in si rezerviraj brezplačen ogled!"</p>
      
      <h2>5. Dodaj sliko ali logotip (če je možno)</h2>
      <p>Vizualni elementi pritegnejo pozornost in dajo oglasa profesionalen videz. Fotografija tvojega izdelka, dela ali logotipa pove več kot 1000 besed.</p>
      
      <h2>BONUS: Naj bo oglas urejen in pregleden</h2>
      <p>Uporabi:</p>
      <ul>
        <li>Kratke stavke</li>
        <li>Odstavke</li>
        <li>Poudarke (npr. krepko pisavo)</li>
      </ul>
      <p>Bralec naj že v nekaj sekundah dojame bistvo tvojega sporočila.</p>
      
      <h2>Povzetek: Recept za učinkovit oglas</h2>
      <p>✔️ Naslov, ki pritegne</p>
      <p>✔️ Jasna ponudba s koristmi</p>
      <p>✔️ Poziv k dejanju</p>
      <p>✔️ Kontaktni podatki</p>
      <p>✔️ Slika/logotip</p>
      <p>✔️ Preprost in pregleden dizajn</p>
    `,
  date: "10. 04. 2025",
  author: "Ana Kovač",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
  category: "Marketing",
  tags: ["marketing", "oglasi", "oglaševanje", "prodaja", "strategija"]
}, {
  id: 6,
  title: "5 najpogostejših napak pri oglaševanju malih podjetij – in kako se jim izogniti",
  excerpt: "Oglaševanje je lahko eno najboljših orodij za rast podjetja – če se ga lotimo premišljeno. Prevečkrat pa se mala podjetja znajdejo v situaciji, ko vlagajo v oglase, a učinka ni, telefona nihče ne dvigne, e-pošta ostane prazna.",
  content: `
      <p>Oglaševanje je lahko eno najboljših orodij za rast podjetja – če se ga lotimo premišljeno. Prevečkrat pa se mala podjetja znajdejo v situaciji, ko vlagajo v oglase, a učinka ni, telefona nihče ne dvigne, e-pošta ostane prazna. Zakaj?</p>
      <p>V tem zapisu ti pokažemo 5 najpogostejših napak, ki jih delajo mala podjetja pri oglaševanju – in kako jih lahko preprosto odpraviš.</p>
      
      <h2>1️⃣ Nejasno sporočilo – kupec ne ve, kaj ponujaš</h2>
      <p>Če tvoj oglas ne pove točno in hitro, kaj ponujaš in zakaj si prava izbira, bo bralec preprosto preskočil.</p>
      <p>Malo časa imaš, da ujameš pozornost – izkoristi ga!</p>
      <p><strong>Kako to popraviti:</strong></p>
      <ul>
        <li>Jasno napiši: Kaj? Komu? Zakaj?</li>
        <li>Namesto "Kvalitetne storitve za dom" raje:
        "Hitre in natančne vodovodne storitve – Koper in okolica"</li>
      </ul>
      
      <h2>2️⃣ Ni poziva k dejanju (Call to Action)</h2>
      <p>Ljudje potrebujejo usmeritev. Če jim ne poveš, kaj naj naredijo, večina preprosto ne naredi nič.</p>
      <p><strong>Kako to popraviti:</strong></p>
      <p>Dodaj jasno navodilo:</p>
      <ul>
        <li>"Pokliči nas zdaj na 040 123 456"</li>
        <li>"Pošlji povpraševanje na info@podjetje.si"</li>
        <li>"Obišči nas danes v centru Kopra"</li>
      </ul>
      
      <h2>3️⃣ Oglas brez koristi za stranko</h2>
      <p>Podjetja pogosto govorijo o sebi, namesto da bi se osredotočila na kupca in njegove potrebe.</p>
      <p><strong>Kako to popraviti:</strong></p>
      <p>Ne govori, da si najboljši – pokaži kaj kupec dobi.</p>
      <p>"Mi smo strokovnjaki za elektroinštalacije"</p>
      <p>"Prihranite čas in denar z našimi zanesljivimi elektroinštalacijami – brez skritih stroškov"</p>
      
      <h2>4️⃣ Preveč informacij v enem oglasu</h2>
      <p>Oglas ni katalog. Če je vse natlačeno skupaj, bralec izgubi zanimanje ali pa ne najde ključnih informacij.</p>
      <p><strong>Kako to popraviti:</strong></p>
      <ul>
        <li>Uporabi kratek naslov, jedrnat opis, kontakt.</li>
        <li>Če ponujaš več storitev, izberi eno ali dve, ki sta najbolj privlačni.</li>
      </ul>
      
      <h2>5️⃣ Oglas brez vizualnega učinka (slika, barva, logotip)</h2>
      <p>V današnjem svetu vizualnih vsebin mora tvoj oglas izstopati. Če je siv, dolgočasen in brez slike, bo šel mimo neopažen.</p>
      <p><strong>Kako to popraviti:</strong></p>
      <ul>
        <li>Dodaj fotografijo izdelka, dela, lokacije.</li>
        <li>Uporabi logotip in kontakt v spodnjem delu.</li>
        <li>Uporabi poudarke (krepko, barva, okvir).</li>
      </ul>
      
      <h2>BONUS: Ne oglašuj samo enkrat</h2>
      <p>Ena objava ali en oglas ni dovolj. Ljudje potrebujejo več ponovitev, da si zapomnijo tvoje ime.</p>
      <p>Redno oglaševanje (tudi v tiskani obliki!) gradi prepoznavnost in zaupanje.</p>
      
      <h2>Zaključek</h2>
      <p>Napake pri oglaševanju so pogoste – a tudi enostavno popravljive.</p>
      <p>S pravim pristopom lahko tvoj oglas izstopa, pritegne in prinese prave stranke.</p>
    `,
  date: "12. 04. 2025",
  author: "Ana Kovač",
  image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3", // Updated to printed newspaper/ad
  category: "Marketing",
  tags: ["marketing", "oglasi", "napake", "mala podjetja", "strategija"]
}];

const BlogPostPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const postId = parseInt(id || "0");
  const post = allBlogPosts.find(p => p.id === postId);
  if (!post) {
    return <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Članek ni bil najden</h1>
            <p className="mb-8">Iskani članek ne obstaja ali je bil odstranjen.</p>
            <Button className="bg-[#e32530] hover:bg-[#e32530]/90" asChild>
              <Link to="/blog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Nazaj na nasvete
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>;
  }

  const relatedPosts = allBlogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative text-white h-[50vh] md:h-[60vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
          </div>
          
          <div className="container relative z-10 py-16">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center bg-[#e32530] text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl mb-6 leading-tight max-w-4xl font-bold">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" className="mb-8 hover:bg-gray-100" asChild>
              <Link to="/blog" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Nazaj na nasvete
              </Link>
            </Button>
            
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{
              __html: post.content
            }} />
            </div>
            
            {post.tags && post.tags.length > 0 && <div className="flex items-center flex-wrap gap-2 mb-12 border-t border-b py-4">
                <Tag className="h-4 w-4 text-gray-500 mr-2" />
                {post.tags.map((tag, index) => <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>)}
              </div>}
            
            {relatedPosts.length > 0 && <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Sorodni članki</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map(relatedPost => <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" />
                        <span className="absolute top-2 right-2 bg-[#e32530] text-white text-xs font-semibold px-2 py-1 rounded">
                          {relatedPost.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-xl mb-3">{relatedPost.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <Link to={`/blog/${relatedPost.id}`} className="inline-flex items-center text-[#e32530] font-medium hover:underline">
                          Preberi več <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>)}
                </div>
              </div>}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default BlogPostPage;
