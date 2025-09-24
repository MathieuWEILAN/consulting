import { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
  title: "Contact Audit Énergétique | Devis Gratuit Ma Prime Rénov",
  description: "Contactez nos experts audit énergétique en Île-de-France. Devis gratuit, accompagnement Ma Prime Rénov, conseil personnalisé. ☎️ 01-86-22-31-85 - Réponse sous 24h.",
  keywords: "contact audit énergétique, devis gratuit rénovation énergétique, Ma Prime Rénov contact, expert énergétique Île-de-France, accompagnateur rénov contact, diagnostic énergétique devis",
  openGraph: {
    title: "Contact Expert Audit Énergétique | Devis Gratuit Île-de-France",
    description: "Obtenez votre devis gratuit d'audit énergétique. Experts certifiés Ma Prime Rénov en Île-de-France. Contact immédiat.",
  }
};
const ContactPage = () => {
  return <Contact />;
};
export default ContactPage;
