import readline from "node:readline";
import RobloxCore from "./cores/roblox.core";

(function () {
  console.clear();
  console.log("welcome to roblox fps unlocker tool\n\n");

  if (!RobloxCore.isRobloxInstalled()) {
    console.log("roblox doesn't installed");
  }

  const chooses = [
    "1: install tool (80-fps, graphic-fixer)",
    "2: install tool (144-fps, graphic-fixer)",
    "3: install tool (180-fps, graphic-fixer)",
    "4: install tool (240-fps, graphic-fixer)",
    "",
    "5: install tool (80-fps)",
    "6: install tool (144-fps)",
    "7: install tool (180-fps)",
    "8: install tool (240-fps)",
    "",
    "9: uninstall tool",
    "",
  ];


  (function input() {
    console.log(chooses.join("\n"));

    const readlineInterface = readline.createInterface(process.stdin, process.stdout);

    readlineInterface.question("choose: ", function (answer) {
      readlineInterface.close();

      console.log(answer);

      if (answer === "1") {
        RobloxCore.initializeClientAppSettings(80, true);
      } else if (answer === "2") {
        RobloxCore.initializeClientAppSettings(144, true);
      } else if (answer === "3") {
        RobloxCore.initializeClientAppSettings(180, true);
      } else if (answer === "4") {
        RobloxCore.initializeClientAppSettings(240, true);
      } else if (answer === "5") {
        RobloxCore.initializeClientAppSettings(80, false);
      } else if (answer === "6") {
        RobloxCore.initializeClientAppSettings(144, false);
      } else if (answer === "7") {
        RobloxCore.initializeClientAppSettings(180, false);
      } else if (answer === "8") {
        RobloxCore.initializeClientAppSettings(240, false);
      } else if (answer === "9") {
        RobloxCore.deinitializeClientAppSettings();
      } else {
        console.clear();
        console.log("please choose right option");
        input();
      }
    });
  })();
})();
