import React from "react";

interface RefreshPageProps {
  onClick: () => void;
}

export const RefreshPage: React.FC<RefreshPageProps> = ({ onClick }) => {
  return (
    <div className="relative h-screen w-screen text-center flex flex-col flex-wrap justify-center items-center">
      <p className="font-medium text-lg">Something went wrong!</p>
      <button
        onClick={onClick}
        type="button"
        className="bg-red-600 px-4 py-2 rounded-full text-white mt-2 font-medium text-base hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
};
