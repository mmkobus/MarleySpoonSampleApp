import { state } from 'cerebral';

export default function setToken({ store, get }) {
  //  Timeout to make the loader visible for longer than 1 sec
  setTimeout(() => {
    store.set(state`data.loading`, false);
  }, 500);
}
