"use strict";

<<<<<<< HEAD
const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  },

  login: (req, res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("home/login");
  },

  register: (req, res) => {
    logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
};
=======
const User = require("../../models/User");

const output ={
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login");
  },
  register: (req,res)=>{
    res.render("home/register");
  }
  };

const process={
  login : (req, res)=>{
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  register:(req, res)=>{
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  }
};


>>>>>>> hii

module.exports = {
  output,
  process,
};
<<<<<<< HEAD

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${
        response.msg || ""
      }`
    );
  }
};
=======
>>>>>>> hii
