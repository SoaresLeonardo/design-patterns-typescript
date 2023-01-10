import { Customer } from '../interfaces/customer';

export class individualCustomer implements Customer {
  constructor(public name: string) {}
}
