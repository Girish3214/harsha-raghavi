"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 text-neutral-900 font-sans text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Critical Error</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-black/80 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
