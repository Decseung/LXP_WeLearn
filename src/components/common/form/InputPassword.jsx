import React, { useState } from 'react';
import Required from '../../ui/Required.jsx';

/**
 * @typedef {Object} InputProps
 * @property {string} name
 * @property {string} [id]
 * @property {string} [label='이름']
 * @property {string} [value='']
 * @property {(e: import('react').ChangeEvent<HTMLInputElement>) => void} onChange
 * @property {boolean} [required=true]
 * @property {string} [placeholder='홍길동']
 * @property {string} [className='']
 */
export default function InputPassword({
  name,
  id,
  label,
  value,
  onChange,
  required = true,
  placeholder,
  className,
}) {
  const inputId = id || name;
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="relative">
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-gray-700">
        {label} {required && <Required />}
      </label>

      {/* 핵심: type을 상태로 토글 */}
      <input
        type={showPw ? 'text' : 'password'}
        id={inputId}
        name={name}
        required={required}
        aria-required={required ? 'true' : 'false'}
        value={value}
        onChange={onChange}
        className={[
          'peer w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors',
          'placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none',
          className,
          'pr-10', // 버튼 공간
        ].join(' ')}
        placeholder={placeholder}
        autoComplete="current-password"
      />

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()} // 입력창 포커스 유지
        onClick={() => setShowPw((v) => !v)}
        className="absolute top-1/2 right-3 rounded p-1 text-gray-400 transition-colors hover:text-gray-600 focus:outline-none"
        aria-label={showPw ? '비밀번호 숨기기' : '비밀번호 표시'}
        aria-pressed={showPw}
        title={showPw ? '비밀번호 숨기기' : '비밀번호 표시'}
      >
        {/* 아이콘 토글: eye / eye-off */}
        {showPw ? (
          // eye-off
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.65 10.65 0 012.62-4.17M9.88 9.88a3 3 0 104.24 4.24"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.1 6.1L18 18" />
          </svg>
        ) : (
          // eye
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
