import { SmartHouseCommand } from './command';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addComand(key: string, command: SmartHouseCommand): void {
    this.commands[key] = command;
  }

  execulteCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
