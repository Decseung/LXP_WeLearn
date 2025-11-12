import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase/config.js';
import { ENROLLMENTS_COLLECTION_NAME } from '../../lib/firebase/table/ddl.js';

/**
 * 강의 평균 별점 계산
 * @param {string} lectureId - 강의 식별자(UID)
 * @returns {Promise<number>} - 평균 별점 (소수점 첫째 자리까지)
 */
export async function getRatingByLecture(lectureId) {
  if (!lectureId) return 0;
  try {
    const q = query(
      collection(db, ENROLLMENTS_COLLECTION_NAME),
      where('lectureId', '==', lectureId),
    );
    const snapshot = await getDocs(q);

    let totalRating = 0;
    let reviewCount = 0;

    snapshot.forEach((doc) => {
      const reviews = doc.data()?.reviews;
      if (!Array.isArray(reviews)) return;

      for (const { rating } of reviews) {
        // 0도 유효한 별점이므로 타입 확인
        if (typeof rating === 'number' && Number.isFinite(rating)) {
          totalRating += rating;
          reviewCount += 1;
        }
      }
    });

    if (totalRating === 0) return 0;

    const avg = totalRating / reviewCount;
    return Number(avg.toFixed(1)); // 소수점 1자리 반올림
  } catch (error) {
    console.error('별점 계산 실패:', error);
    return 0;
  }
}
