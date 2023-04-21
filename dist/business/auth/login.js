"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const _core_1 = require("../../core/index.js");
const class_validator_1 = require("class-validator");
class Login {
    isValid() {
        let groups = undefined;
        if (this.type)
            groups = [this.type];
        let isValid = (0, class_validator_1.validate)(this, { groups, validationError: { target: false } });
        return isValid;
    }
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, {
        groups: [_core_1.TypeLogin.MAIL],
    }),
    (0, class_validator_1.Length)(14, 80, {
        groups: [_core_1.TypeLogin.NONCE]
    }),
    __metadata("design:type", String)
], Login.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 14,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1
    }, {
        groups: [_core_1.TypeLogin.MAIL]
    }),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        groups: [_core_1.TypeLogin.NONCE]
    }),
    __metadata("design:type", String)
], Login.prototype, "nonce", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Login.prototype, "type", void 0);
exports.Login = Login;
//# sourceMappingURL=login.js.map