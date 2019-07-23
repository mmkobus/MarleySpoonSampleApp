import React from 'react';
import { connect } from '@cerebral/react';
import { ToastContainer } from 'react-toastify';

function ToastMsgModule() {
  return (
    <ToastContainer
      toastClassName="joecard-toast"
      progressClassName="joecard-toast-progress"
    />
  )
}

export default connect(ToastMsgModule)
