"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinceScale = void 0;
const scale_production_1 = require("./scale.production");
class ProvinceScale extends scale_production_1.Scale {
    constructor(values = {}) {
        super(values);
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.ProvinceScale = ProvinceScale;
//# sourceMappingURL=province.scale.production.js.map