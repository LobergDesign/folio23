declare namespace Global {
  // CMS components
  export interface IRte {
    html: string;
  }
  export interface IHeroSection {
    title: GlobalIRte;
    text: string;
  }

  // API
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
