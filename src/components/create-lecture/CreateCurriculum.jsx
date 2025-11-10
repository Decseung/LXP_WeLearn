import React from 'react';
import Input from '../common/form/Input';
import { X } from 'lucide-react';

function CreateCurriculum({ curriculum, setFromData }) {
  return (
    <>
      <div id="curriculumList" className="space-y-4" aria-live="polite">
        {/* <!-- 섹션 1 --> */}
        <div className="rounded-lg border border-gray-200" open>
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
            <span className="text-gray-70 min-w-4 items-center justify-center pt-6 font-semibold">
              1.
            </span>

            <Input
              label="챕터 제목"
              name="chapterTitle"
              id="chapterTitle"
              type="text"
              required
              aria-required="true"
              placeholder="챕터 제목을 입력해주세요."
            />
            <button
              type="button"
              className="w-13 px-3 py-1 pt-6 text-sm font-medium text-red-600 hover:text-red-700"
              aria-label="섹션 삭제"
            >
              <X size={24} color="#ff0000" />
            </button>
          </div>
          <div className="space-y-3 p-4">
            <ol className="space-y-2">
              <li className="grid grid-cols-20 items-center gap-2">
                <Input
                  name="lessonTitle"
                  id="lessonTitle"
                  label="레슨 제목"
                  required
                  placeholder="예: 코딩이란?"
                  type="text"
                  additionalProperties="col-span-17"
                />
                <Input
                  name="mediaRuningTime"
                  id="mediaRuningTime"
                  lable="시간"
                  type="text"
                  placeholder="00:00"
                  required
                  aria-required="true"
                  label="영상 시간"
                  additionalProperties="col-span-2"
                />
                <button
                  type="button"
                  className="px-3 py-1 pt-6 text-sm font-medium text-red-600 hover:text-red-700"
                  aria-label="레슨 삭제"
                >
                  <X size={24} color="#ff0000" />
                </button>
              </li>
            </ol>
            <button
              type="button"
              className="add-lesson rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              + 레슨 추가
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          id="addSectionBtn"
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          + 섹션 추가
        </button>
      </div>
    </>
  );
}

export default CreateCurriculum;
