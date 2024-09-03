import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BannerComponent } from "./LayoutComponent/BannerComponent";
import { BodyComponent } from "./LayoutComponent/BodyComponent";
import { HeaderComponent } from "./LayoutComponent/HeaderComponent";
import { FooterComponent } from "./LayoutComponent/FooterComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100 w-auto">
      <HeaderComponent />
      <main className="flex-fill">
        <BannerComponent />
        <BodyComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
