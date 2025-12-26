export default function FilterButtons({ filter, setFilter }) {
  const buttonStyle = (type) => ({
    marginRight: "8px",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: filter === type ? "#2563eb" : "#f1f5f9",
    color: filter === type ? "#fff" : "#000",
  });

  return (
    <div style={{ margin: "15px 0" }}>
      <button style={buttonStyle("all")} onClick={() => setFilter("all")}>
        All
      </button>

      <button style={buttonStyle("active")} onClick={() => setFilter("active")}>
        Active
      </button>

      <button
        style={buttonStyle("completed")}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
