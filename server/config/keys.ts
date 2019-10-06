import { prodKeys } from "./prod";
import { devKeys } from "./dev";

export default (): Keys => {
  // keys.js - figure out what set of credentials to return
  if (process.env.NODE_ENV === "production") {
    return prodKeys;
  } else {
    // we are in development - return the dev keys!!!
    return devKeys;
  }
};

export interface Keys {
  googleClientID?: string;
  googleClientSecret?: string;
  mongoURI?: string;
  cookieKey?: string;
}
