import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ClipLoader } from "react-spinners";

interface SidebarProps {
  text: string | undefined;
}

export const LoadingSpinner: React.FC<SidebarProps> = ({ text }) => {
  return (
    <div className="text-center">
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
