import { db } from '../../lib/firebase/config';
import { collection, getCountFromServer, getDocs, query, where } from 'firebase/firestore';
import { LECTURELIST_COLLECTION_NAME } from '../../lib/firebase/table/ddl';
import { buildLectureQuery } from '../../utils/filtering';
import { ITEMS_PER_PAGE } from '../../constants/paginationConstants';

export const getLectures = async ({
  category = 'all',
  sort = 'latest',
  limitCount = ITEMS_PER_PAGE,
  startAfterDoc = null,
}) => {
  try {
    const baseRef = collection(db, LECTURELIST_COLLECTION_NAME);

    // 실제 데이터 쿼리
    const dataQuery = buildLectureQuery(baseRef, category, sort, startAfterDoc, limitCount);
    const querySnapshot = await getDocs(dataQuery);
    const lectures = querySnapshot.docs.map((doc) => ({
      lectureId: doc.id,
      ...doc.data(),
    }));

    // 조건에 맞는 전체 개수 쿼리 (
    const countQuery = buildLectureQuery(baseRef, category, sort, null, null, true); // count용 모드
    const snapshotCount = await getCountFromServer(countQuery);

    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1] || null;

    return {
      lectures,
      total: snapshotCount.data().count, // 필터 조건 반영된 총 개수
      lastDoc,
    };
  } catch (error) {
    console.error('[getLectures] Firestore query failed:', error);
    return { lectures: [], total: 0, lastDoc: null };
  }
};

/**
 * Firestore의 lectureId 필드로 문서를 조회하기
 * @param {string} lectureId - 강의의 lectureId 필드 값
 * @returns {Object|null} 강의 객체
 */

export const getLectureItem = async (lectureId) => {
  try {
    const baseRef = collection(db, LECTURELIST_COLLECTION_NAME);
    const q = query(baseRef, where('lectureId', '==', lectureId));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log(`강의 ID를 찾을 수 없음: ${lectureId}`);
      return null;
    }

    // Firestore 문서 첫 번째만 반환
    const docSnap = querySnapshot.docs[0];
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error('[getLectureItem] Firestore query failed:', error);
    return null;
  }
};
