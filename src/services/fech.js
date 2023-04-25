import axios from "axios";

export function getRepos(user) {
  return axios.get(`https://api.github.com/users/${user}/repos`)
    .then((res) => {
      const { data } = res
      return data
    })
}

