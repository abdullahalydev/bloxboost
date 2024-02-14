// cores
import RobloxCore from "../../source/cores/roblox.core";

describe("test roblox core class", function () {
  test("build roblox path", function () {
    const path = RobloxCore.buildRobloxPath();

    expect(path).toEqual("C:\\Users\\Abdullah Aly\\AppData\\Local\\Roblox");
  });

  test("is roblox installed", function () {
    const status = RobloxCore.isRobloxInstalled();

    expect(status).toEqual(true);
  });

  test("find client version path", function () {
    const status = RobloxCore.findClientVersionPath();

    expect(status).toEqual("C:\\Users\\Abdullah Aly\\AppData\\Local\\Roblox\\Versions\\version-f2b5c592c03b4183");
  });

  test("set client app settings", function () {
    const status = RobloxCore.setClientAppSettings();

    expect(status).toBeUndefined();
  });
});
