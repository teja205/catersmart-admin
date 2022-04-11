import instant from "."

export function baseApi(config) {
    return new Promise((resolve, reject) => {
        instant(config).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}