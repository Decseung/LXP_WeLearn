import { db } from '../../lib/firebase/config';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { LECTURELIST_COLLECTION_NAME } from '../../lib/firebase/table/ddl';

/**
 *
 * @returns {Array}
 * 전체 강의 목록 [{
 * lectureId: string,
 * title: string,
 * description: string,
 * content: string,
 * thumbnailUrl: string,
 * userId: string,
 * userName: string,
 * category: [string,],
 * level: string,
 * studentCount: number,
 * lectureCreatedAt: string,
 * curriculum: [{}]
 * }]
 */

export const getLectures = async (category, sort = 'desc') => {
  try {
    const baseRef = collection(db, LECTURELIST_COLLECTION_NAME);
    let q;

    // ✅ 1️⃣ 카테고리 필터
    if (category && category !== 'all') {
      q = query(baseRef, where('category', '==', Number(2)));
    } else {
      q = query(baseRef);
    }

    // ✅ 2️⃣ 정렬 옵션
    switch (sort) {
      case 'popular':
        q = query(q, orderBy('views', 'desc'));
        break;
      case 'rating':
        q = query(q, orderBy('rating', 'desc'));
        break;
      case 'students':
        q = query(q, orderBy('studentCount', 'desc'));
        break;
      default:
        q = query(q, orderBy('lectureCreatedAt', 'desc'));
        break;
    }

    const querySnapshot = await getDocs(q);

    const lectures = querySnapshot.docs.map((doc) => doc.data());

    return lectures;
  } catch (error) {
    console.log(`message: ${error}`);
  }
};
