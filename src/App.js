import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const callChangePassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/changepassword",
        {
          emailAddress: "client-test@gmail.com",
          userId: "651144210c6b928f02958fd2",
          newPassword: "123456",
        },
        { withCredentials: true }
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          emailAddress: "client-test@gmail.com",
          password: "123456",
        },
        { withCredentials: true }
      );
      console.log(response.headers["Set-Cookie"]);
      setData(response.data);
      setError(null);
      console.log(response);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div className="App">
      <h1>CORS Test</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={callChangePassword}>Change Password</button>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
