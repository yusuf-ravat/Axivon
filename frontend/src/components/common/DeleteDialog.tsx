export function DeleteDialog({ onDelete, onCancel }: { onDelete: () => void; onCancel: () => void }) {
  return (
    <div className="p-4 border border-red-200 rounded bg-red-50 dark:bg-red-950/20">
      <p className="mb-4 text-red-700 dark:text-red-300">Are you sure you want to delete this item? This action cannot be undone.</p>
      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
        <button onClick={onDelete} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
      </div>
    </div>
  );
}
