export default function FilterButtons({ filter, setFilter }) {
  const isActive = (type) => (filter === type ? "active" : "");

  return (
    <div className="filters">
      <button className={isActive("all")} onClick={() => setFilter("all")}>
        All
      </button>
      <button className={isActive("active")} onClick={() => setFilter("active")}>
        Active
      </button>
      <button
        className={isActive("completed")}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
