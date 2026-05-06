import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-black text-[#244d3f]">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-3 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-[#244d3f] text-white font-semibold rounded-2xl transition-transform duration-150 active:scale-95"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;