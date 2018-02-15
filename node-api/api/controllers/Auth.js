var Auth = {
    ensureAuthenticated: (req, res, next) => {
        console.log("RES: "+req.isAuthenticated());
        if (req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/users/login');
        }
    }
  };
  module.exports = Auth;
  