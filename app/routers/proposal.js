// const multer = require('multer');
const APIError = require("../services/error/APIError");
const { cardController } = require("../controllers/index.js");
const debug = require('debug')("router:proposal");
const authentificationToken = require('../services/authentification/authentificationToken');
const validationModule = require("../services/validation/validate");

const { Router } = require("express");
const authentificationRouter = require("./authentification");
const proposalRouter = Router();

/**
 * A card is an object including an image, a title, a description, an environmental_rating, an economic_rating, a value and an user_id
 * @typedef {Object} Card
 * @property {string} image - image
 * @property {string} title - title
 * @property {string} description - description
 * @property {integer} environmental_rating - environmental_rating
 * @property {integer} economic_rating - economic_rating
 * @property {integer} value - value
 * @property {integer} user_id - user_id
 */

// Configuring the image upload
// const upload = multer({
//     // 5mb maximum
//     limits: {
//         fileSize: 5000000
//     },
//     fileFilter(req, file, callback) {
//         // Only accepting images
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return callback(new APIError('Merci d\'importer un fichier image valide (formats acceptés : .png, .jpeg, .jpg)', 400));
//         }
//         callback(undefined, true);
//     }
// });

/**
 * @route POST /proposal
 * @group Card - Adding a proposal card to the site's cards
 * @param {Card} user.body.required - Object Card
 * @returns {object} 200 - New card's data
 * @returns {Error}  default - Unexpected error
 */
// proposalRouter.post("/", authentificationToken.isAuthenticated, upload.single('image'), cardController.addCard);

proposalRouter.post("/", authentificationToken.isAuthenticated, validationModule.validateCard, cardController.addCard);

proposalRouter.get("/", authentificationToken.isAuthenticated, cardController.getAllProposalCard);

proposalRouter.patch("/:id", authentificationToken.isAuthenticated, cardController.updateProposalCard);

module.exports = proposalRouter;