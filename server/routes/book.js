let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bookController = require('../controllers/book');

//helper function for guard purposes
function requireAuth(req,res,next) 
{
    //check if user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ OPeration */
router.get('/', bookController.displayBookList);

/* GET route for displaying Add page - CREATE Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST route for processing Add page - CREATE Operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);


module.exports = router;