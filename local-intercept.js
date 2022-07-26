const componentOverrideMapping = require('./init/componentOverrideMapping');
const moduleOverridePlugin = require('./init/moduleOverridePlugin');

function localIntercept(targets) {
    // override modules
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    });
}

module.exports = localIntercept;
