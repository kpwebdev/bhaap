import { useRef, useState } from "react";

function UserDetails() {
  const [fullName, setFullName] = useState(localStorage.getItem("name"));
  const fullNameInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const name = fullNameInputRef.current.value;

    if (name === "") return;

    localStorage.setItem("name", name);

    setFullName(name);
  }

  if (fullName) {
    return (
      <section className="user-section">
        <h2>Hi, {fullName} 🥰</h2>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <p>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          ref={fullNameInputRef}
          placeholder="Name"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserDetails;
