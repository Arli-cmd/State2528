export enum Lang {
  ENG = 'ENG',
  RUS = 'RUS',
  KOR = 'KOR',
  CHI = 'CHI',
  DEU = 'DEU',
}

export interface AllianceCard {
  tag: string;
  name: string;
  motto: string;
  desc: string;
  schedule: { label: string; time: string }[];
  reqs: string[];
  coords: string;
}

export interface Translation {
  nav: {
    about: string;
    nap: string;
    reasons: string;
    alliances: string;
    apply: string;
  };
  hero: {
    title: string;
    subtitle: string;
    slogan: string;
  };
  events: {
    bearHunt: string;
    foundry: string;
    canyon: string;
    crazyJoe: string;
    mercenaries: string;
  };
  about: {
    status: {
      active: string;
      nap: string;
      coord: string;
    };
    kicker: string;
    title: string;
    shortIntro: string;
    shortApproach: string;
  };
  nap: {
    kicker: string;
    title: string;
    desc: string;
    rulesTitle: string;
    napAlliancesTitle: string;
    rules: string[];
    rotationTitle: string;
    rotationDesc: string;
    fortsDesc: string;
  };
  reasons: {
    kicker: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  alliances: {
    kicker: string;
    title: string;
    subtitle: string;
    reqTitle: string;
    scheduleTitle: string;
    coordsTitle: string;
    cards: AllianceCard[];
  };
  apply: {
    note: string;
    kicker: string;
    title: string;
    desc: string;
    button: string;
  };
  footer: {
    line: string;
    small: string;
  };
}