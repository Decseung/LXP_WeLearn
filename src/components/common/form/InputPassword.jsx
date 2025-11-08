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
 * @property {'text'|'email'|'password'} [type='text']
 */
export default function Input({
  name,
  id,
  label = '이름',
  value = '',
  onChange,
  required = true,
  placeholder = '홍길동',
  className = '',
  type = 'text',
}) {
  const inputId = id || name;
  const [showPw, setShowPw] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && showPw ? 'text' : type;

  return (
    <div className="relative">
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-gray-700">
        {label} {required && <Required />}
      </label>

      <input
        type={inputType}
        id={inputId}
        name={name}
        required={required}
        aria-required={required ? 'true' : 'false'}
        value={value}
        onChange={onChange}
        className={[
          'w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors',
          'placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none',
          className,
          isPassword ? 'pr-10' : '',
        ].join(' ')}
        placeholder={placeholder}
        autoComplete={isPassword ? 'current-password' : undefined}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPw((v) => !v)}
          className="absolute right-3 bottom-[15px] text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label={showPw ? '비밀번호 숨기기' : '비밀번호 표시'}
          aria-pressed={showPw}
          title={showPw ? '비밀번호 숨기기' : '비밀번호 표시'}
        >
          {showPw ? (
            // eye-off
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3l18 18M9.88 9.88A3 3 0 0112 9c1.657 0 3 1.343 3 3a3 3 0 01-.88 2.12M7.05 7.05C5.24 8.2 3.78 9.91 2.458 12 3.732 16.057 7.522 19 12 19c1.52 0 2.96-.34 4.24-.95M14.12 14.12A3 3 0 0112 15c-1.657 0-3-1.343-3-3 0-.53.138-1.027.38-1.46"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5c4.478 0 8.268 2.943 9.542 7a11.94 11.94 0 01-2.308 3.592"
              />
            </svg>
          ) : (
            // eye
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
