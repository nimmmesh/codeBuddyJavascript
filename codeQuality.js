// level {1/2/3}

// Level 2

const getUsers = async () => {
  const document = await Promise.all(getUser(), getProfile(), getPosts());

  return {
    user: document[0],
    profile: document[1],
    posts: document[2],
  };
};
