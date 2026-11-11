import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] flex-col items-center justify-center pt-24 text-center">
      <p className="text-sm tracking-widest text-copper-600">404</p>
      <h1 className="mt-2 text-5xl">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-ink-500">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Button href="/" className="mt-6">
        Back to Home
      </Button>
    </section>
  );
}
