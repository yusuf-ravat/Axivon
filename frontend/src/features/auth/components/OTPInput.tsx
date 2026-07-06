export function OTPInput() {
  return (
    <div className="flex gap-2 justify-center">
      {[1, 2, 3, 4, 5, 6].map((idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center text-lg border rounded"
        />
      ))}
    </div>
  );
}
