// 랜덤 문자열 & 날짜 생성 유틸
import { randDate } from '../utils/randomDate.js';
import { Timestamp } from 'firebase/firestore';

function randomText(len) {
  const chars = '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join(
    '',
  );
}

function randomLevel() {
  const levels = ['초급', '중급', '고급'];
  return levels[Math.floor(Math.random() * levels.length)];
}

// 강의 데이터 생성 함수
export function createRandomLecture(userId, userName) {
  const numChapters = Math.floor(Math.random() * 3) + 1; // 1~3개 챕터
  const curriculum = Array.from({ length: numChapters }, (_, ci) => ({
    chapterTitle: `챕터 ${ci + 1} - ${randomText(3)}`,
    lessons: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, (_, li) => ({
      lessonId: `lesson-${ci + 1}-${li + 1}`,
      lessonTitle: `레슨 ${li + 1} - ${randomText(4)}`,
      lessonMediaUrl: `/media/${randomText(5)}.mp4`,
    })),
  }));
  const start = new Date('2022-01-01T00:00:00Z');
  const end = new Date('2025-11-11T23:59:59Z');

  return {
    title: `강의 ${randomText(5)}`,
    description: randomText(20),
    content: randomText(100),
    thumbnailUrl: `/src/assets/images/${randomText(5)}.png`,
    userId,
    userName,
    category: Math.floor(Math.random() * 10) + 1,
    level: randomLevel(),
    studentCount: Math.floor(Math.random() * 1000),
    lectureCreatedAt: randDate(start, end),
    curriculum,
  };
}
