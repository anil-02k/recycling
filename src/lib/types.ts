export type PromoStat = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type WasteService = {
  id: number;
  title: string;
  icon: string;
  image: string;
};

export type InfoCardItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type PartnerLogo = {
  id: number;
  logo: string;
};
export type AboutInfo = {
  id: number;
  title: string;
  description: string;
};
import { IconType } from "react-icons";

export type SocialLink = {
  id: number;
  icon: IconType;
  url: string;
};
