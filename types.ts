
export type Language = 'et' | 'ru';

export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    services: string;
    location: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    sundayTime: string;
  };
  about: {
    title: string;
    description: string;
    missionTitle: string;
    missionText: string;
    collabTitle: string;
    collabText: string;
  };
  services: {
    title: string;
    description: string;
    when: string;
    where: string;
    time: string;
  };
  location: {
    title: string;
    address: string;
    district: string;
    getDirections: string;
  };
  footer: {
    rights: string;
    partOf: string;
  };
}
