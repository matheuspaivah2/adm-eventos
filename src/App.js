import "./styles/App.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </>
  );
}

export default App;
