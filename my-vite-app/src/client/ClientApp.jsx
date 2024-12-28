import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ClientLayout from "./components/ClientLayout";
import Album from "./pages/Album";
import Library from "./pages/Library";
import { useAuth } from "../useAuth";
import SearchPage from "./pages/searchPage";
import { SelectedTrackProvider } from "../context/SelectedTrackContext";

function ClientApp({ code }) {
  const accessToken = useAuth(code);
  console.log(accessToken);

  return (
    // Bọc toàn bộ ứng dụng với SelectedTrackProvider
    <SelectedTrackProvider>
      <ClientLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/album" element={<Album />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </ClientLayout>
    </SelectedTrackProvider>
  );
}

export default ClientApp;
