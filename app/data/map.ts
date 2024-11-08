import { LZs } from '~/data/lzs';
import { Locations } from '~/data/locations';
import { location, lz, objective, task } from '~/lib/types';
import { Tasks } from './tasks';

export type DataMap = {
  LZ: lz[];
  T: task[];
  O: objective[];
  L: location[];
};

export const dataMap: DataMap = {
  LZ: LZs,
  T: Tasks,
  O: Tasks.flatMap(task => task.objectives),
  L: Locations,
};
