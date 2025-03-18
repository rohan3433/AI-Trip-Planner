import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">AI Trip Planner</h1>
      <p className="text-lg text-gray-700 mt-4">
        Plan your trips smarter with AI
      </p>
      <div className="mt-6">
        <Link
          to="/signup"
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
