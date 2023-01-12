import { MyDataStructure } from './my-data-structure';
import { MyInteratorProtocol } from './my-interator-protocol';

export class MyDefaultInterator implements MyInteratorProtocol<string> {
  private index = 0;

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = 0;
  }

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.Items[this.index]);
    returnValue.done = this.index >= this.dataStructure.size();
    this.index++;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
