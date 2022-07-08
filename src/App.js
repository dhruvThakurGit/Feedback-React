import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Stats from "./components/Stats";
import { Form } from "./components/Form";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text="Feedback UI" />

        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Form />
                <Stats />
                <FeedbackList />
              </div>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <AboutIcon />
      </BrowserRouter>
    </FeedbackProvider>
  );
}



export default App;