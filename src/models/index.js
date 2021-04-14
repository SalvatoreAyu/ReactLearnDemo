import { Axios } from '../utils/http'
let axios = new Axios()
function getCourseFields() {
    return new Promise((resolve, reject) => {
        axios.axiosGet({
            url: '/courseField/courseFields',
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}
function getCourseList() {
    return new Promise((resolve, reject) => {
        axios.axiosGet({
            url: '/courseList/courseList',
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}
export {
    getCourseFields,
    getCourseList
}