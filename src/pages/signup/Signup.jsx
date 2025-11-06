import React from 'react';

const Signup = () => {
  return (
    <main className="main flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="signup-container w-full max-w-md">
        <div className="signup-header mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">회원가입</h1>
          <p className="text-base text-gray-600">LXP와 함께 학습을 시작하세요</p>
        </div>

        <div className="signup-card rounded-xl bg-white p-8 shadow-lg">
          <form className="signup-form space-y-6" action="/api/signup" method="POST">
            {/* <!-- Name Input --> */}
            <div className="form-group">
              <label for="name" className="mb-2 block text-sm font-medium text-gray-700">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
                placeholder="홍길동"
                aria-required="true"
              />
            </div>

            {/* <!-- Email Input --> */}
            <div className="form-group">
              <label for="email" className="mb-2 block text-sm font-medium text-gray-700">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
                placeholder="example@lxp.com"
                aria-required="true"
              />
            </div>

            {/* <!-- Password Input --> */}
            <div className="form-group">
              <label for="password" className="mb-2 block text-sm font-medium text-gray-700">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="8자 이상 입력하세요"
                  aria-required="true"
                  minlength="8"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label="비밀번호 표시/숨기기"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">영문, 숫자, 특수문자 포함 8자 이상</p>
            </div>

            {/* <!-- Password Confirm Input --> */}
            <div className="form-group">
              <label
                for="password-confirm"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password-confirm"
                name="password-confirm"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
                placeholder="비밀번호를 다시 입력하세요"
                aria-required="true"
              />
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              회원가입
            </button>
          </form>
        </div>

        <div className="signup-footer mt-6 text-center">
          <p className="text-sm text-gray-600">
            이미 계정이 있으신가요?
            <a href="/login" className="font-medium text-gray-900 hover:underline">
              로그인
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
