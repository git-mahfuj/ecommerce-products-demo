export const getdiscountPrice = (price : number , discount : number ) => {
  return price - (price * discount * 1) / 100;
};

console.log(getdiscountPrice(100 , 80))