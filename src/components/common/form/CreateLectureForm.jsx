import React, { useState } from 'react';
import CreateLectureTitle from '../../create-lecture/CreateLectureTitle';
import Input from './Input';
import Textarea from './Textarea';
import SelectOption from './SelectOption';
import CATEGORIRES from '../../../constants/categories';
import CreateCurriculum from '../../create-lecture/CreateCurriculum';
import { useSelector } from 'react-redux';
import CreateThumNail from '../../create-lecture/CreateThumNail';
import { registLectureService } from '../../../services/lecture/registLectureService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLectureForm from '../../../hooks/lectures/useLectureForm';
import CommonForm from '../../mypage/CommonForm.jsx';

function CreateLectureForm() {
  const { user } = useSelector((s) => s.auth);
  const userId = user?.uid || null;
  const userName = user?.userName || null;

  const initialFormData = {
    title: '',
    description: '',
    level: '',
    category: '',
    thumbnailUrl: null,
    content: '',
    curriculum: [
      {
        chapterTitle: '',
        lessons: [{ lessonMediaUrl: '', lessonTitle: '' }],
      },
    ],
  };
  const navigate = useNavigate();

  const handleRegist = async (e, formData) => {
    e.preventDefault();
    try {
      await registLectureService({ userId, userName, formData });
      toast.success('강의 등록이 완료되었습니다.');
      navigate('/mypage/instructor-lectures');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonForm
      mode="create"
      initialFormData={initialFormData}
      onClick={handleRegist}
      cancelNavigate={() => navigate('/mypage/instructor-lectures')}
    />
  );
}

export default CreateLectureForm;
