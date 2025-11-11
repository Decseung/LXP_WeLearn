// 2) 유틸: 난수/날짜/한글 이름 생성
import { randDate } from '../utils/randomDate.js';
import { Timestamp } from 'firebase/firestore';

const ROLES = ['USER', 'ADMIN', 'INSTRUCTOR'];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 한국어 2~3글자 이름: 성(1) + 이름(1~2)
function randHangulName() {
  const familyNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오'];
  const givenSyllables = [
    '민',
    '수',
    '영',
    '진',
    '호',
    '우',
    '윤',
    '서',
    '현',
    '준',
    '하',
    '진',
    '아',
    '연',
    '빈',
    '성',
    '태',
    '지',
    '예',
    '온',
  ];
  const family = familyNames[randInt(0, familyNames.length - 1)];
  const givenLen = randInt(1, 2); // 총 2~3자
  let given = '';
  for (let i = 0; i < givenLen; i++) given += givenSyllables[randInt(0, givenSyllables.length - 1)];
  return family + given; // 2~3자
}

// 3) users 배열 만들기 (for문)
export function buildUsers(count) {
  const users = [];
  const start = new Date('2022-01-01T00:00:00Z');
  const end = new Date('2025-11-11T23:59:59Z');

  for (let i = 0; i < count; i++) {
    const userName = randHangulName(); // 2~3자
    const email = `user${String(i + 1).padStart(3, '0')}@example.com`; // 테스트용 example.com
    const role = ROLES[randInt(0, ROLES.length - 1)];
    const userCreatedAt = randDate(start, end);

    users.push({ userName, email, role, userCreatedAt });
  }
  return users;
}
