const app = "I don't do much.";

const token = '2e99473f4f59d46e50a02f0f8f0cc6369b6d0774';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
  // 
  //
  // fetch('https://api.github.com/user/repos').
  //   then(res => res.json()).
  //   then(json => console.log(json))
