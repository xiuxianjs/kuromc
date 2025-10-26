import _ from 'lodash';
import util from '../util.js';

const defaultConfig = {
    base: {
        gacha: {
            isItFourStarCount: false
        }
    }
};
var config = new (class Config {
    #configRootPath = `${util.appFilePath}/config`;
    #configBasePath = `${this.#configRootPath}/base.yaml`;
    constructor() {
        util.mkdir(this.#configRootPath);
        if (!util.fileExists(this.#configBasePath)) {
            util.writeYAML(this.#configBasePath, defaultConfig.base);
        }
        // this.#config.base = util.readYAML(this.#configBasePath);
    }
    get baseConfig() {
        return util.readYAML(this.#configBasePath);
    }
    setBaseConfig(config) {
        const oldConfig = util.readYAML(this.#configBasePath);
        util.writeYAML(this.#configBasePath, _.merge(oldConfig, config));
    }
})();

export { config as default };
