import RobloxCore from "./cores/roblox.core";

(function () {
  if (!RobloxCore.isRobloxInstalled()) {
    throw new Error("roblox doesn't installed");
  }

  RobloxCore.setClientAppSettings();
})();
