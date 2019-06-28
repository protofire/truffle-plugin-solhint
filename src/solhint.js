const { spawn } = require("child_process");
const { resolve, join } = require("path");
const which = require("npm-which")(__dirname);

const solhintBinary = which.sync("solhint");

const solhintConfig = resolve(join(__dirname, "../.solhint.json"));

// eslint-disable-next-line camelcase
const solhint = async contracts_directory =>
  new Promise((resolve, reject) => {
    const solhint = spawn(
      solhintBinary,
      // eslint-disable-next-line camelcase
      [`-c`, solhintConfig, `${contracts_directory}/**/*.sol`],
      {
        stdio: "inherit"
      }
    );

    solhint.on("stdout", data => {
      console.log(data.toString());
      resolve(data.toString());
    });

    solhint.on("stderr", data => {
      console.log(data.toString());
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
