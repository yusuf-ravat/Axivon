import { LoginForm } from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <p className="text-sm text-gray-500">Access your BusinessOs dashboard</p>
      </div>
      <LoginForm />
    </div>
  );
}
