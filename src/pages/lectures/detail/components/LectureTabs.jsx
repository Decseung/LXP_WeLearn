import React from 'react';

function LectureTabs() {
  return (
    <>
      {/* <!-- Description: 강의 상세 정보 탭 --> */}
      <section className="lecture-details bg-white">
        <div className="lecture-details__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <!-- Tab Navigation --> */}
          <div className="tab-navigation border-b border-gray-200">
            <div className="flex space-x-8 overflow-x-auto">
              <button className="tab-button border-b-2 border-gray-900 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                강의 소개
              </button>
              <button className="tab-button border-b-2 border-transparent py-4 text-sm font-medium whitespace-nowrap text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900">
                커리큘럼
              </button>
              <button className="tab-button border-b-2 border-transparent py-4 text-sm font-medium whitespace-nowrap text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900">
                강사 정보
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LectureTabs;
