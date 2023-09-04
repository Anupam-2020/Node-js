exports.getPosts = (req, resp, next) => {
  resp.status(200).json({
    posts: [{ title: "Name of company", content: "This is the first post!" }],
  });
};

exports.createPosts = (req, resp, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content)
  resp.status(201).json({
    message:'posted successfully',
    posts: [
      { 
        id: new Date().toISOString(), 
        title: title, 
        content: content 
      }
    ],
  });
};
