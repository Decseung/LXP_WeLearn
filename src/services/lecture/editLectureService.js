import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase/config.js';
import { LECTURES_COLLECTION_NAME } from '../../lib/firebase/table/ddl.js';

export const editLectureService = async ({ lectureId, formData }) => {
  try {
    if (!lectureId) throw new Error('lectureId is required');

    // 🔥 lessonId 없는 항목은 새로 생성
    const changedCurriculums = formData.curriculums.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson, index) => ({
        ...lesson,
        lessonId: lesson.lessonId || `lesson-${index}`,
      })),
    }));

    // 🔥 문서 참조 잡기
    const targetRef = doc(db, LECTURES_COLLECTION_NAME, lectureId);

    // 🔥 업데이트
    await updateDoc(targetRef, {
      ...formData,
      curriculum: changedCurriculums,
      lectureUpdatedAt: serverTimestamp(),
    });

    return lectureId;
  } catch (error) {
    console.error('❌ updateLectureService Error:', error);
    throw error;
  }
};
