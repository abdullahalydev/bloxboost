// packages
import os from "os";
import fs from "fs";
import lodash from "lodash";
import path from "path";

export default class RobloxCore {
  static buildRobloxPath() {
    const APPDATA = process.env.APPDATA;

    if (APPDATA) {
      return path.join(APPDATA, "..", "Local", "Roblox");
    }

    const home = os.homedir();

    return path.join(home, "AppData", "Local", "Roblox");
  }

  static isRobloxInstalled() {
    const robloxPath = this.buildRobloxPath();
    return fs.existsSync(robloxPath);
  }

  static findClientVersionPath() {
    const robloxPath = this.buildRobloxPath();
    const versions = fs.readdirSync(path.join(robloxPath, "Versions"));

    return (
      lodash(versions)
        .filter(function (version) {
          return fs.existsSync(path.join(robloxPath, "Versions", version, "RobloxPlayerLauncher.exe"));
        })
        .map(function (version) {
          return path.join(robloxPath, "Versions", version);
        })
        .toJSON()[0] ?? null
    );
  }

  static setClientAppSettings() {
    const clientPath = this.findClientVersionPath();
    const clientSettings = fs.existsSync(path.join(clientPath, "ClientSettings"));

    if (!clientSettings) {
      fs.mkdirSync(path.join(clientPath, "ClientSettings"));
    }

    fs.writeFileSync(
      path.join(clientPath, "ClientSettings", "ClientAppSettings.json"),
      JSON.stringify({
        DFIntTaskSchedulerTargetFps: 244,
      })
    );
  }
}
