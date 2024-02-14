"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// cores
const roblox_core_1 = __importDefault(require("../../source/cores/roblox.core"));
describe("test roblox core class", function () {
    test("build roblox path", function () {
        const path = roblox_core_1.default.buildRobloxPath();
        expect(path).toEqual("C:\\Users\\Abdullah Aly\\AppData\\Local\\Roblox");
    });
    test("is roblox installed", function () {
        const status = roblox_core_1.default.isRobloxInstalled();
        expect(status).toEqual(true);
    });
    test("find client version path", function () {
        const status = roblox_core_1.default.findClientVersionPath();
        expect(status).toEqual("C:\\Users\\Abdullah Aly\\AppData\\Local\\Roblox\\Versions\\version-f2b5c592c03b4183");
    });
    test("set client app settings", function () {
        const status = roblox_core_1.default.setClientAppSettings();
        expect(status).toBeUndefined();
    });
});
