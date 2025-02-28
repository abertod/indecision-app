export const somnum = (secundis: number = 1) => {
  return new Promise((resolve) => {
    setInterval(resolve, secundis * 1000);
  });
};
