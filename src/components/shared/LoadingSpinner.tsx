import React from "react";
import { ClipLoader } from "react-spinners";

interface SidebarProps {
  text: string | undefined;
}

export const LoadingSpinner: React.FC<SidebarProps> = ({ text }) => {
  return (
    <div className="text-center h-full w-full flex flex-col flex-wrap justify-center items-center">
      <ClipLoader
        color="blue"
        loading
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {text && <p className="text-darkgrey text-xs">{text}</p>}
    </div>
  );
};
