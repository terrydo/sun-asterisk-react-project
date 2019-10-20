/*
 *
 * RegisterPage actions
 *
 */

import { REGISTER_ACTION } from './constants';

export function registerAction(payload) {
  return {
    type: REGISTER_ACTION,
    payload,
  };
}
