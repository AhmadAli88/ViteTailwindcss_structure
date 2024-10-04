import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./Navigation/RouterConfig";
import { LoaderPageWithoutBG } from "./assets/genericComponents/Loader";

function App() {
  return (
    <Suspense fallback={<LoaderPageWithoutBG />}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
