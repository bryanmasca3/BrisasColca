import { useState, useRef } from "react";
import {
  Hammer,
  Star,
  CheckCircle2,
  Award,
  HardHat,
  Phone,
  MessageCircle,
  Layers,
  Ruler,
  ShieldCheck,
  Send,
  CheckCircle,
} from "lucide-react";
import ContactForm from "./ContactForm";

function App() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const numeroLlamadas = "959476540";
  const numeroWhatsapp = "962808828";
  const whatsappLink = `https://wa.me/51${numeroWhatsapp}?text=Hola%20Maestro%20Emilio,%20deseo%20una%20cotización.`;

  const servicios = [
    {
      id: 1,
      title: "Colocaciones Maestras",
      desc: "Instalación experta de parqué y madera maciza con acabados artesanales únicos.",
      img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
      destacado: true,
    },
    {
      id: 2,
      title: "Pulidos de Parquet",
      desc: "Restauración profunda con máquinas modernas sin polvo para recuperar el brillo original.",
      img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Barnizados de Lujo",
      desc: "Protección con barnices de alta resistencia (DD, Bona) en acabados mate o brillante.",
      img: "https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Laminados y Vinílicos",
      desc: "Instalación de pisos modernos de alto tránsito, resistentes y de fácil mantenimiento.",
      icon: <Layers size={40} />,
      color: "bg-amber-900",
    },
    {
      id: 5,
      title: "Reparaciones Técnicas",
      desc: "Sustitución de tablillas, tratamiento de humedad y nivelación de suelos.",
      icon: <Ruler size={40} />,
      color: "bg-slate-800",
    },
    {
      id: 6,
      title: "Zócalos Profesionales",
      desc: "Colocación de zócalos en madera y MDF para un acabado estético impecable.",
      icon: <CheckCircle2 size={40} />,
      color: "bg-amber-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- NAVBAR --- */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black text-amber-900 leading-none tracking-tighter">
              BRISAS DEL COLCA
            </h1>
            <span className="text-[10px] font-bold text-amber-600 tracking-[0.2em] uppercase">
              Maestro Emilio — Arequipa
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={`tel:${numeroLlamadas}`}
              className="bg-slate-900 text-white p-2 md:px-4 md:py-2 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-slate-700 transition"
            >
              <Phone size={16} /> <span className="hidden md:block">Llamar</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-green-600 text-white p-2 md:px-4 md:py-2 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-green-700 transition"
            >
              <MessageCircle size={16} />{" "}
              <span className="hidden md:block">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover"
            alt="Pisos de parqué de lujo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8">
            <Award className="text-amber-500" size={24} />
            <span className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-amber-400">
              40 Años de Excelencia en Arequipa
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
            ESPECIALISTAS EN <br />
            <span className="text-amber-500 drop-shadow-lg">PISOS DE PARQUÉT</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">
            Instalación y restauración en toda la ciudad de Arequipa con el acabado impecable del{" "}
            <span className="underline decoration-amber-500 underline-offset-8 text-3xl">
              Maestro Emilio
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-12 text-white font-black uppercase tracking-[0.3em] text-sm md:text-xl border-y border-white/10 py-4">
            <span className="hover:text-amber-500 transition-colors cursor-default">
              Prontitud
            </span>
            <span className="text-amber-500">•</span>
            <span className="hover:text-amber-500 transition-colors cursor-default">
              Garantía
            </span>
            <span className="text-amber-500">•</span>
            <span className="hover:text-amber-500 transition-colors cursor-default">
              Seriedad
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </header>

      {/* --- SERVICIOS CON .MAP() --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-slate-900 uppercase italic leading-none">
            Nuestros Servicios
          </h3>
          <p className="text-amber-700 font-bold mt-2">Maestría en cada detalle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.id}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500
                ${
                  s.destacado
                    ? "md:col-span-2 md:h-[450px]"
                    : "h-[350px] hover:-translate-y-2"
                }
              `}
            >
              {s.img ? (
                <>
                  <img
                    src={s.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={s.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
                </>
              ) : (
                <div
                  className={`absolute inset-0 ${s.color} flex flex-col justify-center items-center p-8`}
                >
                  <div className="text-amber-500 mb-6 transform group-hover:rotate-12 transition-transform">
                    {s.icon}
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4
                  className={`font-black text-white mb-2 leading-none uppercase ${
                    s.destacado ? "text-4xl" : "text-2xl"
                  }`}
                >
                  {s.title}
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md opacity-80">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN CONTACTO --- */}
      <section id="contacto" className="bg-slate-900 py-24 text-white px-4 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h3 className="text-5xl font-black mb-6 text-amber-500 italic uppercase leading-none">
              Contáctenos
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Trabajos con **Prontitud, Garantía y Seriedad**. Atendido personalmente por el Maestro Emilio en todo Arequipa.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 flex items-center gap-5">
                <div className="bg-amber-600 p-3 rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Llamadas
                  </p>
                  <p className="text-2xl font-black text-amber-500">{numeroLlamadas}</p>
                </div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 flex items-center gap-5">
                <div className="bg-green-600 p-3 rounded-2xl">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    WhatsApp
                  </p>
                  <p className="text-2xl font-black text-green-500">{numeroWhatsapp}</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="py-12 text-center bg-white border-t border-slate-100">
        <h2 className="font-black text-slate-900 text-2xl tracking-tighter uppercase mb-1">
          Brisas del Colca
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4">Arequipa, Perú</p>
        <div className="flex justify-center gap-4 text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em]">
          <span>Prontitud</span>
          <span>•</span>
          <span>Garantía</span>
          <span>•</span>
          <span>Seriedad</span>
        </div>
      </footer>
    </div>
  );
}

export default App;