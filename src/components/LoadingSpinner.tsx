/**
 * Loading component for Suspense boundaries
 * Matches the brutalist aesthetic of the portfolio
 */
export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Brutalist loading animation */}
        <div className="inline-block">
          <div className="flex gap-2 mb-6">
            <div className="w-8 h-8 bg-[#FF6B00] border-4 border-white animate-pulse"></div>
            <div className="w-8 h-8 bg-[#FFD600] border-4 border-white animate-pulse [animation-delay:150ms]"></div>
            <div className="w-8 h-8 bg-[#6BCF7F] border-4 border-white animate-pulse [animation-delay:300ms]"></div>
          </div>
        </div>
        <p className="text-white font-mono text-sm tracking-[0.3em]">LOADING...</p>
      </div>
    </div>
  );
}

/**
 * Inline loading state for smaller components
 */
export function InlineLoader() {
  return (
    <div className="flex items-center justify-center gap-2 p-8">
      <div className="w-4 h-4 bg-[#FF6B00] border-2 border-black animate-pulse"></div>
      <div className="w-4 h-4 bg-[#FFD600] border-2 border-black animate-pulse [animation-delay:150ms]"></div>
      <div className="w-4 h-4 bg-[#6BCF7F] border-2 border-black animate-pulse [animation-delay:300ms]"></div>
    </div>
  );
}
