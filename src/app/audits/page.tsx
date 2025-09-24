import Audits from "./audits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Énergétique Professionnel | Ma Prime Rénov Île-de-France",
  description: "Service d'audit énergétique certifié en Île-de-France. Diagnostic complet, accompagnement Ma Prime Rénov, solutions personnalisées. Réduisez vos factures de 20 à 40%. Devis gratuit.",
  keywords: "audit énergétique professionnel, Ma Prime Rénov, diagnostic énergétique, DPE, efficacité énergétique, rénovation énergétique, accompagnateur rénov, audit thermique, Île-de-France, Paris",
  openGraph: {
    title: "Audit Énergétique Certifié | Ma Prime Rénov Île-de-France",
    description: "Audit énergétique complet avec accompagnement Ma Prime Rénov. Professionnels certifiés, diagnostic précis, solutions sur-mesure en Île-de-France.",
  }
};

const AuditsPage = () => {
  return <Audits />;
};
export default AuditsPage;
