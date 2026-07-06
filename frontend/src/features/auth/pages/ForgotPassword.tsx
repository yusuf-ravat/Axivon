export default function ForgotPassword() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Forgot Password</h2>
        <p className="text-sm text-gray-500">Reset code will be sent to your email</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 block w-full rounded border-gray-300 p-2" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
