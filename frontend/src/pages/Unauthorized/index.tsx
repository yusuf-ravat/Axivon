export default function Unauthorized() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">403 - Unauthorized</h1>
      <p className="text-gray-600 dark:text-gray-400">You do not have permission to view this page.</p>
    </div>
  );
}
