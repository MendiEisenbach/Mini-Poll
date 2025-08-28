import { useState } from "react";

function AddOptionForm({ onAdd }) {
  const [newOption, setNewOption] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!newOption.trim()) {
      setError("Please enter a name.");
      return;
    }
    onAdd(newOption);
    setNewOption("");
    setError("");
  };

  return (
    <div>
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="New option"
      />
      <button onClick={handleSubmit}>Add</button>
      {error && <div id="eror">{error}</div>}
    </div>
  );
}

export default AddOptionForm;
