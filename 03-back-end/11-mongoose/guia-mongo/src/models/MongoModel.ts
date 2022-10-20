import { isValidObjectId, Model } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import IModel, { IDelete } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async destroy(_id: string): Promise<IDelete> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.deleteOne({ _id });
  }
}

export default MongoModel;
