const { UserCard } = require("../models/index");
const debug = require('debug')("controller:usercard");

const userCardController = {
    async updateUserCardState (req, res, next) {
        try {
            // CAREFUL : userId will be found in req.user using JWT
            const updatedCard = await UserCard.updateUserCardState(req.params.id, req.params.cardId);
            // debug(updatedCard);
            //do we send a "success" message here using .json() ?
            //do we notice the user if no modification ?
            // if(updatedCard) {
            //     res.status(204).json();
            // }
            res.status(204).json();
        } catch (error) {
            //next(new APIError(`Erreur interne : ${error}`,500));
        }
    },

    async addUserCard (req, res, next) {
        try {
            // We need to know more about the front form -> card_id ? expiration_date ? (make sure the columns have the same name than user_card table)
            // CAREFUL : userId will be found in req.user using JWT
            const card = await UserCard.create({...req.body, user_id : req.params.id});
            // debug(cards);
            res.json(card);
        } catch (error) {
            //next(new APIError(`Erreur interne : ${error}`,500));
        }
    },

    async deleteUserCard (req, res, next) {
        try {
            // CAREFUL : userId will be found in req.user using JWT
            const deletedCard = await UserCard.deleteUserCard(req.params.id, req.params.cardId);
            //do we send a "success" message here using .json() ?
            //do we notice the user if no deletion ?
            // if(deletedCard) {
            //     res.status(204).json();
            // }
            // debug(deletedCard);
            res.status(204).json();
        } catch (error) {
            //next(new APIError(`Erreur interne : ${error}`,500));
        }
    }
};

module.exports = userCardController;