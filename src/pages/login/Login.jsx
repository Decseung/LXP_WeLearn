import React from 'react';

const Login = () => {
  return (
    <main className="main flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="login-container w-full max-w-md">
        <div className="login-header mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">로그인</h1>
          <p className="text-base text-gray-600">학습을 계속하려면 로그인하세요</p>
        </div>

        <div className="login-card rounded-xl bg-white p-8 shadow-lg">
          <form className="login-form space-y-6" action="/api/login" method="POST">
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
              <div className="mb-2 flex items-center justify-between">
                <label for="password" className="block text-sm font-medium text-gray-700">
                  비밀번호 <span className="text-red-500">*</span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  비밀번호 찾기
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="비밀번호를 입력하세요"
                  aria-required="true"
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
            </div>

            {/* <!-- Remember Me Checkbox --> */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900"
              />
              <label for="remember-me" className="ml-2 text-sm text-gray-700">
                로그인 상태 유지
              </label>
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              로그인
            </button>
          </form>
        </div>

        <div className="login-footer mt-6 text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?
            <a href="/signup" className="font-medium text-gray-900 hover:underline">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
