import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./Pages/PageHome";
import Contact from "./Components/Contact";
import Search from "./Components/Search";
import PageNotification from "./Pages/PageNotification";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import PageSignup from "./Pages/PageSignup";
import PageOrder from "./Pages/PageOrder";
import PageInformation from "./Pages/PageInformation";
import PageHistory from "./Pages/PageHistory";
import PageAdmin from "./Pages/PageAdmin";
import PageProduct from "./Pages/PageProduct";
import { DataDigitalSelling } from "./Data/DataHome/DataSelling/DataDigitalSelling";
import PageDetail1 from "./Pages/PageDetail1";
import { DataDigitalFamous1 } from "./Data/DataHome/DataFamous1/DataDigitalFamous1";
import PageDetail2 from "./Pages/PageDetail2";
import { DataDigitalFamous2 } from "./Data/DataHome/DataFamous2/DataDigitalFamous2";
import { ThemeContext } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import PageCart from "./Pages/PageCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageComplete from "./Pages/PageComplete";
import PageSuccess from "./Pages/PageSuccess";

const theme = createTheme();
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="app">
            <Contact />
            <Search />
            <Menu />
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/notification" element={<PageNotification />} />
              <Route path="/signup" element={<PageSignup />} />
              <Route path="/admin" element={<PageAdmin />} />
              <Route path="/order" element={<PageOrder />} />
              <Route path="/information" element={<PageInformation />} />
              <Route path="/history" element={<PageHistory />} />
              <Route path="/cart" element={<PageCart />} />
              <Route path="/payment" element={<PageComplete />} />
              <Route path="/success" element={<PageSuccess />} />
              <Route path="/PageProduct/:id" element={<PageProduct DataDigitalSelling={DataDigitalSelling} />}/>
              <Route path="/PageDetail1/:id" element={<PageDetail1 DataDigitalFamous1={DataDigitalFamous1} />}/>
              <Route path="/PageDetail2/:id" element={<PageDetail2 DataDigitalFamous2={DataDigitalFamous2} />}/>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
