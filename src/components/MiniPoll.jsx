import { useState } from "react";

function MiniPoll() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"]);
  const [votes, setVotes] = useState([0, 0, 0]);
  const [showResults, setShowResults] = useState(false);
  const [newOption, setNewOption] = useState("");
  const [error, setError] = useState("");

  const vote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  const resetVotes = () => {
    setVotes(votes.map(() => 0));
  };

  const addOption = () => {
    if (!newOption.trim()) {
      setError("Please enter a name.");
      return;
    }
    setOptions([...options, newOption]);
    setVotes([...votes, 0]);
    setNewOption("");
    setError("");
  };

  const maxVotes = Math.max(...votes);
  const leaders = options.filter((_, i) => votes[i] === maxVotes);

  return (
    <div>
      <h1>Mini Poll</h1>

      {showResults && options.length > 0 && (
        <div>
          {leaders.length > 1 ? "It's a tie!" : `Leader: ${leaders[0]}`}
        </div>
      )}

      {options.length === 0 ? (
        <p>No options yet.</p>
      ) : (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {option} {showResults && <span>({votes[index]} votes)</span>}{" "}
              <button onClick={() => vote(index)}>Vote</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => setShowResults(!showResults)}>
        Toggle Results
      </button>
      <button onClick={resetVotes}>Reset Votes</button>

      <div>
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="New option"
        />
        <button onClick={addOption}>Add</button>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default MiniPoll;
