import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase/config.js';
import { ENROLLMENTS_COLLECTION_NAME } from '../../lib/firebase/table/ddl.js';

/**
 * 특정 강의의 리뷰 개수를 반환
 * @param {string} lectureId - 강의 식별자(예: "kU6EnjG5GdBqiIJn6MWU")
 * @returns {Promise<number>} - 총 리뷰 개수
 */
export async function getReviewCountByLecture(lectureId) {
  if (!lectureId) return 0;
  try {
    const q = query(
      collection(db, ENROLLMENTS_COLLECTION_NAME),
      where('lectureId', '==', lectureId),
    );
    const snapshot = await getDocs(q);

    let totalReview = 0;

    snapshot.forEach((doc) => {
      const reviews = doc.data()?.reviews;
      if (Array.isArray(reviews)) {
        totalReview += reviews.length;
      }
    });

    return totalReview;
  } catch (error) {
    console.error('리뷰 개수 불러오기 실패:', error);
    return 0;
  }
}
