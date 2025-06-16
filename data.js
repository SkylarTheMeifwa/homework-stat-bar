// data.js
export const subjects = [
  { id: 'physics', name: 'Physics' },
  { id: 'selfCare', name: 'Self Care' },
  { id: 'chores', name: 'Chores' },
  { id: 'social', name: 'Socialization' },
  { id: 'entertainment', name: 'Entertainment' },
];

export const rankTitlesMap = {
  physics: [
    '',
    'Oblivious',
    'Learned',
    'Scholarly',
    'Encyclopedic',
    'Erudite',
  ],
  selfCare: [
    '',
    'Neglected',
    'Aware',
    'Balanced',
    'Mindful',
    'Zen Master',
  ],
  chores: [
    '',
    'Messy',
    'Tidy',
    'Organized',
    'Disciplined',
    'Domestic Hero',
  ],
  social: [
    '',
    'Shy',
    'Casual',
    'Friendly',
    'Charming',
    'Social Star',
  ],
  entertainment: [
    '',
    'Bored',
    'Amused',
    'Enthralled',
    'Immersed',
    'Culture King/Queen',
  ],
};

export const rankThresholdsMap = {
  physics: [0, 10, 25, 50, 75],
  selfCare: [0, 5, 15, 30, 50],
  chores: [0, 8, 20, 40, 65],
  social: [0, 7, 18, 35, 60],
  entertainment: [0, 6, 14, 28, 45],
};
