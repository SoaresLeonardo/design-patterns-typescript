import { EnterpriseCreateVehicleCustomer } from './factories/enterprise-vehicle-factory';
import { individualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomer();
const individualFactory = new individualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'Leonardo');
const car2 = individualFactory.createVehicle('Celta', 'Lucas');

car1.pickUp();
car2.pickUp();
