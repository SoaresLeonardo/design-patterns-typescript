import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.Instance;
myDatabaseClassic.add({ name: 'Leo', age: 30 });
myDatabaseClassic.add({ name: 'Lucas', age: 50 });
myDatabaseClassic.add({ name: 'Maria', age: 25 });
myDatabaseClassic.show();

export { myDatabaseClassic };
