export async function registerApi(data: any) {
  return { success: true, user: { id: '1', email: data.email } };
}
