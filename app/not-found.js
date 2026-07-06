import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 mx-auto">
        <span className="text-2xl font-bold text-blue-600">!</span>
      </div>
      <h2 className="text-3xl font-bold text-slate-900">404 - Page Not Found</h2>
      <p className="mt-2 text-slate-500 text-sm max-w-xs mx-auto">
        The page you are looking for does not exist or has been moved
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-md hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
