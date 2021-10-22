import { useSelector } from "react-redux";

export default function Wpm() {
  const { wpm } = useSelector((state) => state.stats);

  return <div className="wordsPerMinuite">{wpm} (WPM)🚀</div>;
}
