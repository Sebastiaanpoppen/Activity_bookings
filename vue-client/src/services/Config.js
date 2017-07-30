class Config {
  static setConfig(key, value) {
    this.configs[key] = value;
  }

  static getConfig(key) {
    console.log(key)
    if (this.configs[key]) {
      return this.configs[key];
    }
    throw new Error('ConfigNotFoundException');
  }
}

Config.configs = [];

export default Config;
