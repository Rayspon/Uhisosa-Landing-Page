
import { TranslationSet } from './types';

export const translations: Record<'et' | 'ru', TranslationSet> = {
  et: {
    nav: {
      home: 'Kodu',
      about: 'Meist',
      services: 'Teenistused',
      location: 'Asukoht',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Ühiosa - Sinu kogukond Lasnamäel',
      subtitle: 'Eesti EKB Liidu avatud platvorm suhtlemiseks ja kristliku sõnumi jagamiseks.',
      cta: 'Tule külla',
      sundayTime: 'Iga pühapäev kell 17:30',
    },
    about: {
      title: 'Kes me oleme?',
      description: 'Ühiosa on avatud platvorm, mis on loodud ühendama inimesi.',
      missionTitle: 'Meie eesmärk',
      missionText: 'Soodustada suhtlust eesti ja slaavikeelsete kristlaste vahel ning tutvustada kristlikku sõnumit Eesti inimestele.',
      collabTitle: 'Koostöö',
      collabText: 'Ühisosa projektides teevad koostööd Liidu erinevad kogudused, liikmed, struktuurüksused, MTÜ-d ja sihtasutused.',
    },
    services: {
      title: 'Jumalateenistused',
      description: 'Ootame Sind igal nädalal osa saama meie osadusest.',
      when: 'Millal',
      where: 'Kus',
      time: 'Pühapäeviti kell 17:30',
    },
    location: {
      title: 'Leia meid',
      address: 'Läänemere tee 30, Tallinn',
      district: 'Lasnamäe kristlik kogukond',
      getDirections: 'Vaata kaardil',
    },
    footer: {
      rights: 'Kõik õigused kaitstud',
      partOf: 'Eesti EKB Liidu liige',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Служения',
      location: 'Расположение',
      contact: 'Контакт',
    },
    hero: {
      title: 'Ühiosa - Точка пересечения в Ласнамяэ',
      subtitle: 'Открытая площадка Союза ЕХБ Эстонии для общения и христианского послания.',
      cta: 'Приходи к нам',
      sundayTime: 'Каждое воскресенье в 17:30',
    },
    about: {
      title: 'Кто мы такие?',
      description: 'Ühisosa (Точка пересечения) – это открытая площадка Союза ЕХБ Эстонии.',
      missionTitle: 'Наша цель',
      missionText: 'Содействовать общению между эстоно- и славяноязычными христианами и донести христианский месседж до людей Эстонии.',
      collabTitle: 'Сотрудничество',
      collabText: 'В проектах Ühisosa сотрудничают различные общины Союза, члены общин, структурные подразделения Союза и общественные организации.',
    },
    services: {
      title: 'Богослужения',
      description: 'Ждем тебя каждую неделю, чтобы вместе прославлять Бога.',
      when: 'Когда',
      where: 'Где',
      time: 'Воскресенье в 17:30',
    },
    location: {
      title: 'Где мы находимся',
      address: 'Läänemere tee 30, Tallinn',
      district: 'Христианская община в Ласнамяэ',
      getDirections: 'Посмотреть на карте',
    },
    footer: {
      rights: 'Все права защищены',
      partOf: 'Член Союза ЕХБ Эстонии',
    },
  },
};
