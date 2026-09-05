type PageData = {

}

function getUser(userId: string) {
    return new Promise((resolve, reject) => {
        resolve({
            userId,
            username:'janedoe'
        })
    })
}

function getNotifications(userId:string) {
    return new Promise((resolve, reject) => {
        resolve({
            notification:'you have a new notification'
        })
    })
}

function getPreferences(userId:string) {
    return new Promise((resolve, reject) => {
        resolve({
            preferences:'dark-mode'
        })
    })
}

async function loadPageData(userId: string): Promise<PageData>{

    try {
        let data = Promise.all([getUser(userId), getNotifications(userId), getPreferences(userId)]);
        return new Promise(resolve => resolve(data))
    } catch (error) {
        return new Promise(reject => reject(new Error('something went wrong')))
    }

}