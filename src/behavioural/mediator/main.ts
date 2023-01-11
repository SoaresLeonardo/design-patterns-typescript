import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Calça', price: 50 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Shorte', price: 80 });
seller2.addProduct({ id: '4', name: 'Sapato', price: 150 });

mediator.addSeller(seller1, seller2);

mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
