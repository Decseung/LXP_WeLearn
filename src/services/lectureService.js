import { db } from '../lib/firebase/config.js';
import { getDoc, doc } from 'firebase/firestore';

const LECTURE_LIST = 'lecture-list';

/**
 *
 * @param {string} lectureId - Firestore document Id
 * @returns {Object} 강의 객체
 */

export const getLectureItem = async (lectureId) => {
  try {
    const docRef = doc(db, LECTURE_LIST, lectureId);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      console.log(`강의 ID를 찾을 수 없음 : ${lectureId}`);
      return null;
    }

    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    console.error('강의 데이터를 불러오는 중 오류 발생:', error);
    // 오류를 null로 반환 => 부모 컴포넌트에 영향을 주지 않게 null로 처리
    return null;
  }
};
