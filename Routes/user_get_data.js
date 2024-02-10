const express=require("express");
const router=express.Router();
const req_user=require('../middleware/require_userAuth');
const {get_user_comp}=require("../controllers/compcontoller");
const {get_user_events}=require("../controllers/eventcontroller");
const {get_user_workshop}=require("../controllers/workcontrollers");

router.use(req_user)
//get all competitions
router.get('/comp',get_user_comp);
//get all events
router.get('/event',get_user_events);
//get all workshop
router.get('/work',get_user_workshop);

module.exports=router;