const { solhint } = require("./solhint.js");
const { printHelpMessage, printVersion } = require("./helpers");

module.exports = async config => {
  // eslint-disable-next-line
  const { h, help, v, version, contracts_directory, working_directory } = config;

  if (h || help) {
    printHelpMessage();
    return Promise.resolve();
  }

  if (v || version) {
    printVersion();
    return Promise.resolve();
  }

  return solhint(contracts_directory, working_directory);
};
