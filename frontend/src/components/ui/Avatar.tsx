export function Avatar({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
      {src ? (
        <img src={src} alt={alt || 'avatar'} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xs font-semibold">{alt ? alt[0] : 'U'}</span>
      )}
    </div>
  );
}
