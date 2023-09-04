
const postButton = document.getElementById('post');
postButton.addEventListener('click', async() => {
  const response = await fetch('http://localhost:8080/feed/feed-json', {
    method: 'post',
    body: 
      JSON.stringify({title: 'From codepen',
      content: 'Posting from codepen'})
    ,
    headers: {'Content-Type': 'application/json'}
  })
  const data = await response.json();
  console.log(data.posts[0].title)
});


// const postButton = document.getElementById('post');
// postButton.addEventListener('click', async () => {
//   const data = await fetch('http://localhost:8080/feed/feed-json');
//   const resp = await data.json();
//   console.log(resp);
// });