export function ConfirmDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="p-4 border rounded bg-white dark:bg-zinc-800">
      <p className="mb-4">Are you sure you want to proceed?</p>
      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
        <button onClick={onConfirm} className="px-3 py-1 bg-blue-600 text-white rounded">Confirm</button>
      </div>
    </div>
  );
}
