export interface MyInteratorProtocol<T> extends Iterator<T> {
  reset(): void;
}
