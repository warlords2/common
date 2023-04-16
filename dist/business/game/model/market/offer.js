"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
class Offer {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.Offer = Offer;
//# sourceMappingURL=offer.js.map