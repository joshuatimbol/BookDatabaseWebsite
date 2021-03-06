let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET route for displaying Login page */
router.get('/login', indexController.displayLogInPage);

/* POST route for processing Login page */
router.post('/login', indexController.processLoginPage);

/* GET route for displaying Register page - CREATE Operation */
router.get('/register', indexController.displayRegisterPage);

/* POST route for processing Add Register - CREATE Operation */
router.post('/register', indexController.processRegisterPage);

/* GET to perform User Logout - DELETE Operation */
router.get('/logout', indexController.performLogout);



module.exports = router;
