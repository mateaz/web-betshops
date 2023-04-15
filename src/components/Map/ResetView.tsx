import { useMapEvents } from "react-leaflet";
import { NearMeIcon } from "../shared/NearMeIcon";
import { mapConstants } from "../../utils/constants";
import { useSelectedBetshop } from "../../hooks.ts/useSelectedBetshop";

export const ResetView = () => {
  const { setBetshopId } = useSelectedBetshop();
  const map = useMapEvents({
    click() {
      setBetshopId(undefined);
    },
  });

  const handleOnResetView = () => {
    map.fitBounds(mapConstants.bounds);
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
