"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
class Market {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.Market = Market;
//# sourceMappingURL=market.js.map