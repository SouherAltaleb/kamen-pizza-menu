import React from "react";
import TVMenuScreen1 from "./TVMenuScreen1";
import TVMenuScreen2 from "./TVMenuScreen2";
import TVMenuScreen3 from "./TVMenuScreen3";
import TVMenuScreen4 from "./TVMenuScreen4";
import TVMenuScreen5 from "./TVMenuScreen5";

export const TVMenu: React.FC = () => {
  // قراءة الرقم من الرابط مثل: http://localhost:5173/?screen=1
  const urlParams = new URLSearchParams(window.location.search);
  const screenId = urlParams.get("screen") || "1";

  switch (screenId) {
    case "1":
      return <TVMenuScreen1 />;
    case "2":
      return <TVMenuScreen2 />;
    case "3":
      return <TVMenuScreen3 />;
    case "4":
      return <TVMenuScreen4 />;
    case "5":
      return <TVMenuScreen5 />;
    default:
      return <TVMenuScreen1 />;
  }
};

export default TVMenu;
