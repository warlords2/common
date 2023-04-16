"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
class Sale {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.Sale = Sale;
//# sourceMappingURL=sale.js.map