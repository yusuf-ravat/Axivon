import { RegisterForm } from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-sm text-gray-500">Get started with BusinessOs</p>
      </div>
      <RegisterForm />
    </div>
  );
}
