export const CurrencyFormat = num => {
  return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
};
