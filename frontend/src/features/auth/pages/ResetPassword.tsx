export default function ResetPassword() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Reset Password</h2>
        <p className="text-sm text-gray-500">Enter a new secure password</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input type="password" className="mt-1 block w-full rounded border-gray-300 p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input type="password" className="mt-1 block w-full rounded border-gray-300 p-2" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Update Password
        </button>
      </form>
    </div>
  );
}
