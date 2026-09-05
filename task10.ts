type PageData = {
  user: {
    name: string;
    ager: number;
  };
  notifcations: string[];
  preferences: {
    theme: "dark" | "light";
  };
};

async function getUser(userId: string) {
  return Promise.resolve({
    name: "Anjal",
    age: 22,
  });
}

async function getNotifications(userId: string) {
  return Promise.resolve(["hello", "hi"]);
}

async function getPreferences(userId: string) {
  return Promise.resolve({
    theme: "dark",
  });
}

async function loadPageData(userId: string) {
  const data = Promise.all([
    await getUser(userId),
    await getNotifications(userId),
    await getPreferences(userId),
  ]);

  return Promise.resolve({
    user: data[0],
    notifcations: data[1],
    preferences: data[2],
  });
}
