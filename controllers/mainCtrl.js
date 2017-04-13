var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');
module.exports = {
  getName: function(req, res, next) {
    res.status(200).json({user: user.name});
    console.log(name);
  },
  getLocation: function(req, res, next) {
    res.status(200).json({location: user.location});
  },
  getOccupation: function(req, res, next) {
    var names = [];
    for (let i = 0; i < user.occupations.length; i++) {
      names.push(user.occupations[i].name);
    }

    if (req.query.order) {
      if (req.query.order === 'desc') {
        res.status(200).json({occupations: names.sort()})

      } else if (req.query.order === 'asc') {
        res.status(200).json({occupations: names.sort().reverse()})
      }
    } else {
      res.status(200).json({occupations: user.occupations});
    }
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
    var result = {};
    for (var i = 0; i < user.restaurants.length; i++) {
      if (user.restaurants[i].name === req.params.name) {
        result = user.restaurants[i];
      }
    }
    res.status(200).json({restaurants: result});
  },
  putName: function(req, res, next) {
    user.name = req.body.newName;
    res.status(200).json({name: user.name});
  },
  putLocation: function(req, res, next) {
    user.location = req.body.newLoc;
    res.status(200).json({location: user.location});
  },
  postHobbies: function(req, res, next) {
    user.hobbies.push(req.body.newHobby)
    res.status(200).json(user.hobbies)
  },
  postOccupation: function(req, res, next) {
    user.occupations.push(req.body.newOccupation);
    res.status(200).json(user.occupations);
  },
  postFamily: function(req, res, next) {
    user.family.push(req.body.newMember);
    res.status(200).json(user.family);
  },
  postRestaurants: function(req, res, next) {
    user.restaurants.push(req.body.newRest);
    res.status(200).json(user.restaurants);
  },
  getSkillz: function(req, res, next) {
    var skilzExp = [];
    console.log(req.query);
    if (req.query.experience) {
      console.log(req.params);
      for (var i = 0; i < skillz.length; i++) {
        if (skillz[i].experience === req.query.experience) {
          skilzExp.push(skillz[i]);
        }
      }
      res.status(200).json(skilzExp);
    } else {
      res.status(200).json(skillz);
    }

  },
  postSkillz: function(req, res, next) {
    skillz.push(req.body.newSkillz);
    console.log(req.body);
    console.log(skillz);
    res.status(200).send(skillz);
  },
  getSecrets: function(req, res, next) {
    res.status(200).json(secrets);
  }
}
