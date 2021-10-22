import { useSelector } from "react-redux";

export default function Errors() {
  const { errorCount } = useSelector((state) => state.stats);
  return <div className="error_count">{errorCount} (Errs)❌</div>;
}
