export const fakeLogin = (email: string, password: string): Promise<{ token: string }> => {
  
    if (!email.trim() || !password.trim()) {
    return Promise.reject(new Error("Email and password are required"));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'fake-token-12345' });
    }, 1000);
  });
};
