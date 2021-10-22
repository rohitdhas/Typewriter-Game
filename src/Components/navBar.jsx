import Timer from "./timer";
import Errors from "./Errors";
import Wpm from "./wpm";

const Navbar = () => {
  return (
    <nav>
      <Timer />
      <Errors />
      <Wpm />
    </nav>
  );
};

export default Navbar;
