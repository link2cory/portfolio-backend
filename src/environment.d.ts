declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

// this is the accepted standard to force typescript to treat this file
// as a module
export {};
