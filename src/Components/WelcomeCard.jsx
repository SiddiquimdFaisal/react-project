function WelcomeCard({ name, role }) {
  return (
    <div className="card">

      <h2>Hello, {name} 👋</h2>

      <p>
        This component receives data using props.
      </p>

      <p>
        Role: <strong>{role}</strong>
      </p>

    </div>
  );
}

export default WelcomeCard;