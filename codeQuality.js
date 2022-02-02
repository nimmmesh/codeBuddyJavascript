// level {1/2/3}

import fetch from "node-fetch";

// Level 1
const getData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").json();
};

// Level 2

const getUsers2 = async () => {
  const document = await Promise.all(getUser(), getProfile(), getPosts());

  return {
    user: document[0],
    profile: document[1],
    posts: document[2],
  };
};

// Level 3

const getUsers3 = async (users) => {
  return users.map((user, index) => {
    user[id] = index;
    return user;
  });
};
