import { MessageCircle } from "lucide-react";

export default function WhatsAppLink({ label = "Diskusikan kebutuhan Anda" }: { label?: string }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
  const message = encodeURIComponent("Halo FUTURE CASA, saya ingin berkonsultasi mengenai layanan Anda.");
  return <a className="button button-primary" href={`https://wa.me/${number}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/>{label}</a>;
}
