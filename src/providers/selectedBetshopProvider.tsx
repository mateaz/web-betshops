import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
} from "react";

export interface SelectedBetshopContextState {
  selectedBetshopId: number | null;
  setSelectedBetshopId: (id: number | null) => void;
}

export const SelectedBetshopContext =
  React.createContext<SelectedBetshopContextState>({
    selectedBetshopId: null,
    setSelectedBetshopId: () => {},
  });

export const SelectedBetshopContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedBetshopId, setSelectedItemId] = useState<number | null>(null);

  const setSelectedBetshopId = useCallback(
    (a: number | null) => {
      setSelectedItemId(a);
    },
    [setSelectedItemId],
  );

  const memoizedValue = React.useMemo(
    () => ({ selectedBetshopId, setSelectedBetshopId }),
    [selectedBetshopId, setSelectedBetshopId],
  );
  return (
    <SelectedBetshopContext.Provider value={memoizedValue}>
      {children}
    </SelectedBetshopContext.Provider>
  );
};

interface SelectedIdContextInterface {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const SelectedIdContext =
  createContext<SelectedIdContextInterface | null>(null);
