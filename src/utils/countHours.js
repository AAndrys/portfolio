export const countHours = () => {
  const startDate = new Date(2020, 6, 30);
  const today = new Date();
  const timeDifference = today.getTime() - startDate.getTime();
  return (timeDifference / (1000 * 60 * 60 * 4)).toFixed();
};
