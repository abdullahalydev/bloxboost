"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roblox_core_1 = __importDefault(require("./cores/roblox.core"));
(function () {
    if (!roblox_core_1.default.isRobloxInstalled()) {
        throw new Error("roblox doesn't installed");
    }
    roblox_core_1.default.setClientAppSettings();
})();
