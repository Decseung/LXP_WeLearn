import React, { useEffect, useState } from 'react';
import LectureHero from './LectureHero';
import LectureContent from './LectureContent';
import LectureCurriculum from './LectureCurriculum';
import { mockLectureData } from './mockData.js';
import { useParams } from 'react-router-dom';
import LectureTabs from './LectureTabs.jsx';

const LectureDetail = () => {
  // 상태 관리
  const [lectureItem, setLectureItem] = useState(null);

  // 강의 ID 가져오기
  const { lectureId } = useParams();

  useEffect(() => {
    // URL의 lectureId와 일치하는 강의 찾기
    const foundLecture = mockLectureData.find((lecture) => lecture.lectureId === lectureId);

    setLectureItem(foundLecture || null);
  }, [lectureId]);

  if (!lectureItem) {
    return (
      <main className="main h-screen py-20 pb-12 text-center text-gray-500">
        해당 강의를 찾을 수 없습니다.
      </main>
    );
  }
  // Firebase에서 강의 데이터 가져오기 useEffect(() => { if/else/finally 조건문 })

  return (
    <main className="main pb-12">
      {/* 상단 히어로 섹션 */}
      <LectureHero lectureItem={lectureItem} />

      {/* 강의 상세 메뉴 탭 */}
      <LectureTabs />

      {/* 강의 상세 콘텐츠 */}
      <LectureContent />

      {/* 커피큘럼 소개 */}
      <LectureCurriculum />
    </main>
  );
};

export default LectureDetail;
