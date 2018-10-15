const knexfile = require("../knexfile");
const knex = require("knex")(knexfile["development"]); //NOT YET CONFIGURED : DOESNT KNWO ABOUT POSTGRES DB OR HO TO CONNECT TO IT
module.exports = knex; // requiring this client will allow us to skip a bunch fo this setup  