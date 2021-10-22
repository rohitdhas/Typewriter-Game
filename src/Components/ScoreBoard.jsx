const ScoreBoard = ({ scoreData }) => {
  return (
    <div className="score_board">
      <h3>Score Board 🏁</h3>
      <ul>
        {scoreData.length === 0 ? (
          <p>No Data Available!</p>
        ) : (
          scoreData.map((score) => {
            return (
              <li key={Math.random()}>
                <p>✅ Score: {score.score}</p>
                <p>❌ Errors: {score.errorCount}</p>
                <p>⌚ Taken: {score.timeCount} Sec</p>
                <p>🚀 WPM: {score.wpm} /min</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ScoreBoard;
