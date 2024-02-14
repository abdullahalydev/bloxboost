import readline from "node:readline";
import RobloxCore from "./cores/roblox.core";

(function () {
  console.log("welcome to roblox fps unlocker tool");

  if (!RobloxCore.isRobloxInstalled()) {
    console.log("roblox doesn't installed");
  }

  (function input() {
    console.log("1: install tool\n2: uninstall tool\n");

    const readlineInterface = readline.createInterface(process.stdin, process.stdout);

    readlineInterface.question("choose: ", function (answer) {
      readlineInterface.close();

      if (answer === "1") {
        RobloxCore.initializeClientAppSettings();
      } else if (answer === "2") {
        RobloxCore.deinitializeClientAppSettings();
      } else {
        console.clear();
        console.log("please choose right option");
        input();
      }
    });
  })();
})();
