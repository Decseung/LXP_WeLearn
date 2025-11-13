import { useEffect, useState } from 'react';
import { getLectureItemService } from '../../services/lecture/getLectureItemService.js';

export default function useFetchLectureItem(lectureId) {
  const [lectureItem, setLectureItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchLecture = async () => {
      setLoading(true);
      try {
        const item = await getLectureItemService(lectureId);
        if (isMounted) {
          setLectureItem(item ?? null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (lectureId) fetchLecture();

    return () => {
      isMounted = false;
    };
  }, [lectureId]);

  return { lectureItem, loading };
}
