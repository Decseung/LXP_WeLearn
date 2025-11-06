import React from 'react';

const MyLectures = () => {
  return (
    <main className="main py-8">
      <div className="main__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!-- Page Header --> */}
        <div className="page-header mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">마이페이지</h1>
          <p className="text-base text-gray-600">내 학습 현황과 정보를 관리하세요</p>
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
                  <span className="text-2xl font-bold text-gray-600">홍</span>
                </div>
                <h2 className="mb-1 text-lg font-bold text-gray-900">홍길동</h2>
                <p className="text-sm text-gray-500">student@lxp.com</p>
              </div>

              {/* <!-- Menu --> */}
              <nav className="sidebar-menu space-y-1" aria-label="마이페이지 메뉴">
                <a
                  href="/mypage"
                  className="block rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white"
                >
                  수강 중인 강의
                </a>
                <a
                  href="/mypage/registered"
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
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
          <!-- Description: 메인 컨텐츠 영역 -->
          <!-- ============================================ --> */}
          <div className="content-area lg:col-span-3">
            {/* <!-- ============================================ -->
            <!-- In Progress Lectures -->
            <!-- Description: 수강 중인 강의 목록 -->
            <!-- ============================================ --> */}
            <section className="in-progress-lectures">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">수강 중인 강의</h2>
                <a
                  href="/mypage/lectures"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  전체보기
                </a>
              </div>

              {/* <!-- Lecture List --> */}
              <div className="space-y-4">
                {/* <!-- ============================================ -->
                <!-- Lecture Item 1 -->
                <!-- Description: 수강 중인 강의 아이템 -->
                <!-- ============================================ --> */}
                <div className="lecture-item overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    {/* <!-- Thumbnail --> */}
                    <div className="lecture-item__thumbnail aspect-video flex-shrink-0 bg-gray-200 sm:aspect-auto sm:w-48">
                      <img
                        src="https://via.placeholder.com/300x169"
                        alt="React 강의"
                        className="h-full w-full object-cover"
                      />
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
                        <button
                          className="ml-4 flex-shrink-0 text-gray-400 transition-colors hover:text-red-500"
                          aria-label="찜하기 취소"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                      </div>

                      {/* <!-- Progress Bar --> */}
                      <div className="mb-3">
                        <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
                          <span>진행률</span>
                          <span className="font-medium">35%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-gray-900"></div>
                        </div>
                      </div>

                      {/* <!-- Action Button --> */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">8 / 24 강의 완료</span>
                        <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                          이어서 학습하기
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
                    <div className="lecture-item__thumbnail aspect-video flex-shrink-0 bg-gray-200 sm:aspect-auto sm:w-48">
                      <img
                        src="https://via.placeholder.com/300x169"
                        alt="UI/UX 강의"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="lecture-item__content flex-1 p-6">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                            디자인
                          </span>
                          <h3 className="mb-2 text-lg font-bold text-gray-900">
                            UI/UX 디자인 기초부터 실전까지
                          </h3>
                          <p className="mb-4 text-sm text-gray-600">김디자이너</p>
                        </div>
                        <button
                          className="ml-4 flex-shrink-0 text-gray-400 transition-colors hover:text-red-500"
                          aria-label="찜하기 취소"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
                          <span>진행률</span>
                          <span className="font-medium">62%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-gray-900"></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">12 / 20 강의 완료</span>
                        <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                          이어서 학습하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ============================================ -->
                <!-- Lecture Item 3 -->
                <!-- ============================================ --> */}
                <div className="lecture-item overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="lecture-item__thumbnail aspect-video flex-shrink-0 bg-gray-200 sm:aspect-auto sm:w-48">
                      <img
                        src="https://via.placeholder.com/300x169"
                        alt="데이터 분석 강의"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="lecture-item__content flex-1 p-6">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                            개발
                          </span>
                          <h3 className="mb-2 text-lg font-bold text-gray-900">
                            Python으로 시작하는 데이터 분석
                          </h3>
                          <p className="mb-4 text-sm text-gray-600">박데이터</p>
                        </div>
                        <button
                          className="ml-4 flex-shrink-0 text-gray-400 transition-colors hover:text-red-500"
                          aria-label="찜하기 취소"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
                          <span>진행률</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-gray-900"></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">3 / 18 강의 완료</span>
                        <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                          이어서 학습하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ============================================ -->
              <!-- Empty State (숨김 상태, 강의가 없을 때 표시) -->
              <!-- ============================================ --> */}
              <div className="empty-state flex hidden flex-col items-center justify-center rounded-lg bg-white px-4 py-16">
                <div className="mb-4 text-6xl">📚</div>
                <p className="mb-2 text-lg font-medium text-gray-900">
                  아직 수강 중인 강의가 없습니다
                </p>
                <p className="mb-6 text-sm text-gray-500">관심 있는 강의를 찾아보세요</p>
                <a
                  href="/lectures"
                  className="rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
                >
                  강의 찾아보기
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyLectures;
