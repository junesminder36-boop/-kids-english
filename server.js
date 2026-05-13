const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/magic-english-buddy/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'magic-english-buddy', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Bobo English server running on port ${PORT}`);
  console.log(`Main app: http://localhost:${PORT}/`);
  console.log(`Magic English Buddy: http://localhost:${PORT}/magic-english-buddy/`);
});
