import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';
const myDatabaseClassic = MyDatabaseClassic.Instance;
myDatabaseClassic.add({ name: 'julia', age: 30 });
myDatabaseClassic.add({ name: 'pedro', age: 50 });
myDatabaseClassic.add({ name: 'gustavo', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
