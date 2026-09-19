import { useState } from "react";
import Button from "../Components/Button";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] =
    useState(false);

  function handleChange(event) {

    setForm({
      ...form,
      [event.target.name]:
        event.target.value
    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    setSubmitted(true);

  }

  return (
    <section>

      <div className="page-heading">

        <span className="badge">
          Controlled Form
        </span>

        <h1>
          Registration Form
        </h1>

      </div>

      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <label>
          Full Name

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            minLength="6"
            required
          />
        </label>

        <Button type="submit">
          Register
        </Button>

        {submitted && (
          <div className="success">
            Registration submitted for{" "}
            <strong>
              {form.name}
            </strong>
          </div>
        )}

      </form>

    </section>
  );
}

export default Register;