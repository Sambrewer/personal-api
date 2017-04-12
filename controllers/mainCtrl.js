var user = require('../user.js')

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json({user: user.name});
    console.log(name);
  },
  getLocation: function(req, res, next) {
    res.status(200).json({location: user.location});
  },
  getOccupation: function(req, res, next) {
    var unsorted = user.occupations;
    if (req.query.order) {
      if (req.query.order === 'desc') {
        res.status(200).json({occupations: unsorted.name.sort()})
      }
    }
    // res.status(200).json({occupations: user.occupations});
  },
  getOccupationLatest: function(req, res, next) {
    res.status(200).json({occupation: user.occupations.slice(user.occupations.length-1)})
  },
  getHobbies: function(req, res, next) {
    res.status(200).json({hobbies: user.hobbies});
  },
  getHobbiesType: function(req, res, next) {
    var results = []
    if (req.query.hobbies) {
      for (var i = 0; i < user.hobbies.length; i++) {
        if (user.hobbies[i].name === req.query.hobbies) {
          res.status(200).json({hobby: user.hobbies[i]})
        }
      }
    } else {
      for (var j = 0; j < user.hobbies.length; j++) {
        if (user.hobbies[j].type === req.params.type) {
          results.push(user.hobbies[j]);
        }
      }
      res.status(200).json({hobbies: results});
    }
  },
  getFamily: function(req, res, next) {
    res.status(200).json({family: user.family});
  },
  getFamilyGender: function(req, res, next) {
    var results = [];
    if (req.query.relation) {
      for (var j = 0; j < user.family.length; j++) {
        if (user.family[j].relation === req.query.relation) {
          results.push(user.family[j]);
        }
      }
      res.status(200).json({family: results});
      } else {
      for (var i = 0; i < user.family.length; i++) {
        if (user.family[i].gender === req.params.gender) {
          console.log(req.query)
          results.push(user.family[i]);
        }
      }
      res.status(200).json({family: results});
    }
  },
  getRestaurants: function(req, res, next) {
    res.status(200).json({restaurants: user.restaurants});
  },
  getRestaurantsName: function(req, res, next) {
    var result = {}
    console.log(req.params.name)
    for (var i = 0; i < user.restaurants.length; i++) {
      console.log(user.restaurants);
      if (user.restaurants[i].name === req.params.name) {
        result = user.restaurants[i];
      }
    }
    res.status(200).json({restaurants: result});
  }

}
