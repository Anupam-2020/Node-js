const express = require('express');
const { getPosts, createPosts } = require('../controller/feed');

const router = express.Router();

router.get('/feed-json', getPosts);

router.post('/feed-json',createPosts);

module.exports = router;