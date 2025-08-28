function PollOption({ option, votes, index, onVote, showResults }) {
  return (
    <li>
      {option} {showResults && <span>({votes} votes)</span>}{" "}
      <button onClick={() => onVote(index)}>Vote</button>
    </li>
  );
}

export default PollOption;
