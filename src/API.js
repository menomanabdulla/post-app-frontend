const axios = require('axios')
let URL = 'http://localhost:3001/api/post'
module.exports = {
    createPost: (newPost) =>{
        return axios.post(URL,newPost)
        .then(response =>{
            console.log(response)
        })
    },
    fetchAllPost: () =>{
       return axios.get(URL)
        .then(response =>{
            return response.data.result
        })
    },
    fetchSinglePost:(slug) =>{
        return axios.get(URL+slug)
        .then(response =>{
            return [response.data.result]
        })
    }
}
