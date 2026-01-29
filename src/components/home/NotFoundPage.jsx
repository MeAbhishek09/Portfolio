import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeftCircle } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 text-center">
      <h1 className="text-[6rem] font-bold text-indigo-600 leading-none mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or might have been moved.
        Don’t worry — let’s get you back on track.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition"
        >
          <ArrowLeftCircle size={20} />
          Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
        >
          <Home size={20} />
          Go Home
        </button>
      </div>

      <p className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Abhishek’s Portfolio
      </p>
    </section>
  );
};

export default NotFoundPage;
