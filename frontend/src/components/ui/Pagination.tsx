export function Pagination() {
  return (
    <div className="flex justify-between items-center py-2">
      <button className="px-3 py-1 border rounded">Previous</button>
      <span className="text-sm">Page 1 of 1</span>
      <button className="px-3 py-1 border rounded">Next</button>
    </div>
  );
}
