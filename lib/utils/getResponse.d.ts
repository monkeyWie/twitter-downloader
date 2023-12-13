import { Twitter } from "../types/twitter";
type Config = {
    authorization: string;
    cookie: string;
};
export declare const TwitterDL: (url: string, config?: Config) => Promise<Twitter>;
export {};
