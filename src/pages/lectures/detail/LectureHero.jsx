/**
 * 강의 상세페이지 상단 섹션
 * - 강의 기본 정보( title, description, category)
 * - 평점, 수강생 수
 * - 강사 정보
 * - 썸네일 이미지
 * - 수강 신청 버튼
 *
 * 데이터 구조
 * - lectureId: 강의 ID
 * - title: 강의 제목
 * - description: 강의 설명
 * - content: 강의 상세 내용
 * - thumbnailUrl: 썸네일 이미지 URL
 * - userId: 강사 ID
 * - userName: 강사 이름
 * - category: 카테고리 (숫자)
 * - level: 난이도 (초급/중급/상급)
 * - studentCount: 수강생 수
 * - lectureCreatedAt: 강의 등록일
 * - curriculum: 커리큘럼 배열
 *
 */

import React from 'react';

export function LectureHero({ lectureItem = {} }) {
  // const navigate = useNavigate();

  const {
    category,
    title = '',
    description = '',
    userName = '',
    rating = 0,
    reviewCount = 0,
    studentCount = 0,
    curriculum = [],
  } = lectureItem;

  const getCategory = (category) => {
    const categories = {
      1: '프론트엔드',
      2: '백엔드',
      3: '모바일',
      4: '생성형 AI',
      5: '데브옵스',
      6: '데이터',
      7: '머신러닝',
    };
    return categories[category];
  };

  // 커리큘럼 총 강의 수
  const getTotalLectureCount = () => {
    if (!Array.isArray(curriculum)) return 0;
    return curriculum.reduce((total, section) => {
      const lecturesInSection = Array.isArray(section?.lectures) ? section.lectures.length : 0;
      return total + lecturesInSection;
    }, 0);
  };

  return (
    <section className="lecture-hero border-b border-gray-200 bg-white py-8">
      <div className="lecture-hero__container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* <!-- Left: Lecture Info (3/5 width) --> */}
          <div className="lecture-info lg:col-span-2">
            {/* <!-- Category Badge --> */}
            <span className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
              {getCategory(category)}
            </span>

            {/* <!-- Title --> */}
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>

            {/* <!-- Description --> */}
            <p className="mb-6 text-lg text-gray-600">{description}</p>

            {/* <!-- Meta Info --> */}
            <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-gray-200 pb-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <svg className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="font-medium text-gray-900">{rating || '0'} </span>
                <span>({reviewCount})</span>
              </div>

              <div className="flex items-center space-x-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>{studentCount.toLocaleString()}명 수강</span>
              </div>

              {/* <div className="flex items-center space-x-1">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>총 12시간</span>
                </div> */}

              <div className="flex items-center space-x-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
                <span>{getTotalLectureCount()} 개 강의</span>
              </div>
            </div>

            {/* <!-- Instructor Info --> */}
            <div className="mb-6 flex items-center space-x-2">
              <p className="text-sm text-gray-500">강사</p>
              <p className="text-base font-medium text-gray-900">{userName} </p>
            </div>

            {/* <!-- CTA Button (Left aligned) --> */}
            <div>
              <button className="w-full rounded-lg bg-gray-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none">
                수강신청
              </button>
            </div>
          </div>

          {/* <!-- Right: Large Thumbnail (2/5 width) --> */}
          <div className="lecture-thumbnail lg:col-span-3">
            <div className="top-24">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                <img
                  src="https://as2.ftcdn.net/jpg/04/60/08/53/1000_F_460085365_RX2qSv6zxhyabEPZi5Az8yaKrqgEKgCt.jpg"
                  alt="강의 썸네일"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LectureHero;
