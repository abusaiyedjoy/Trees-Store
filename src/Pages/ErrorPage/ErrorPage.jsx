import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
      <section className="flex items-center min-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl  text-[#d1b371]">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldnot find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <div className="flex gap-5 justify-center items-center">
            <Link to="/"
              rel="noopener noreferrer"
              href="#"
              className="bg-[#d1b371] hover:bg-[#c8a65a] hover:shadow-md px-6 py-2 flex justify-center items-center rounded-full text-xl font-bold text-white"
            >
              Back to homepage
            </Link>
            <Link to="/" className="bg-[#d1b371] hover:bg-[#c8a65a] hover:shadow-md px-6 py-2 flex justify-center items-center rounded-full text-xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ErrorPage;
