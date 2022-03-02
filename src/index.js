import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ChatProvider } from "./contexts";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
