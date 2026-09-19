import Button from "../Components/Button";

function AuthToggle({
  loggedIn,
  setLoggedIn
}) {

  return (
    <div className="card">

      <h2>Login / Logout</h2>

      <p>
        Status:
        {" "}
        <strong>
          {loggedIn ? "Logged In" : "Logged Out"}
        </strong>
      </p>

      <Button
        onClick={() =>
          setLoggedIn(!loggedIn)
        }
      >
        {loggedIn ? "Logout" : "Login"}
      </Button>

    </div>
  );
}

export default AuthToggle;