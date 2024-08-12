export const texts = [
  'In a distant land, beyond the towering mountains and across the vast oceans, there was a small village nestled between the green hills. The people of the village were known for their hospitality and kindness. They lived in harmony with nature and celebrated every season with joy and laughter. The village elders often told stories of ancient times, when great heroes walked the earth, battling fierce dragons and protecting the innocent from harm. Every child grew up dreaming of adventures, hoping one day to become a hero themselves.',
  'The early morning sun cast a golden glow over the sleepy town as birds chirped cheerfully in the trees. A gentle breeze rustled the leaves, and the fragrance of blooming flowers filled the air. In the town square, a fountain gurgled quietly, its water sparkling in the sunlight. The streets were empty, save for a few shopkeepers opening their doors and setting up their wares for the day. Life moved at a slower pace here, far removed from the hustle and bustle of the city. Residents took their time to enjoy the simple pleasures of life.',
  'Once upon a time, in a realm far away, there was a majestic castle perched on a hill overlooking a tranquil lake. The castle was home to a wise and just king who ruled his land with fairness and compassion. His subjects adored him and looked up to him as a father figure. The king had a daughter, the princess, who was known for her beauty and intelligence. She spent her days studying the stars and learning about the world beyond the castle walls. Despite her royal status, the princess was humble and treated everyone with kindness.',
];

export const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};
