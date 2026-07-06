export function RegisterForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" className="mt-1 block w-full rounded border-gray-300 p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="mt-1 block w-full rounded border-gray-300 p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input type="password" className="mt-1 block w-full rounded border-gray-300 p-2" />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}
