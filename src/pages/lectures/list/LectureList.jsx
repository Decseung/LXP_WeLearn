import React from 'react';

const LectureList = () => {
  return (
    <main className="main">
      {/* <!-- ============================================ --> */}
      {/* <!-- Page Title Section --> */}
      {/* <!-- Description: 페이지 제목 영역 --> */}
      {/* <!-- ============================================ --> */}
      <section className="page-title border-b border-gray-200 bg-white py-8">
        <div className="page-title__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">모든 강의</h1>
          <p className="text-base text-gray-600">원하는 강의를 찾아보세요</p>
        </div>
      </section>

      {/* <!-- ============================================ --> */}
      {/* <!-- Filter and Sort Section --> */}
      {/* <!-- Description: 필터 및 정렬 옵션 --> */}
      {/* <!-- ============================================ --> */}
      <section className="filter-section border-b border-gray-200 bg-white py-4">
        <div className="filter-section__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* <!-- Filter Buttons --> */}
            <div className="filter-buttons flex flex-wrap items-center gap-2">
              <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
                전체
              </button>
              <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                개발
              </button>
              <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                디자인
              </button>
              <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                비즈니스
              </button>
              <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                마케팅
              </button>
            </div>

            {/* <!-- Sort Dropdown --> */}
            <div className="sort-dropdown">
              <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-gray-900 focus:outline-none">
                <option>최신순</option>
                <option>인기순</option>
                <option>평점순</option>
                <option>수강생순</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============================================ --> */}
      {/* <!-- Lecture Grid Section --> */}
      {/* <!-- Description: 강의 카드 그리드 --> */}
      {/* <!-- ============================================ --> */}
      <section className="lecture-grid py-12">
        <div className="lecture-grid__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <!-- Result Count --> */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              총 <span className="font-medium text-gray-900">248</span>개의 강의
            </p>
          </div>

          {/* <!-- Grid Container --> */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 1 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="React 완전 정복"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  개발
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  React와 TypeScript로 만드는 현대적인 웹 애플리케이션
                </h3>

                <p className="text-sm text-gray-600">윤강사</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.8</span>
                    <span className="text-sm text-gray-500">(120)</span>
                  </div>

                  <span className="text-sm text-gray-500">350명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 2 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="UI/UX 디자인 기초"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  디자인
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  UI/UX 디자인 기초부터 실전까지
                </h3>

                <p className="text-sm text-gray-600">김디자이너</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.9</span>
                    <span className="text-sm text-gray-500">(85)</span>
                  </div>

                  <span className="text-sm text-gray-500">230명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 3 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="데이터 분석"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  개발
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  Python으로 시작하는 데이터 분석
                </h3>

                <p className="text-sm text-gray-600">박데이터</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.7</span>
                    <span className="text-sm text-gray-500">(200)</span>
                  </div>

                  <span className="text-sm text-gray-500">480명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 4 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="디지털 마케팅"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  마케팅
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  디지털 마케팅 전략과 실전 운영
                </h3>

                <p className="text-sm text-gray-600">이마케터</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.6</span>
                    <span className="text-sm text-gray-500">(95)</span>
                  </div>

                  <span className="text-sm text-gray-500">310명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 5 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="Node.js 백엔드"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  개발
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  Node.js 백엔드 개발 실전 가이드
                </h3>

                <p className="text-sm text-gray-600">최개발</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.7</span>
                    <span className="text-sm text-gray-500">(156)</span>
                  </div>

                  <span className="text-sm text-gray-500">420명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 6 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="Figma 디자인"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  디자인
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  Figma 마스터 클래스
                </h3>

                <p className="text-sm text-gray-600">정디자인</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.9</span>
                    <span className="text-sm text-gray-500">(203)</span>
                  </div>

                  <span className="text-sm text-gray-500">580명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 7 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="스타트업 창업"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  비즈니스
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  스타트업 창업 A to Z
                </h3>

                <p className="text-sm text-gray-600">강비즈니스</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.8</span>
                    <span className="text-sm text-gray-500">(178)</span>
                  </div>

                  <span className="text-sm text-gray-500">390명</span>
                </div>
              </div>
            </div>

            {/* <!-- ============================================ --> */}
            {/* <!-- Lecture Card 8 --> */}
            {/* <!-- ============================================ --> */}
            <div className="lecture-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="lecture-card__thumbnail relative aspect-video bg-gray-200">
                <img
                  src="https://via.placeholder.com/400x225"
                  alt="SNS 마케팅"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  마케팅
                </span>
              </div>

              <div className="lecture-card__content space-y-3 p-4">
                <h3 className="lecture-card__title line-clamp-2 text-lg font-bold text-gray-900">
                  SNS 마케팅 실전 전략
                </h3>

                <p className="text-sm text-gray-600">송마케팅</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">4.7</span>
                    <span className="text-sm text-gray-500">(142)</span>
                  </div>

                  <span className="text-sm text-gray-500">290명</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================ --> */}
          {/* <!-- Pagination --> */}
          {/* <!-- ============================================ --> */}
          <div className="pagination mt-12 flex items-center justify-center space-x-2">
            <button
              className="cursor-not-allowed rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-400"
              disabled
            >
              이전
            </button>

            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
              1
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              4
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              5
            </button>

            <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LectureList;
