import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ProfilePage from "./pages/profilePage/ProfilePage";
import LoginPage from "./pages/loginPage/LoginPage";
import IndexPage from "./pages/indexPage/IndexPage";
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/searchPage/SearchPage";

export default function App() {
  console.log("app render");
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="user/:userName" element={<ProfilePage />} />
            <Route path="/search/*" exact element={<SearchPage />} />

            {/* <Route path="user/:userName/animelist" element={<ProfilePage />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
