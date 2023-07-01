const app = require("./src/app");
const dotenv = require("dotenv").config();

// environment variables
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
