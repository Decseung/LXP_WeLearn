import CATEGORIES from '../constants/categories.js';

/** category id(숫자), key(문자열) => name 반환 */
export function getCategoryName(categoryValue) {
  if (categoryValue === undefined || categoryValue === null) return '기타';

  const str = String(categoryValue).toLowerCase();
  const num = Number(categoryValue);

  const matched = CATEGORIES.find((c) => c.id === num || c.key.toLowerCase() === str);

  return matched ? matched.name : '기타';
}
