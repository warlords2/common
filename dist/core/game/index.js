"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.province_scale_default = exports.building_scale_default = void 0;
// config default
var model_1 = require("./model");
Object.defineProperty(exports, "building_scale_default", { enumerable: true, get: function () { return model_1.building_scale_default; } });
var model_2 = require("./model");
Object.defineProperty(exports, "province_scale_default", { enumerable: true, get: function () { return model_2.province_scale_default; } });
// models
__exportStar(require("./model"), exports);
//# sourceMappingURL=index.js.map