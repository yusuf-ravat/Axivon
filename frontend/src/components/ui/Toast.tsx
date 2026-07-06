export function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded shadow-lg text-sm">
      {message}
    </div>
  );
}
