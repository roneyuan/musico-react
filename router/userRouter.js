const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {User} = require('../models/users');

router.use(jsonParser);



// TODO
router.get('/', );
router.put('/', );
router.post('/', );
router.delete('/', );