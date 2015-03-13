var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
  	username : {type: 'email', required: true, unique: true},
  	password : {type: 'string', required: true},
    passports: {collection: 'Passport', via: 'user'},
    city : {type: 'string', required: false },
    spacetype : { type: 'string', required: false},
    loading : { type: 'string', required: false },
    storage : { type: 'string', required: false },
    alcohol : { type: 'string', required: false },
    smoking : { type: 'string', required: false },
    guests : { type: 'string', required: false }
  }
};

module.exports = User;
