import AppHeader from "./navigation";
import Home from "../pages/home";
import PageOne from "../pages/page1";
import PageTwo from "../pages/page2";

import { Component } from "react";
import { Routes, Route } from "react-router-dom";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <>
            <AppHeader logo="/Logo.svg" direction="left" />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/page1" element={<PageOne />} />
               <Route path="/page2" element={<PageTwo />} />
               <Route path="*" element={<Home />} />
            </Routes>
         </>
      );
   }
}

export default App;
