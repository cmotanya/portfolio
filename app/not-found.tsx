import Link from "next/link";

export const runtime = "edge";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-center text-gray-300">
      <div className="mb-8">
        <h1 className="text-9xl font-bold">404</h1>
        {/* <p className="text-4xl font-semibold">Page Not Found</p> */}
      </div>
      <div className="mb-12">
        <p className="text-xl">
          The page you are looking for could not be found.
        </p>
      </div>
      <Link href="/">
        <button className="rounded-lg bg-gray-800/50 px-6 py-3 text-lg font-semibold text-gray-400 transition duration-300 ease-in-out hover:bg-gray-800">
          Return to HomePage
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
