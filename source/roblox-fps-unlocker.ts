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
    "9: install tool (graphic-fixer)",
    "",
    "10: uninstall tool",
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

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "2") {
        RobloxCore.initializeClientAppSettings(144, true);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "3") {
        RobloxCore.initializeClientAppSettings(180, true);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "4") {
        RobloxCore.initializeClientAppSettings(240, true);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "5") {
        RobloxCore.initializeClientAppSettings(80, false);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "6") {
        RobloxCore.initializeClientAppSettings(144, false);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "7") {
        RobloxCore.initializeClientAppSettings(180, false);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "8") {
        RobloxCore.initializeClientAppSettings(240, false);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "9") {
        RobloxCore.initializeClientAppSettings(60, true);

        console.clear();
        console.log("tool installed succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else if (answer === "10") {
        RobloxCore.deinitializeClientAppSettings();

        console.clear();
        console.log("tool uninstalled succesfully, program will exit after 5 seconds");
        setTimeout(function () {
          console.log("done.");
        }, 5 * 1000);
      } else {
        console.clear();
        console.log("please choose right option");
        input();
      }
    });
  })();
})();
