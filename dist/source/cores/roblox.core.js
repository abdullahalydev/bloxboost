"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// packages
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
const path_1 = __importDefault(require("path"));
class RobloxCore {
    static buildRobloxPath() {
        const APPDATA = process.env.APPDATA;
        if (APPDATA) {
            return path_1.default.join(APPDATA, "..", "Local", "Roblox");
        }
        const home = os_1.default.homedir();
        return path_1.default.join(home, "AppData", "Local", "Roblox");
    }
    static isRobloxInstalled() {
        const robloxPath = this.buildRobloxPath();
        return fs_1.default.existsSync(robloxPath);
    }
    static findClientVersionPath() {
        var _a;
        const robloxPath = this.buildRobloxPath();
        const versions = fs_1.default.readdirSync(path_1.default.join(robloxPath, "Versions"));
        return ((_a = (0, lodash_1.default)(versions)
            .filter(function (version) {
            return fs_1.default.existsSync(path_1.default.join(robloxPath, "Versions", version, "RobloxPlayerLauncher.exe"));
        })
            .map(function (version) {
            return path_1.default.join(robloxPath, "Versions", version);
        })
            .toJSON()[0]) !== null && _a !== void 0 ? _a : null);
    }
    static setClientAppSettings() {
        const clientPath = this.findClientVersionPath();
        const clientSettings = fs_1.default.existsSync(path_1.default.join(clientPath, "ClientSettings"));
        if (!clientSettings) {
            fs_1.default.mkdirSync(path_1.default.join(clientPath, "ClientSettings"));
        }
        fs_1.default.writeFileSync(path_1.default.join(clientPath, "ClientSettings", "ClientAppSettings.json"), JSON.stringify({
            DFIntTaskSchedulerTargetFps: 244,
        }));
    }
}
exports.default = RobloxCore;
