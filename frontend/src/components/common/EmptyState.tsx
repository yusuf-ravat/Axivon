export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="p-8 text-center border-2 border-dashed rounded">
      <p className="text-gray-500">{message || 'No items found.'}</p>
    </div>
  );
}
