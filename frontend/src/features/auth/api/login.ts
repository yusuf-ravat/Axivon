export async function loginApi(data: any) {
  return { user: { id: '1', email: data.email }, token: 'mock-token' };
}
