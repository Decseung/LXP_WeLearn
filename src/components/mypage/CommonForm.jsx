import React from 'react';
import Input from '../common/form/Input.jsx';
import Textarea from '../common/form/Textarea.jsx';
import SelectOption from '../common/form/SelectOption.jsx';
import CATEGORIRES from '../../constants/categories.js';
import CreateThumNail from '../create-lecture/CreateThumNail.jsx';
import CreateCurriculum from '../create-lecture/CreateCurriculum.jsx';
import useLectureForm from '../../hooks/lectures/useLectureForm.js';

/**
 *
 * @param mode {'edit' | 'create'}
 * @returns {React.JSX.Element}
 * @constructor
 */
const CommonForm = ({ mode, initialFormData, onClick, cancelNavigate }) => {
  const { formData, setFormData, addChapter, deleteChapter, deleteLesson, addLesson } =
    useLectureForm(initialFormData);

  const handleLectureData = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === 'category' ? Number(value) : value,
    }));
  };
  const level = [
    { key: 'begginer', value: '입문', name: '입문' },
    { key: 'low', value: '초급', name: '초급' },
    { key: 'middle', value: '중급', name: '중급' },
    { key: 'high', value: '고급', name: '고급' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" data-page="create-course">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {mode === 'edit' ? '강의 수정' : '새 강의 등록'}
        </h1>
      </div>
      <form className="space-y-6" aria-describedby="form-desc">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="space-y-6 rounded-lg bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">기본 정보</h2>

            <div className="space-y-2">
              <Input
                label="강의 제목"
                id="title"
                type="text"
                aria-required="true"
                placeholder="강의 제목을 입력해주세요"
                value={formData.title}
                onChange={handleLectureData}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                label="강의 설명"
                id="description"
                type="text"
                aria-required="true"
                placeholder="강의에 대한 간략한 설명을 입력해주세요"
                value={formData.description}
                onChange={handleLectureData}
                required
              />
              <Textarea
                label="강의 내용"
                id="content"
                aria-required="true"
                placeholder="강의 내용을 입력해주세요."
                value={formData.content}
                onChange={handleLectureData}
                required
              />
            </div>

            {/* 레벨 선택  */}
            <SelectOption
              label="난이도"
              id="level"
              aria-required="true"
              placeholder="난이도를 선택해주세요."
              options={level}
              value={formData.level}
              onChange={handleLectureData}
              required
            />

            {/* <!-- 1차 카테고리 --> */}
            <SelectOption
              label="카테고리"
              id="category"
              aria-required="true"
              placeholder="카테고리를 선택해주세요."
              options={[...CATEGORIRES]}
              value={formData.category}
              onChange={handleLectureData}
              required
            />
          </section>

          {/* <!-- 우측: 썸네일 --> */}
          <CreateThumNail
            setFormData={setFormData}
            formData={formData}
            thumbnailUrl={formData.thumbnailUrl}
          />
        </div>

        {/* <!-- 커리큘럼: 섹션(아코디언) + 하위 레슨 --> */}
        <section className="rounded-lg bg-white p-6 shadow-sm" aria-labelledby="curi-title">
          <h2 id="curi-title" className="mb-4 text-xl font-semibold text-gray-900">
            커리큘럼 구성
          </h2>
          <CreateCurriculum
            curriculum={formData.curriculum}
            setFormData={setFormData}
            addLesson={addLesson}
            deleteLesson={deleteLesson}
            deleteChapter={deleteChapter}
          />
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              id="addSectionBtn"
              onClick={() => {
                addChapter(setFormData);
              }}
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              + 챕터 추가
            </button>
          </div>
        </section>

        {/* <!-- 하단 스티키 액션 바 --> */}
        <div
          className="sticky bottom-0 -mx-4 flex justify-end gap-3 border-gray-200 bg-gray-100/70 px-4 py-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          role="group"
          aria-label="제출 동작"
        >
          <button
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
            onClick={cancelNavigate}
          >
            취소
          </button>
          <button
            type="submit"
            className="rounded-lg bg-black px-8 py-3 text-lg font-medium text-white hover:bg-gray-800"
            onClick={(e) => onClick(e, formData)}
          >
            {mode === 'edit' ? '수정' : '등록'}하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommonForm;
