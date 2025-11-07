import React from 'react';

function LectureContent() {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* <!-- Tab Content --> */}
      {/* <!-- Description --> */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">강의 설명</h2>
        <div className="prose prose-base space-y-4 text-gray-700">
          <p>
            이 강의는 React와 TypeScript를 활용하여 현대적인 웹 애플리케이션을 개발하는 방법을
            다룹니다. 기초 개념부터 시작하여 실전 프로젝트까지 단계별로 학습할 수 있도록 구성되어
            있습니다.
          </p>
          <p>
            React의 핵심 개념인 컴포넌트, Props, State, Lifecycle을 깊이 있게 학습하고, TypeScript를
            통해 타입 안정성을 확보하는 방법을 배웁니다. 또한 React Hooks, Context API, 상태 관리
            라이브러리 등 실무에서 필수적인 기술들을 다룹니다.
          </p>
          <p>
            강의 후반부에는 실제 서비스와 유사한 프로젝트를 진행하며, 배운 내용을 실전에 적용하는
            경험을 쌓을 수 있습니다. 성능 최적화, 테스팅, 배포까지 전체 개발 프로세스를
            경험해보세요.
          </p>
        </div>
      </div>
      <div className="tab-content max-w-4xl py-8">
        {/* <!-- ============================================ --> */}
        {/* <!-- Overview Tab Content --> */}
        {/* <!-- Description: 강의 소개 --> */}
        {/* <!-- ============================================ --> */}
        <div className="overview-content">
          {/* <!-- What You'll Learn --> */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">이런 것을 배워요</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">
                  React 기초부터 고급 개념까지 완벽 이해
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">
                  TypeScript를 활용한 타입 안정성 확보
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">컴포넌트 설계 및 상태 관리 패턴</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">실전 프로젝트를 통한 실무 경험</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">React Hooks와 Context API 활용</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">성능 최적화 기법 및 베스트 프랙티스</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureContent;
