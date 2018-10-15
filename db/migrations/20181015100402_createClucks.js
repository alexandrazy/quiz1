exports.up = function(knex, Promise) {
  return knex.schema.createTable("clucks", table => { //creating the table 
  table.increments("id"); //"id" SERIAL; an autoincrementing column aka primary key 
  table.string("username");
  table.text("content");
  table.text("image_url");
  table.timestamp("createdAt").defaultTo(knex.fn.now()); 

  table.timestamp("updatedAt").defaultTo(knex.fn.now()); 
  
  })
  };
  
  
  exports.down = function(knex, Promise) {

  return knex.schema.dropTable("clucks")
  };