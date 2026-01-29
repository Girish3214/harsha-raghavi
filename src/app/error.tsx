"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground font-poppins text-center p-4">
      <h2 className="text-3xl md:text-4xl text-primary mb-4 font-heading">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground mb-8">
        We apologize for the inconvenience.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-2 bg-secondary text-secondary-foreground border border-primary/20 rounded-full hover:bg-secondary/80 transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
