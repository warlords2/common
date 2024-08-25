"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDefault = exports.NpcType = void 0;
// Enum's
//export { BuildingType } from "./enum/building_type";
var npc_type_1 = require("./enum/npc_type");
Object.defineProperty(exports, "NpcType", { enumerable: true, get: function () { return npc_type_1.NpcType; } });
// configs 
var world_json_1 = require("./configure/world.json");
Object.defineProperty(exports, "configDefault", { enumerable: true, get: function () { return world_json_1.default; } });
//# sourceMappingURL=index.js.map