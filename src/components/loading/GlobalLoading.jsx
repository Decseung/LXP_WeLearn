import React from 'react';
import Loading from './loadingBody/Loading.jsx';

const GlobalLoading = ({ mention }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-2 font-bold">
      <Loading />
      {mention && <p>{mention}</p>}
    </div>
  );
};

export default GlobalLoading;
