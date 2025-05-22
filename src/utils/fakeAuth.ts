export const fakeLogin = (email: string, password: string): Promise<{ token: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'fake-token-12345' });
    }, 1000);
  });
};
