import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Welcome! Choose a section:</h1>
      <div className="flex gap-6">
        <Link
          href="/dashboard"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Dashboard
        </Link>
        {/* <Link
          href="/landing"
          className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Landing
        </Link> */}
      </div>
    </div>
  );
}
