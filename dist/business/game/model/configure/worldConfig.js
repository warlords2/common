"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldConfig = void 0;
const class_validator_1 = require("class-validator");
class WorldConfig {
    isValid() {
        let groups = undefined;
        let isValid = (0, class_validator_1.validate)(this, { groups, validationError: { target: false } });
        return isValid;
    }
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.WorldConfig = WorldConfig;
//# sourceMappingURL=worldConfig.js.map