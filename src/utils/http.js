import axios from 'axios'
// import qs from 'qs'
import { BASE_URL } from '../config/config'

class Axios {
  axiosGet(options) {
    return axios(BASE_URL + options.url)
      .then((res) => options.success(res))
      .catch((err) => {
        options.error(err)
      })
  }
}
export { Axios }
