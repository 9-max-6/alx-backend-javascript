import getBudgetObject from "./7-getBudgetObject";

export default function getFullBudgetObject(income, gdp, capita) {
  const fullBudget = {
    ...getBudgetObject(income, gdp, capita),
    getIncomeInDollars() {
      return `$${this.income}`;
    },
    getIncomeInEuros() {
      return `${this.income} euros`;
    },
  };

  return fullBudget;
}
