import CATEGORIES from '../constants/categories.js';

/** category가 id(숫자)거나 key(문자열)여도 안전하게 name 반환 */
export function getCategoryName(categoryValue) {
  if (categoryValue === undefined || categoryValue === null) return '기타';

  // 카테고리가 숫자이거나
  const str = String(categoryValue).toLowerCase();
  const num = Number(categoryValue);

  const matched = CATEGORIES.find((c) => c.id === num || c.key.toLowerCase() === str);

  return matched ? matched.name : '기타';
}
