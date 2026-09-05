"use strict";
async function getUser(userId) {
    return Promise.resolve({
        name: "Anjal",
        age: 22,
    });
}
async function getNotifications(userId) {
    return Promise.resolve(["hello", "hi"]);
}
async function getPreferences(userId) {
    return Promise.resolve({
        theme: "dark",
    });
}
async function loadPageData(userId) {
    const data = Promise.all([
        await getUser(userId),
        await getNotifications(userId),
        await getPreferences(userId),
    ]);
    console.log(data);
    //   return Promise.resolve({
    //     user: data[0],
    //     notifcations: data[1],
    //     preferences: data[2],
    //   });
}
loadPageData("ewa");
