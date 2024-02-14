// packages
import os from "node:os";
import fs from "node:fs";
import path from "node:path";

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
      versions
        .filter(function (version) {
          return fs.existsSync(path.join(robloxPath, "Versions", version, "RobloxPlayerLauncher.exe"));
        })
        .map(function (version) {
          return path.join(robloxPath, "Versions", version);
        })[0] ?? null
    );
  }

  static initializeClientAppSettings(fps: number, graphicFixer: boolean) {
    const clientPath = this.findClientVersionPath();
    const clientSettings = fs.existsSync(path.join(clientPath, "ClientSettings"));

    if (!clientSettings) {
      fs.mkdirSync(path.join(clientPath, "ClientSettings"));
    }

    fs.writeFileSync(
      path.join(clientPath, "ClientSettings", "ClientAppSettings.json"),
      JSON.stringify({
        DFIntTaskSchedulerTargetFps: fps,
        FFlagFixGraphicsQuality: graphicFixer ? "True" : "False",
      })
    );
  }

  static deinitializeClientAppSettings() {
    const clientPath = this.findClientVersionPath();
    const clientSettings = fs.existsSync(path.join(clientPath, "ClientSettings"));

    if (!clientSettings) {
      fs.mkdirSync(path.join(clientPath, "ClientSettings"));
    }

    fs.writeFileSync(path.join(clientPath, "ClientSettings", "ClientAppSettings.json"), JSON.stringify({}));
  }
}
