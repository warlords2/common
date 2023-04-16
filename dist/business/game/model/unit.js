"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
class Unit {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.Unit = Unit;
//# sourceMappingURL=unit.js.map