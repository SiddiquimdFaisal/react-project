import { useState } from "react";

import WelcomeCard from "../Components/WelcomeCard";
import Counter from "../Components/Counter";
import Button from "../Components/Button";
import LiveClock from "../Components/LiveClock";
import AuthToggle from "../Components/AuthToggle";

import useDocumentTitle from "../hooks/useDocumentTitle";

function Home({
  loggedIn,
  setLoggedIn
}) {

  useDocumentTitle(
    "Home | ReactLab"
  );

  const [message, setMessage] =
    useState("Button not clicked yet.");

  return (
    <>

      <section className="hero">

        <span className="badge">
          React + Vite Project
        </span>

        <h1>
          React All-in-One App
        </h1>

        <p>
          Learn React by building
          everything inside one project.
        </p>

      </section>

      <section className="grid">

        <WelcomeCard
          name="Kaif"
          role="React Developer"
        />

        <Counter />

        <div className="card">

          <h2>
            Button Click
          </h2>

          <p>
            {message}
          </p>

          <Button
            onClick={() =>
              setMessage(
                "Button clicked successfully! 🎉"
              )
            }
          >
            Click Me
          </Button>

        </div>

        <LiveClock />

        <AuthToggle
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />

      </section>

    </>
  );
}

export default Home;