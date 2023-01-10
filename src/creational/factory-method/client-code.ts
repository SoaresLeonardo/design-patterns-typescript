import { RandomCarAlgorithm } from '../main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Lucas', 'maria', 'leonardo', 'julia'];

for (let i = 0; i < 10; i++) {
  const vehicle = RandomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
