var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
  	username : {type: 'email', required: true, unique: true},
  	password : {type: 'string', required: true},
    passports: {collection: 'Passport', via: 'user'},
    street: { type: 'string', required: false},
    city : { type: 'string', required: false },
    zip: { type: 'integer', required: false},
    longitude: { type: 'float', required: false},
    latitude: { type: 'float', required: false},
    spacetypes : { type: 'string', required: false},
    loading : { type: 'string', required: false },
    storage : { type: 'string', required: false },
    alcohol : { type: 'string', required: false },
    smoking : { type: 'string', required: false },
    guests : { type: 'string', required: false }
  }
};

module.exports = User;
