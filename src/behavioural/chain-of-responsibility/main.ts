import { CEOBudgetHandler } from './ceo-budget-handle';
import { CustomerBudget } from './customer-budget';
import { ManagerBudgetHandler } from './menager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(10);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
