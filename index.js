require('dotenv').config()
const express = require('express')
const app = express()
const port =process.env.PORT ||4000


//github dat 
const githUBdATA = {
    "login": "Abhishek-7408",
    "id": 105623789,
    "node_id": "U_kgDOBkuw7Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/105623789?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abhishek-7408",
    "html_url": "https://github.com/Abhishek-7408",
    "followers_url": "https://api.github.com/users/Abhishek-7408/followers",
    "following_url": "https://api.github.com/users/Abhishek-7408/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abhishek-7408/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abhishek-7408/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abhishek-7408/subscriptions",
    "organizations_url": "https://api.github.com/users/Abhishek-7408/orgs",
    "repos_url": "https://api.github.com/users/Abhishek-7408/repos",
    "events_url": "https://api.github.com/users/Abhishek-7408/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abhishek-7408/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Kushwaha",
    "company": null,
    "blog": "https://www.linkedin.com/in/abhishek-kushwaha-3396a3255/",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "Software Developer | Docker | Kubernetes | AWS | Competitive Programming",
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-05-16T05:17:15Z",
    "updated_at": "2024-03-18T08:08:15Z"
}




app.get('/', (req,res)=> {
    res.send('Twitter page')
})


app.get('/login', (req, res) => {
  res.send('<h1>please login</h1>')
})

app.get('/twitter', (req,res)=> {
    res.send('Twitter page')
})
app.get('/github',(req,res)=>{
    res.json(githUBdATA)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})