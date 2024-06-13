import AppHeader from "../header/header";

export default function AppFooter() {
   return (
      <footer className="min-h-[150px] text-black text-xs p-5">
         <AppHeader direction="center" logo="/black-mini-logo.svg" />
         <img
            className="mb-0 mr-auto ml-auto mt-9"
            src="/black-logo.png"
            alt="logo"
         />
      </footer>
   );
}
