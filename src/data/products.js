export const categories = {
  interieur: 'intérieur',
  exterieur: 'extérieur',
  professionnel: 'professionnel'
};

export const productCatalog = [
  {
    id: 'lumenia-home-aurora',
    name: 'Aurora Suspension',
    category: categories.interieur,
    description:
      'Suspension minimaliste aux courbes fluides pour illuminer les salons contemporains.',
    detail:
      "La suspension Aurora associe aluminium recyclé et LED basse consommation pour une lumière diffuse qui sublime les volumes. Fabriquée à Lausanne, elle se pilote via une application mobile et offre trois ambiances lumineuses.",
    specs: ['Durée de vie 50 000 h', 'Température de couleur ajustable', 'Matériaux recyclés à 80 %'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lumenia-home-lake',
    name: 'Lake Horizon',
    category: categories.interieur,
    description:
      'Applique murale inspirée des reflets alpins pour une lumière chaleureuse.',
    detail:
      "Lake Horizon diffuse une lumière douce pour les espaces de détente. Sa finition céramique est cuite avec une énergie 100 % renouvelable et son packaging est entièrement compostable.",
    specs: ['Puissance 12W LED', 'Allumage automatique au mouvement', 'Garantie 10 ans'],
    image:
      'https://images.unsplash.com/photo-1616628182507-4734dde83f42?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lumenia-pro-atelier',
    name: 'Atelier Proline',
    category: categories.professionnel,
    description:
      "Linéaires LED modulaires pour les bureaux et ateliers d'architecture.",
    detail:
      "Atelier Proline offre un éclairage uniforme et sans scintillement. Les modules se clipsent sans outil, facilitant l'installation. Les détecteurs de présence intelligents réduisent la consommation jusqu'à 35 %.",
    specs: ['IRC supérieur à 95', 'Optimisation énergétique automatisée', 'Connectivité DALI'],
    image:
      'https://images.unsplash.com/photo-1511296265580-25bc04eb0c6e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lumenia-pro-gallery',
    name: 'Gallery Beam',
    category: categories.professionnel,
    description:
      'Projecteurs sur rail pour galeries, musées et boutiques premium.',
    detail:
      'Gallery Beam valorise les matières et couleurs grâce à son spectre lumineux haute fidélité. Chaque projecteur est ajustable à 360° et se contrôle via une application dédiée.',
    specs: ['Flux lumineux 4800 lm', 'Réglage précis du faisceau', 'Structure en magnésium léger'],
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lumenia-outdoor-alp',
    name: 'Alpina Path',
    category: categories.exterieur,
    description:
      'Balise extérieure solaire pour terrasses et jardins design.',
    detail:
      "Alpina Path capte l'énergie solaire grâce à ses cellules haute efficacité intégrées. Sa diffusion à 360° crée des halos délicats pour les parcours nocturnes.",
    specs: ['Autonomie 18h', 'Structure IP67', 'Charge rapide en 4h'],
    image:
      'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lumenia-outdoor-peak',
    name: 'Peak Flood',
    category: categories.exterieur,
    description:
      'Projecteur architectural pour façades et hôtels de montagne.',
    detail:
      'Peak Flood met en lumière les reliefs tout en préservant la faune nocturne grâce à sa technologie anti-pollution lumineuse. Disponible en teintes chaudes ou glacées.',
    specs: ['Capteurs de luminosité intégrés', 'Résistance aux températures extrêmes', 'Gestion à distance via Lumenia Cloud'],
    image:
      'https://images.unsplash.com/photo-1527699560890-388c98c4dc09?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lumenia-home-stellar',
    name: 'Stellar Bloom',
    category: categories.interieur,
    description:
      'Lampe de table sculpturale avec diffusion à intensité variable.',
    detail:
      "Stellar Bloom est conçue en verre soufflé par des artisans suisses et abrite un cœur LED calibré pour le bien-être visuel. Son variateur tactile propose cinq scénarios d'ambiance.",
    specs: ['Recharge USB-C', 'Variateur tactile', 'Fabrication locale'],
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  }
];

export const featuredProducts = ['lumenia-home-aurora', 'lumenia-pro-atelier', 'lumenia-outdoor-alp'];
