const fs = require("fs");
const { spawn } = require("child_process");
const { resolve, join } = require("path");
const which = require("npm-which")(__dirname);

const solhintBinary = which.sync("solhint");

const defaultConfig = resolve(join(__dirname, "../.solhint.json"));

// eslint-disable-next-line camelcase
const solhint = async (contractsDirectory, workingDirectory) =>
  new Promise((resolve, reject) => {
    const customConfigPath = join(workingDirectory, '.solhint.json');
    const customConfig = fs.existsSync(customConfigPath);

    const config = customConfig ? customConfigPath : defaultConfig;

    const solhint = spawn(
      solhintBinary,
      // eslint-disable-next-line camelcase
      [`-c`, config, `${contractsDirectory}/**/*.sol`],
      {
        stdio: "inherit"
      }
    );

    solhint.on("stdout", data => {
      console.log(data.toString());
      resolve(data.toString());
    });

    solhint.on("stderr", data => {
      console.error(data.toString());
      reject(data.toString());
    });

    solhint.on("close", code => {
      const msg = `Solhint exited with code ${code}`;
      console.log(msg);
      resolve(msg);
    });
  });

module.exports = {
  solhint
};
