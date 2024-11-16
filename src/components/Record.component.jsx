function Record({ bottle, duration, time }) {
  return (
    <article>
      <header>
        <h3>{bottle}</h3>
        <p>
          Duration: <time>{duration}</time>
        </p>
      </header>
      <p>
        Time: <time>{time}</time>{" "}
      </p>
    </article>
  );
}

export default Record;
