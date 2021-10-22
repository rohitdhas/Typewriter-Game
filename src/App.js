import "./styles.css";
import { useEffect } from "react";
import Navbar from "./Components/navBar";
import TextField from "./Components/TextField";
import Display from "./Components/Display";
import { fetchAndSetParagraph } from "./helper/quoteHandler";


export default function App() {

  useEffect(() => {
    fetchAndSetParagraph();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Display />
      <TextField />
      <footer>
        <p>Designed and Coded by</p>
        <p id="link">
          <a
            href="https://www.linkedin.com/in/rohit-dhas-26b68215a/"
            target="_blank"
            rel="noreferrer"
          >
            Rohit Dhas
          </a>
        </p>
      </footer>
    </div>
  );
}
