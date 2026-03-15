import "./App.css";
import { useState } from "react";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div>

      {!showProductList ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <div>
          <h2>Product Listing Page</h2>
        </div>
      )}

    </div>
  );
}

export default App;