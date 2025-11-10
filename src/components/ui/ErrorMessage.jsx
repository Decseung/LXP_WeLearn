import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-sm text-rose-600" role="alert" aria-live="polite">
      {message}
    </p>
  );
};

export default ErrorMessage;
