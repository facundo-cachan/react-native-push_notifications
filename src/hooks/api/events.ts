/**
 * Event API methods.
 *
 * @constructor
 */

import mock from '../../__mocks__/events.json';

import type { AxiosRequestConfig } from 'axios';

class EventAPI {
  // @ts-ignore
  getAll = async ({ url, method = 'get' }: AxiosRequestConfig) => {
    /* 
    const response = await apiInstance({
      url,
      method,
    })
     */
    return mock
  };
}

export default new EventAPI()