import AppHeader from "../header/header";
import AppFooter from "../footer/footer";
import AppList from "../coffeeL-list/coffeeList";
// import AppAbout from "../appAbout/appAbout";

import "./App.css";
import { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cards: [
            {
               name: "Solimo Coffee Beans",
               weight: "2 kg",
               price: 10.73,
               src: "/list1.png",
            },
            {
               name: "Presto Coffee Beans",
               weight: "1 kg",
               price: 15.6,
               src: "/list2.png",
            },
            {
               name: "AROMISTICO Coffee",
               weight: "2 kg",
               price: 20.5,
               src: "/list3.png",
            },
            {
               name: "AROMISTISSOLATTE Coffee",
               weight: "1 kg",
               price: 12.76,
               src: "/list4.png",
            },
         ],
         // descrs: [
         //    {
         //       title: "About Us",
         //       text: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.",
         //    },
         //    {
         //       title: "About our beans",
         //       text: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
         //    },
         //    {
         //       title: "About our goods",
         //       text: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
         //    },
         // ],
      };
   }

   render() {
      return (
         <>
            <section className="items-center mr-auto ml-auto text-white text-center w-full min-h-[640px] bg-cover bg-no-repeat p-8 bg-[url('/main-bg.png')]">
               <AppHeader logo="/Logo.svg" direction="left" />
               <h1 className="text-[40px] mb-4 mt-24">
                  Everything You Love About Coffee
               </h1>
               <div className="flex justify-center">
                  <img src="/Logo2.svg" alt="logo" />
               </div>
               <h2 className="text-[24px] mt-4 mb-4">
                  We makes every day full of energy and taste <br />
                  Want to try our beans?
               </h2>
               <button className="bg-#fff text-white-700 font-semibold hover:text-white py-2 px-4 border border-#ffffff-500 hover:border-transparent rounded">
                  More
               </button>
            </section>
            {/* <AppAbout data={this.state.descrs} /> */}
            <section className="text-center w-full min-h-[500px] bg-cover bg-no-repeat p-8 bg-[url('/mramar-bg.png')] pt-16 pb-16">
               <h2 className="text-[24px] mb-9">Our best</h2>
               <AppList
                  className="flex justify-between"
                  data={this.state.cards}
                  countOfItems={3}
               />
            </section>
            <AppFooter />
         </>
      );
   }
}

export default App;
