import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground font-poppins text-center p-4">
      <h2 className="text-4xl md:text-5xl text-primary mb-6 font-heading">
        Page Not Found
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        We apologize, but the page you are looking for does not exist. It may
        have been moved or the link might be incorrect.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
      >
        Return to Invitation
      </Link>

      <div className="absolute bottom-10 opacity-20 pointer-events-none">
        <h1 className="font-bonheur text-6xl text-primary">
          Om Ganeshay Namah
        </h1>
      </div>
    </div>
  );
}
