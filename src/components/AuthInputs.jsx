import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier == "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6 ">
        {/* <p>
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </label>
          <input
            type="email"
            style={{
              backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
              textAlign: "center",
            }} //inline styling
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? "invalid" : ""}`}>
            Password
          </label>
          <input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p> */}
        <Input
          label="Email"
          invalid={emailNotValid}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <Input
          label="Password"
          invalid={passwordNotValid}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        {/* <button className="button" onClick={handleLogin}>
          Sign In
        </button> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
