import React from "react";

function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    isLoading: false
  });

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
        />
        <br />
        <input
         type="password"
         name="password"
         placeholder="password"
         value={state.password}
         onChange={handleChange}
         />

      </form>
    </div>
  );
}

export default Login;
