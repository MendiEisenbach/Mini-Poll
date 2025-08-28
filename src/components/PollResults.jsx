function PollResults({ show, leaders }) {
  if (!show || leaders.length === 0) return null;

  return (
    <div>
      {leaders.length > 1 ? "It's a tie!" : `Leader: ${leaders[0]}`}
    </div>
  );
}

export default PollResults;
