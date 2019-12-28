export const login = (email, password) => {
  // fake login
  if (email === 'huynh@gmail.com' && password === '123456') {
    return Promise.resolve({username: 'Huynh Phan', token: 'token-123'});
  }
  return Promise.resolve();
}