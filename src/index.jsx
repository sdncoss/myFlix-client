import { createRoot } from 'react-dom/client';
import { MainView } from "../src/components/main-view/main-view";
import React from "react";
//Importing Bootstrap styles
import { Container } from 'react-bootstrap';
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

const MyApp = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyApp />);