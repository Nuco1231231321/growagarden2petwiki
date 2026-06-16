import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 text-center">
      <h1 className="text-6xl font-extrabold text-[#4CAF50]">404</h1>
      <p className="mt-4 text-lg text-[#777]">Page not found. Maybe you&apos;re looking for one of these?</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {[{t:"Pets",h:"/pets"},{t:"Codes",h:"/codes"},{t:"Wheelbarrow",h:"/wheelbarrow"},{t:"Beginner Guide",h:"/beginner-guide"},{t:"Seeds",h:"/seeds"},{t:"Gears",h:"/gears"}].map((l) => (
          <Link key={l.h} href={l.h} className="rounded-xl border-2 border-[#81C784] px-4 py-2 text-sm font-semibold text-[#4CAF50] hover:bg-[#E8F5E9] transition-colors">{l.t}</Link>
        ))}
      </div>
      <Link href="/" className="mt-6 inline-block text-sm text-[#4CAF50] font-semibold hover:underline">← Back to Home</Link>
    </main>
  );
}
