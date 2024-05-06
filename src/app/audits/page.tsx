import Audits from "./audits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audits | Audicée",
  description:
    "Découvrez nos services d'audit énergétique pour optimiser votre consommation et améliorer le confort de votre domicile. Professionnels certifiés en Île-de-France.",
};

const AuditsPage = () => {
  return <Audits />;
};
export default AuditsPage;
