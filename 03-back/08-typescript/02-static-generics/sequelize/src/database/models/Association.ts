import { Model } from 'sequelize';
import db from '.';

import Books from './BookModel'; // Nossa outra entidade

class Example extends Model {
  // public <campo>!: <tipo>;
}

Example.init({
  // ... Campos
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Books.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
Books.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

Example.hasMany(Books, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
Example.hasMany(Books, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Example;