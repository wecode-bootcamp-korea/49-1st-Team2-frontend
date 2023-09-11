import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/reset.scss";
import "./styles/common.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
global.Dong = "1111";
global.Hyun = "2222";
global.Eun = "3333";
root.render(<Router />);
