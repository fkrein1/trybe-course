const express = require('express');
const fs = require('fs/promises');
const app = express();
app.use(express.json());

app.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: 'post not found' });
    }
    const postsData = await fs.readFile('./posts.json', 'utf-8');
    const posts = JSON.parse(postsData);
    const post = posts.find((post) => post.id === id);
    if (!post) {
      return res.status(404).json({ message: 'post not found' });
    }
    res.status(200).json(post);
    res.status(200).json({ message: 'teste' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const postsData = await fs.readFile('./posts.json', 'utf-8');
    const posts = JSON.parse(postsData);
    if (posts.length === 0) {
      return res.status(200).json({ posts: [] });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.all('*', (req, res) => {
  res.status(400).json({ message: 'Opsss, route not found!' });
});

app.listen(3003, () => console.log('Port 3003'));
