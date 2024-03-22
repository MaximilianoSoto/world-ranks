import { Logo } from "./assets/exportSVG";
import { MainContainer } from "./pages/MainContainer";

function App() {
  return (
    <>
      <main>
        <div className="header">
          <Logo />
        </div>
        <div className="main-container">
          <MainContainer />
        </div>
      </main>
    </>
  );
}

export default App;
