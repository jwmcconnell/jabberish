const signinUser = (user: { username: string; password: string }) => {
  return fetch('http://localhost:3000/api/v1/auth/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  })
    .then((res) => [res.ok, res.json()])
    .then(([ok, json]) => {
      if (!ok) throw Error('Incorrect username or password.');

      return json;
    });
};

const signupUser = (user: { username: string; password: string }) => {
  return fetch('http://localhost:3000/api/v1/auth/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  })
    .then((res) => [res.ok, res.json()])
    .then(([ok, json]) => {
      if (!ok)
        throw Error('That username is taken. Please try a different one.');

      return json;
    });
};

const verifyUser = () => {
  return fetch('http://localhost:3000/api/v1/auth/verify', {
    mode: 'cors',
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then((res) => res.json());
};

export { signupUser, signinUser, verifyUser };
