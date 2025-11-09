import React, { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function RequireAuth({ children }) {
  const { initializing, user } = useSelector((s) => s.auth);
  const loc = useLocation();
  if (initializing) return null; // 또는 스피너
  return user ? children : <Navigate to="/login" replace state={{ from: loc }} />;
}

export function RequireUnAuth({ children }) {
  const { initializing, user } = useSelector((s) => s.auth);
  const loc = useLocation();

  console.log('RequireUnAuth 체크');
  console.log('user:', user);
  console.log('loc:', loc);
  console.log('loc.state:', loc.state);

  if (initializing) return null; // 또는 스피너

  // 로그인 후 조건별 페이지로 이동
  if (user) {
    // loc.state?.from 확인 -> 있으면 리다이렉트, 없으면 /lectures 로 보내기
    const redirectTo = loc.state?.from || '/lectures';
    console.log('이미 로그인됨, 리다이렉트:', redirectTo);
    return <Navigate to={redirectTo} replace />;
  }
  return children;
  //return !user ? children : <Navigate to="/" replace state={{ from: loc }} />;
}

export function RequireRole({ children, allow = [], adminIsSuper = true }) {
  const { initializing, user } = useSelector((s) => s.auth);
  const rawRole = useSelector((s) => s.auth.user?.role ?? null);
  const loc = useLocation();

  const norm = (v) => (v ? String(v).trim().toUpperCase() : '');
  const role = norm(rawRole);
  const allowSet = useMemo(() => new Set(allow.map(norm)), [allow]);

  if (initializing) return null;
  if (!user) return <Navigate to="/login" replace state={{ from: loc }} />;

  const isAllowed = (adminIsSuper && role === 'ADMIN') || allowSet.has(role);
  return isAllowed ? children : <Navigate to="/error" replace />;
}
