import { formatTime, getFormatedDate, getFormatedTime } from "../utils";

function Records({ records }) {
  if (records == null) {
    return <NoRecords />;
  }

  if (records.length === 0) {
    return <NoRecords />;
  }

  return (
    <section className="records-section">
      <h2>Bhaaps</h2>
      <ul>
        {records.map(({ id, bottle, time, duration }) => {
          return (
            <li key={id} className={"record " + bottle}>
              <header>
                <h3>{bottle.toUpperCase()}</h3>
                <p>{formatTime(duration)}</p>
              </header>
              <p>
                {getFormatedTime(new Date(time))} (
                {getFormatedDate(new Date(time))})
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function NoRecords() {
  return (
    <section>
      <h2>No Bhaaps yet</h2>
    </section>
  );
}

export default Records;
