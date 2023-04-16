"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const npc_1 = require("./npc");
class Player extends npc_1.Npc {
    constructor(values = {}) {
        super(values);
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map