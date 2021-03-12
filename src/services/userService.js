export const userService = {
  login,
  logout,
  register,
};

function login(loginCredentials) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginCredentials),
  };

  return fetch("http://localhost:8080/authenticate", requestOptions)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      return response.json();
    })
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch("http://localhost:8080/user", requestOptions).then(
    handleResponse
  );

  /**
   *
   */
}

function handleResponse(response) {
  if (!response.ok) {
    debugger;
    return Promise.reject(response.statusText);
  }

  // return response.json();
  return response;
}
