import { Users } from '../interfaces/user';

const users: Users[] = [];
export const myDatabaseModule = {
  add(user: Users): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};

// const db1 = MyDatabaseClassic.getInstance();
// const db2 = MyDatabaseClassic.getInstance();
