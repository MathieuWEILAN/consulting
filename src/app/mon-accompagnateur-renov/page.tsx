import { Metadata } from "next";
import MonAccompagnateurRenov from "./monAccompagnateurRenov";

export const metadata: Metadata = {
  title: "Mon Accompagnateur Rénov | Audicée",
  description:
    "Découvrez Mon Accompagnateur Rénov', le service d'accompagnement personnalisé pour vos travaux de rénovation énergétique. Audicée, professionnels certifiés en Île-de-France.",
};

export default function MonAccompagneurRenov() {
  return <MonAccompagnateurRenov />;
}
