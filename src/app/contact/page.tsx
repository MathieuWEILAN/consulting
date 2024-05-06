import { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
  title: "Contact | Audicée",
  description:
    "Contactez-nous pour toute demande de renseignements ou de devis. Nos experts en audit et rénovation énergétique sont à votre écoute.",
};
const ContactPage = () => {
  return <Contact />;
};
export default ContactPage;
