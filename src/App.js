import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
import { Container } from "./styles/app";
import { useBackgroundColor } from "./providers/BackgroundColor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const { color } = useBackgroundColor();
  
  return (
    <>
      <GlobalStyle />

      <Container color={color} className="App-header">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />

        <Menu />
        <Routes />
      </Container>
    </>
  );
}

export default App;
