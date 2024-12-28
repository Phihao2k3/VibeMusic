// src/context/SelectedTrackContext.js
import React, { createContext, useState } from "react";

export const SelectedTrackContext = createContext();

export const SelectedTrackProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [listTrack, setListTrack] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <SelectedTrackContext.Provider
      value={{
        selectedTrack,
        setSelectedTrack,
        listTrack,
        setListTrack,
        currentTrack,
        setCurrentTrack,
      }}
    >
      {children}
    </SelectedTrackContext.Provider>
  );
};
