const getRandomInt = (max: number): number => {
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};

export default getRandomInt;
