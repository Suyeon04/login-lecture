"use strict";

const app = require("../app");
<<<<<<< HEAD
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
=======
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
>>>>>>> hii
});
