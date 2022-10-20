import IFrame from '../../interfaces/IFrame';
import { IDelete } from '../../interfaces/IModel';

interface ILensId extends IFrame {
  _id: string;
}

export const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe',
};

export const frameMockWithId: ILensId = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe',
};

export const frameArrayMockWithId: ILensId[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe',
  },
  {
    _id: '62cf1fc6412565d94eba52cd',
    material: 'Prata',
    color: 'Daquele outro naipe',
  },
];

export const correctID = '62cf1fc6498565d94eba52cd';
export const incorrectID = 'sjdao31231dao';

export const deletedFrame: IDelete = {
  acknowledged: true,
  deletedCount: 1,
};