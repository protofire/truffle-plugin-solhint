const os = require("os");

const printHelpMessage = () => {
  console.log(
    [
      "Usage: truffle run solhint [options]",
      "",
      "Options",
      "-v, --version                          Show package and Solhint version information"
    ].join(os.EOL)
  );
};

const printVersion = () => {
  const pjson = require("../package.json");
  console.log(
    `${pjson.name} ${pjson.version} - Solhint ${pjson.dependencies.solhint}`
  );
};

module.exports = {
  printVersion,
  printHelpMessage
};
