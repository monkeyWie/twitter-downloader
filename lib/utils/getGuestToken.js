"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuestToken = void 0;
const axios_1 = __importDefault(require("axios"));
const getAuthorization_1 = require("./getAuthorization");
const getGuestToken = async () => {
    try {
        const { data } = await (0, axios_1.default)("https://api.twitter.com/1.1/guest/activate.json", {
            method: "POST",
            headers: {
                Authorization: await (0, getAuthorization_1.getAuthorization)(),
            },
        });
        return data.guest_token;
    }
    catch {
        return null;
    }
};
exports.getGuestToken = getGuestToken;