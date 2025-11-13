import React, { useEffect } from 'react';
import CommonForm from '../../../../components/mypage/CommonForm.jsx';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetchLectureItem from '../../../../hooks/lectures/useFetchLecture.js';
import GlobalLoading from '../../../../components/loading/GlobalLoading.jsx';
import { editLectureService } from '../../../../services/lecture/editLectureService.js';

const EditLecture = () => {
  const { lectureId } = useParams();
  const { user } = useSelector((s) => s.auth);
  const navigate = useNavigate();

  const userId = user?.uid || null;
  const userName = user?.name || null;

  const { loading, lectureItem } = useFetchLectureItem(lectureId);

  useEffect(() => {
    if (!loading && lectureItem) {
      if ((userId ?? '') !== lectureItem.userId) {
        navigate('/403');
      }
    }
  }, [loading, lectureItem, userId]);

  // 데이터 가공 (Null-safe)
  const initialFormData = lectureItem
    ? {
        title: lectureItem.title ?? '',
        description: lectureItem.description ?? '',
        level: lectureItem.level ?? '',
        category: lectureItem.category ?? null,
        thumbnailUrl: lectureItem.thumbnailUrl ?? '',
        content: lectureItem.content ?? '',
        curriculums:
          lectureItem.curriculum?.map((item) => ({
            chapterTitle: item.chapterTitle ?? '',
            lessons:
              item.lessons?.map((lesson) => ({
                ...lesson,
              })) ?? [],
          })) ?? [],
      }
    : null;

  const handleEdit = async (e, formData) => {
    e.preventDefault();
    try {
      await editLectureService({ lectureId, formData });
      toast.success('강의 수정이 완료되었습니다.');
      navigate('/mypage/instructor-lectures');
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <GlobalLoading />;
  return (
    <CommonForm
      mode="edit"
      initialFormData={initialFormData}
      onClick={handleEdit}
      cancelNavigate={() => navigate('/mypage/instructor-lectures')}
    />
  );
};

export default EditLecture;
