import { toast } from 'react-toastify';

export const toastMsg = (data) => {
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
