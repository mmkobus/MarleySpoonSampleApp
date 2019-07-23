import { props, state } from 'cerebral';
import { httpGet } from '@cerebral/http/operators';
import { set } from 'cerebral/factories';
import { toastMsgFactory } from '../../modules/app/factories';
import resetLoading from '../actions/resetLoading';


export default [
  set(state`data.loading`, true),
  httpGet(
    '/api/recipes',
  ),
  {
    success: [
      set(state`data.recipes`, props`response.result`),
      resetLoading,
    ],
    error: [
      resetLoading,
      toastMsgFactory({ type: 'error', message: 'There was an error while trying to get our recipes. Please try again later.' }),
    ],
  },

];
