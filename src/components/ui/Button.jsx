import React from 'react';
import cn from 'classnames';

const VARIANTS = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-indigo-600/50',
  secondary:
    'bg-gray-800 text-gray-100 hover:bg-gray-700 active:bg-gray-900 disabled:bg-gray-800/50 border border-gray-700',
  outline:
    'bg-transparent text-gray-100 border border-gray-700 hover:bg-gray-800/50 active:bg-gray-900/50 disabled:opacity-50',
  ghost: 'bg-transparent text-gray-200 hover:bg-white/5 active:bg-white/10 disabled:opacity-50',
  danger: 'bg-rose-600 text-white hover:bg-rose-500 active:bg-rose-700 disabled:bg-rose-600/50',
};

const SIZES = {
  sm: 'h-8 px-3 text-xs rounded-lg',
  md: 'h-10 px-4 text-sm rounded-xl',
  lg: 'h-12 px-5 text-base rounded-2xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  loading = false,
  disabled = false,
  className,
  type = 'button',
  onClick,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 select-none',
        'font-medium transition-colors duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70',
        'disabled:cursor-not-allowed',
        VARIANTS[variant],
        SIZES[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {/* 로딩 스피너 */}
      {loading && (
        <span
          className={cn(
            'inline-block h-4 w-4 animate-spin rounded-full border-2',
            variant === 'outline' || variant === 'ghost'
              ? 'border-gray-500 border-t-transparent'
              : 'border-white/70 border-t-transparent',
          )}
          aria-hidden="true"
        />
      )}

      {/* 왼쪽 아이콘 */}
      {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}

      {/* 라벨 */}
      <span className={cn(loading && 'opacity-80')}>{children}</span>

      {/* 오른쪽 아이콘 */}
      {rightIcon && <span className="inline-flex items-center">{rightIcon}</span>}
    </button>
  );
}
