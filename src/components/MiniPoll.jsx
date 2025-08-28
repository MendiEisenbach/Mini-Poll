import { useState } from "react";
import PollOption from "./PollOption";
import PollResults from "./PollResults";
import AddOptionForm from "./AddOptionForm";
import "./MiniPoll.css";


function MiniPoll() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"]);
  const [votes, setVotes] = useState([0, 0, 0]);
  const [showResults, setShowResults] = useState(false);

  const vote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  const resetVotes = () => {
    setVotes(votes.map(() => 0));
  };

  const addOption = (newOption) => {
    setOptions([...options, newOption]);
    setVotes([...votes, 0]);
  };

  const maxVotes = Math.max(...votes);
  const leaders = options.filter((option, i) => votes[i] === maxVotes);

  return (
    <div>
      <h1>Mini Poll</h1>

      <PollResults show={showResults} leaders={leaders} />

      {options.length === 0 ? (
        <p>No options yet.</p>
      ) : (
        <ul>
          {options.map((option, index) => (
            <PollOption
              key={index}
              option={option}
              votes={votes[index]}
              index={index}
              onVote={vote}
              showResults={showResults}
            />
          ))}
        </ul>
      )}

      <button onClick={() => setShowResults(!showResults)}>
        Toggle Results
      </button>
      <button onClick={resetVotes}>Reset Votes</button>

      <AddOptionForm onAdd={addOption} />
    </div>
  );
}

export default MiniPoll;
