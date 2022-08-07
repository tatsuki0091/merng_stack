import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import ApolloServer from "./ApolloProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(ApolloServer);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
