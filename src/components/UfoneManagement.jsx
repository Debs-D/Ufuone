import { useNavigate } from "react-router-dom";

const UfoneManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-blue-600 to-purple-600">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="p-2 bg-orange-700 hover:bg-orange-500 text-white rounded-full ml-5 mt-3 flex items-center justify-center w-10 h-10"
      >
        <span className="text-lg">&larr;</span>
      </button>

      {/* Coming Soon Text */}
      <div className="flex flex-grow items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Coming Soon...</h1>
      </div>
    </div>
  );
};

export default UfoneManagement;
