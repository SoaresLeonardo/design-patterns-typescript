import { deliverContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliverContext(factory, 'Leonardo', '20A', 'Av Brasil', 'SP');

console.log();
console.log(factory.getLocations());
