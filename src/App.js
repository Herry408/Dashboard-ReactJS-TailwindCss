import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponents from "./components/SidebarComponents";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div class="relative min-h-screen flex">
        <SidebarComponents />
        <div class="p-10">
          <Content />
        </div>
      </div>
    </div>
  );
}
export default App;
