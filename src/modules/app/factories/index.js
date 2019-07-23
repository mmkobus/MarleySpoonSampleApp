import { toast } from 'react-toastify';

export const toastMsgFactory = (data) =>
  function showToastMsg({ get, store }) {
    if (typeof data.message !== 'string') {
      data.message = get(data.message);
    }
    if (data.type === 'success') {
      toast.success(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      toast.error(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };
