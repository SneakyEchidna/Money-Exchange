// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const split = (value) => {
    const coins = [50, 25, 10, 5, 1];
    const coinsSymbols = ['H', 'Q', 'D', 'N', 'P'];
    let splited = [];
    let current = value;
    let change = {};
    coins.map((e) => {
      splited.push(Math.floor(current / e));
      current = current % e;
    });
    splited.map((e, i) => {
      if (e !== 0) {
        change[coinsSymbols[i]] = splited[i];
      }
    });
    return change;
  };
  if (currency <= 0) {
    return {};
  }
  if (currency > 10000) {
    return {
      error:
        "You are rich, my friend! We don't have so much coins for exchange",
    };
  }
  return split(currency);
};
