export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'core' | 'pro' | 'elite';
  nextBilling: string;
  featuresUsed: string;
}

export const AUTH_STORAGE_KEY = 'bayfit_auth';
export const USER_STORAGE_KEY = 'bayfit_user';

export function getStoredAuth(): { isLoggedIn: boolean; user: User | null } {
  try {
    const isLoggedIn = localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    const userStr = localStorage.getItem(USER_STORAGE_KEY);
    const user = userStr ? JSON.parse(userStr) : null;
    return { isLoggedIn, user };
  } catch {
    return { isLoggedIn: false, user: null };
  }
}

export function setStoredAuth(user: User) {
  localStorage.setItem(AUTH_STORAGE_KEY, 'true');
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredAuth() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
}

export function mockLogin(email: string, password: string): User {
  // Mock authentication - in real app this would call an API
  const user: User = {
    id: '1',
    name: 'Alex Johnson',
    email: email,
    plan: 'pro',
    nextBilling: 'Feb 15, 2024',
    featuresUsed: '8/12'
  };
  
  setStoredAuth(user);
  return user;
}

export function mockSignup(name: string, email: string, password: string, plan: 'core' | 'pro' | 'elite'): User {
  // Mock registration - in real app this would call an API
  const user: User = {
    id: Date.now().toString(),
    name: name,
    email: email,
    plan: plan,
    nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    featuresUsed: '0/12'
  };
  
  setStoredAuth(user);
  return user;
}
