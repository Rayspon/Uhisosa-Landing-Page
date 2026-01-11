
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
    badge: string;
    title: string;
    description: string;
    activeMembers: string;
    missionTitle: string;
    missionText: string;
    collabTitle: string;
    collabText: string;
    unionPart: string;
    unionName: string;
    storyTitle: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    when: string;
    where: string;
    time: string;
    duration: string;
    allAges: string;
    alwaysWelcome: string;
    hereForYou: string;
    welcomeMsg: string;
  };
  location: {
    badge: string;
    title: string;
    addressLabel: string;
    address: string;
    district: string;
    emailLabel: string;
    email: string;
    getDirections: string;
    mapLabel: string;
  };
  footer: {
    links: string;
    social: string;
    rights: string;
    partOf: string;
    location: string;
  };
}
