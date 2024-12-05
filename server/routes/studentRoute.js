

import express from "express";
const route=express.Router();

import stuHome from "../controlers/studentControler.js";
import { stuAbout } from "../controlers/studentControler.js";
import { stuContact } from "../controlers/studentControler.js";
import { stuService } from "../controlers/studentControler.js";

route.get("/home",stuHome)
route.get("/about",stuAbout)
route.get("/contact",stuContact)
route.get("/home",stuService)

export default route