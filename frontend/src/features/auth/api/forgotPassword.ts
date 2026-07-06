export async function forgotPasswordApi(email: string) {
  return { success: true, message: `Reset link sent to ${email}` };
}
