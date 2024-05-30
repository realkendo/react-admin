// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { ColorModeContext, useMode } from "./theme";
// import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

// custom components
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                {/* <Route path='/invoices' element={<Invoices />} /> */}
                {/* <Route path='/form' element={<Form />} /> */}
                {/* <Route path='/bar' element={<Bar />} /> */}
                {/* <Route path='/pie' element={<Pie />} /> */}
                {/* <Route path='/line' element={<Line />} /> */}
                {/* <Route path='/faq' element={<FAQ />} /> */}
                {/* <Route path='/geography' element={<Geography />} /> */}
                {/* <Route path='/calendar' element={<Calendar />} />  */}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
