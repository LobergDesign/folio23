declare namespace GlobalNamespace {
  export interface IFetch {
    url: string;
    pick?: KeysOf<unknown> | undefined;
  }
}
