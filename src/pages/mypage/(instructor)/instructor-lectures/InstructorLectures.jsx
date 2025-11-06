import React from 'react';

const InstructorLectures = () => {
  return (
    <main className="main py-8">
      <div className="main__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!-- Page Header --> */}
        <div className="page-header mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">마이페이지</h1>
          <p className="text-base text-gray-600">내 강의를 관리하고 학생들과 소통하세요</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* <!-- ============================================ -->
          <!-- Sidebar -->
          <!-- Description: 왼쪽 사이드바 메뉴 -->
          <!-- ============================================ --> */}
          <aside className="sidebar lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-md">
              {/* <!-- Profile --> */}
              <div className="profile mb-6 border-b border-gray-200 pb-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                  <span className="text-2xl font-bold text-gray-600">윤</span>
                </div>
                <h2 className="mb-1 text-lg font-bold text-gray-900">윤강사</h2>
                <p className="text-sm text-gray-500">instructor@lxp.com</p>
              </div>

              {/* <!-- Menu --> */}
              <nav className="sidebar-menu space-y-1" aria-label="마이페이지 메뉴">
                <a
                  href="/instructor/mypage"
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  수강 중인 강의
                </a>
                <a
                  href="/instructor/lectures"
                  className="block rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white"
                >
                  내가 등록한 강의
                </a>
                <button className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  로그아웃
                </button>
              </nav>
            </div>
          </aside>

          {/* <!-- ============================================ -->
          <!-- Main Content Area -->
          <!-- ============================================ --> */}
          <div className="content-area lg:col-span-3">
            {/* <!-- ============================================ -->
            <!-- Quick Actions -->
            <!-- Description: 빠른 액션 버튼 -->
            <!-- ============================================ --> */}
            <div className="quick-actions mb-8">
              <a
                href="/instructor/create"
                className="block rounded-lg bg-gray-900 p-6 text-white transition-colors hover:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-2 text-lg font-bold">새 강의 만들기</h3>
                    <p className="text-sm text-gray-300">지식을 공유하고 학생들과 함께 성장하세요</p>
                  </div>
                  <svg
                    className="h-8 w-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </a>
            </div>

            {/* <!-- ============================================ -->
            <!-- My Lectures -->
            <!-- Description: 내가 등록한 강의 목록 -->
            <!-- ============================================ --> */}
            <section className="my-lectures">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">내가 등록한 강의</h2>
                <a
                  href="/instructor/lectures"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  전체보기
                </a>
              </div>

              {/* <!-- Lecture List --> */}
              <div className="space-y-4">
                {/* <!-- ============================================ -->
                <!-- Lecture Item 1 -->
                <!-- Description: 강의 관리 아이템 -->
                <!-- ============================================ --> */}
                <div className="lecture-item overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    {/* <!-- Thumbnail --> */}
                    <div className="lecture-item__thumbnail relative aspect-video flex-shrink-0 bg-gray-200 sm:aspect-auto sm:w-48">
                      <img
                        src="https://via.placeholder.com/300x169"
                        alt="React 강의"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                        공개
                      </span>
                    </div>

                    {/* <!-- Content --> */}
                    <div className="lecture-item__content flex-1 p-6">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                            개발
                          </span>
                          <h3 className="mb-2 text-lg font-bold text-gray-900">
                            React와 TypeScript로 만드는 현대적인 웹 애플리케이션
                          </h3>
                          <p className="mb-4 text-sm text-gray-600">윤강사</p>
                        </div>
                      </div>

                      {/* <!-- Stats --> */}
                      <div className="mb-4 flex items-center space-x-4 border-b border-gray-200 pb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <span>350명 수강</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span>4.8 (120)</span>
                        </div>
                      </div>

                      {/* <!-- Action Buttons --> */}
                      <div className="flex items-center space-x-2">
                        <a
                          href="/instructor/edit/1"
                          className="flex-1 rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
                        >
                          수정
                        </a>
                        <button className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100">
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ============================================ -->
                <!-- Lecture Item 2 -->
                <!-- ============================================ --> */}
                <div className="lecture-item overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="lecture-item__thumbnail relative aspect-video flex-shrink-0 bg-gray-200 sm:aspect-auto sm:w-48">
                      <img
                        src="https://via.placeholder.com/300x169"
                        alt="JavaScript 강의"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                        공개
                      </span>
                    </div>

                    <div className="lecture-item__content flex-1 p-6">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                            개발
                          </span>
                          <h3 className="mb-2 text-lg font-bold text-gray-900">
                            JavaScript 완전 정복: 기초부터 고급까지
                          </h3>
                          <p className="mb-4 text-sm text-gray-600">윤강사</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center space-x-4 border-b border-gray-200 pb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <span>520명 수강</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span>4.9 (180)</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <a
                          href="/instructor/edit/2"
                          className="flex-1 rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
                        >
                          수정
                        </a>
                        <button className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100">
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ============================================ -->
                <!-- Lecture Item 3 - Draft -->
                <!-- ============================================ --> */}
                <div className="lecture-item overflow-hidden rounded-lg bg-white opacity-75 shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="lecture-item__thumbnail relative aspect-video flex-shrink-0 bg-gray-200 sm:aspect-auto sm:w-48">
                      <img
                        src="https://via.placeholder.com/300x169"
                        alt="Vue.js 강의"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-white">
                        임시저장
                      </span>
                    </div>

                    <div className="lecture-item__content flex-1 p-6">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                            개발
                          </span>
                          <h3 className="mb-2 text-lg font-bold text-gray-900">Vue.js 3 시작하기</h3>
                          <p className="mb-4 text-sm text-gray-600">윤강사</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center space-x-4 border-b border-gray-200 pb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <span>0명 수강</span>
                        </div>
                        <span className="text-gray-400">미공개</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <a
                          href="/instructor/edit/3"
                          className="flex-1 rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
                        >
                          이어서 작성
                        </a>
                        <button className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100">
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InstructorLectures;
