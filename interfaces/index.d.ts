declare module "nuxt/schema" {
  interface Itheme {
    primary: string;
    secondary: string;
  }
  interface AppConfigInput {
    themes?: {
      main: Itheme;
    };
    gsap?: {
      ease: string;
    };
  }
}
export {};
