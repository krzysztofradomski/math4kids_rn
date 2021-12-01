/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          add: {
            screens: {
              AddScreen: 'add',
            },
          },
          subtract: {
            screens: {
              SubtractScreen: 'subtract',
            },
          },
          multiply: {
            screens: {
              MultiplyScreen: 'multiply',
            }
          },
          divide: {
            screens: {
              DivideScreen: 'divide'
            }
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
