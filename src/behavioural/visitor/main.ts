import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(20);

// const brazilTaxVisitor = new BrazilTaxVisitor();

const car = [food, cigarette, alcoholicDrink];
console.log(car);
