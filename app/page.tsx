export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">ppl-web</h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
        Next.js boilerplate is ready. Start building your pages and components in
        the <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">app/</code> directory.
      </p>
      <div className="mt-8">
        <a
          className="inline-flex rounded-md bg-foreground px-4 py-2 text-background transition-colors hover:opacity-90"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js Docs
        </a>
      </div>
    </main>
  );
}
