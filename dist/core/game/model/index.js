"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcType = exports.province_scale_default = exports.building_scale_default = void 0;
// config default
var building_scale_production_json_1 = require("./configure/building.scale.production.json");
Object.defineProperty(exports, "building_scale_default", { enumerable: true, get: function () { return building_scale_production_json_1.default; } });
var province_scale_production_json_1 = require("./configure/province.scale.production.json");
Object.defineProperty(exports, "province_scale_default", { enumerable: true, get: function () { return province_scale_production_json_1.default; } });
// Enum's
//export { BuildingType } from "./enum/building_type";
var npc_type_1 = require("./enum/npc_type");
Object.defineProperty(exports, "NpcType", { enumerable: true, get: function () { return npc_type_1.NpcType; } });
//# sourceMappingURL=index.js.map