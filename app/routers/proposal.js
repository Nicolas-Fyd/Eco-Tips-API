const { cardController } = require("../controllers/index.js");
const debug = require('debug')("router:proposal");
const authentificationToken = require('../services/authentification/authentificationToken');

const { Router } = require("express");
const proposalRouter = Router();

// Adding a proposal card to the site's cards
proposalRouter.post("/", authentificationToken.isAuthenticated, cardController.addCard);

module.exports = proposalRouter;