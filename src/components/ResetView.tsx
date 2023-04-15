import { useMap } from "react-leaflet";
import { NearMeIcon } from "./shared/NearMeIcon";

export const ResetView = () => {
  const map = useMap();

  const handleOnResetView = () => {
    map.fitBounds([
      [48.16124, 11.60912],
      [48.12229, 11.52741],
    ]);
  };

  return (
    <button
      type="button"
      className="absolute bottom-[10px] left-[10px] bg-white z-[999] leaflet-bar w-8 h-8"
      onClick={handleOnResetView}
    >
      <NearMeIcon />
    </button>
  );
};
