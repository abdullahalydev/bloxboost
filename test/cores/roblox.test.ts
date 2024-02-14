// cores
import RobloxCore from "../../source/cores/roblox.core";

describe("test roblox core class", function () {
  test("build roblox path", function () {
    const path = RobloxCore.buildRobloxPath();

    expect(typeof path).toEqual("string");
  });

  test("is roblox installed", function () {
    const status = RobloxCore.isRobloxInstalled();

    expect(typeof status).toEqual("boolean");
  });

  test("find client version path", function () {
    const path = RobloxCore.findClientVersionPath();

    expect(typeof path).toEqual("string");
  });

  test("set client app settings", function () {
    const process = RobloxCore.initializeClientAppSettings(60, true);

    expect(process).toBeUndefined();
  });
});
