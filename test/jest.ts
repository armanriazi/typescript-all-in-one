/// https://jestjs.io/docs/configuration
import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
};

export default async (): Promise<Config> => {
  return {
    verbose: true,
  };
};