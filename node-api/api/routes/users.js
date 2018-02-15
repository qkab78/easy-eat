const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');
const auth = require('../controllers/Auth');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/login', (req, res) => {
    res.send("Connexion")
});
//CRUD
router.get('/', users.index);
router.post('/', users.create);
router.put('/:id/update', auth.ensureAuthenticated, users.update);
router.delete('/:id/delete', auth.ensureAuthenticated, users.delete);
router.get('/admin/user/:id', auth.ensureAuthenticated, users.getUserInfos);


/* POST Création d'un nouvel utilisateur */
passport.use(new LocalStrategy((username, password, done) => {
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if(!user){
            return done(null, false, {message:'Utilisateur inconnu'});
        }
        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch){
                return done(null, user);
            }else{
                return done(null, false, {message:'Mot de passe invalide'})
            }
        });
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserByID(id, (err, user) => {
        done(err, user);
    });
});
router.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login', failureFlash:true}),
    (req, res) => {
        res.redirect('/');
    }
);
/* DELETE déconnexion d'un nouvel utilisateur */
router.get('/logout', auth.ensureAuthenticated, (req, res) => {
    req.logout();
    req.flash('success_msg', 'Déconnecté !');
    res.redirect('/users/login');
});
module.exports = router;