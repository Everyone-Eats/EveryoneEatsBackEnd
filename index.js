const app = require("./server");

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Everyone Eats API running on ${port}`));

module.exports = app;
