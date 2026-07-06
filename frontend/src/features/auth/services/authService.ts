import { loginApi } from '../api/login';
import { registerApi } from '../api/register';

export const authService = {
  login: loginApi,
  register: registerApi,
};
