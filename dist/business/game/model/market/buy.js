"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buy = void 0;
class Buy {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.Buy = Buy;
//# sourceMappingURL=buy.js.map