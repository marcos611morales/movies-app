export const es = {
  common: {
    appName: "Movies App",
    seeAll: "Ver todo",
    retry: "Reintentar",
    loading: "Espere por favor",
  },
  home: {
    greeting: "Hola, {{name}}",
    sections: {
      nowPlaying: "En cartelera",
      popular: "Populares",
      topRated: "Mejor calificadas",
      upcoming: "Próximamente",
    },
  },
  movie: {
    overview: "Sinopsis",
    cast: "Reparto",
  },
  rating: {
    a11yLabel: "Calificación {{value}} de 10",
    none: "Sin calificación",
  },
  profile: {
    titleCount_one: "{{count}} título",
    titleCount_other: "{{count}} títulos",
  },
};

export type Translations = typeof es;
