function About() {

  const topics = [
    "Simple Component",
    "Props",
    "Counter",
    "Button Click",
    "To-do List",
    "Registration Form",
    "Login / Logout",
    "Live Clock",
    "Organized Structure",
    "React Router",
    "Dark / Light Theme",
    "useEffect",
    "Custom Hooks",
    "Weather API",
    "Production Build",
    "Deployment"
  ];

  return (
    <section>

      <div className="page-heading">

        <span className="badge">
          Project Topics
        </span>

        <h1>
          Everything in One App
        </h1>

      </div>

      <div className="card">

        <ul className="topic-list">

          {topics.map((topic) => (
            <li key={topic}>
              ✓ {topic}
            </li>
          ))}

        </ul>

      </div>

    </section>
  );
}

export default About;