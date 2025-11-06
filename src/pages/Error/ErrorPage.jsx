import React from 'react';
import Button from '../../components/ui/Button.jsx';

const ErrorPage = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="rounded-lg px-10 py-6 transition duration-700 hover:bg-gray-100">
        <h2>해당 페이지는 존재 안함</h2>
        <p>러니얼ㄴㄹ낭ㄹ농ㄹㄴ올</p>
        <Button size="sm" variant="secondary">
          test
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
