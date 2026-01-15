import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  CheckCircle,
} from "lucide-react";

const ContactForm = () => {
  const formRef = useRef();
  const [cargando, setCargando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();
    setCargando(true);

    // REEMPLAZA ESTOS DATOS CON LOS TUYOS
    const SERVICE_ID = "service_lesyuau";
    const TEMPLATE_ID = "template_be6qyxv";
    const PUBLIC_KEY = "DPqWTcGOjIa4p-HKl";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Éxito:", result.text);
        setEnviado(true);
        setCargando(false);
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Hubo un error. Intenta llamando al 959476540");
        setCargando(false);
      }
    );
  };

  if (enviado) {
    return (
      <div className="bg-white p-10 rounded-3xl text-center shadow-xl">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={50} />
        <h3 className="text-2xl font-black uppercase italic text-slate-900">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-slate-600 mt-2">
          El Maestro Emilio se comunicará con usted en breve.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={enviarEmail}
      className="bg-white p-8 rounded-[2rem] shadow-2xl space-y-4"
    >
      <h4 className="text-xl font-black text-amber-800 uppercase italic mb-4">
        Cotización Directa
      </h4>

      <div>
        <label className="text-xs font-bold uppercase text-slate-400 ml-1">
          Nombre
        </label>
        <input
          name="nombre" // Este nombre debe ser igual al {{nombre}} en tu plantilla
          type="text"
          required
          className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl focus:border-amber-600 outline-none transition text-slate-900"
          placeholder="Ej. Juan Pérez"
        />
      </div>

      <div>
        <label className="text-xs font-bold uppercase text-slate-400 ml-1">
          Teléfono
        </label>
        <input
          name="telefono"
          type="tel"
          required
          className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl focus:border-amber-600 outline-none transition text-slate-900"
          placeholder="959476540"
        />
      </div>

      <div>
        <label className="text-xs font-bold uppercase text-slate-400 ml-1">
          Detalle del trabajo
        </label>
        <textarea
          name="mensaje"
          required
          className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl h-32 focus:border-amber-600 outline-none transition text-slate-900"
          placeholder="Ej. Pulido de parqué en sala y comedor..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={cargando}
        className={`w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-all uppercase flex items-center justify-center gap-3
          ${
            cargando
              ? "bg-slate-400"
              : "bg-amber-700 hover:bg-amber-800 text-white"
          }`}
      >
        <Send size={20} />
        {cargando ? "Enviando..." : "Enviar al Maestro"}
      </button>
    </form>
  );
};

export default ContactForm;
