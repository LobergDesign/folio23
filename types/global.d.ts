declare namespace GlobalNamespace {
  export interface IFetch {
    url: string;
    pick?: KeysOf<unknown> | undefined;
    immediate?: boolean;
  }
  export interface IError {
    statusCode: number;
    statusMessage: string;
  }
}
