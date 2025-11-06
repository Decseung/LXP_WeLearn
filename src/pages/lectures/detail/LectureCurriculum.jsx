function LectureCurriculum({ curriculum = [] }) {
  return (
    <div className="lecture-curriculum border-t border-gray-200 pt-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">커리큘럼</h2>

      <div className="space-y-6">
        {curriculum.map((chapter, index) => (
          <div key={index} className="rounded-lg border border-gray-200">
            <div className="bg-gray-50 px-4 py-3 font-semibold">
              {chapter.chapterTitle}
              <span className="ml-2 text-sm text-gray-500">({chapter.lessons?.length || 0}강)</span>
            </div>
            <div className="divide-y divide-gray-200">
              {chapter.lessons?.map((l) => (
                <div key={l.lessonId} className="flex items-center justify-between px-4 py-3">
                  <div className="truncate">{l.lessonTitle}</div>
                  <div className="text-sm text-gray-500">미리보기</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LectureCurriculum;
