"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const BookModel_1 = __importDefault(require("./BookModel")); // Nossa outra entidade
class Example extends sequelize_1.Model {
}
Example.init({
// ... Campos
}, {
    // ... Outras configs
    underscored: true,
    sequelize: _1.default,
    // modelName: 'example',
    timestamps: false,
});
/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */
BookModel_1.default.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
BookModel_1.default.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
Example.hasMany(BookModel_1.default, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
Example.hasMany(BookModel_1.default, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });
exports.default = Example;
