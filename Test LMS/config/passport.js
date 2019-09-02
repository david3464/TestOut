var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Include User Model
const User = require('../models/User');

module.exports = (passport)=> {
    passport.use(
        new LocalStrategy((username, password, done)=>{
            //Match Username and Passwords
            User.findOne({username: username})
                .then(user =>{
                    if(!user) {
                        return done(null, false, { message: username +'is not registered before!' });
                    }
                    //Match Passwords
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;
                        if(isMatch){
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Passwords do not match!'});
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    );
    passport.serializeUser((user, done)=> {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user)=> {
            done(err, user);
        });
    });
}