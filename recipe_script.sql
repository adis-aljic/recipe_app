-- drop database recipe;	
CREATE DATABASE IF NOT EXISTS recipe;
USE recipe;
CREATE TABLE recipe(
recipe_id INT PRIMARY KEY AUTO_INCREMENT,
recipe_name VARCHAR(40) NOT NULL,
type_of_meal ENUM ("Appetizer","Main Course","Dessert","Drink"),
user_id INT,
description VARCHAR (4000),
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user (
user_id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(30) UNIQUE NOT NULL,
password VARCHAR (10)  NOT NULL,
first_name VARCHAR (20),
last_name VARCHAR(20),
safe_word VARCHAR(10),
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE recipe
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

CREATE TABLE ingridient (
ingridient_name VARCHAR (30) PRIMARY KEY


);
 
 CREATE TABLE ingridient_recipe (
 ingridient_recipe_id INT PRIMARY KEY AUTO_INCREMENT,
 recipe_id INT,
 FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
 ingridient_name VARCHAR (30),
 FOREIGN KEY(ingridient_name) REFERENCES ingridient(ingridient_name),
 quantity VARCHAR(14) NOT NULL
-- quantity is in grams/ml
 );
 select * from user;
 INSERT INTO user(username,password,first_name,last_name)
 VALUES ("a@a.com","password","Adis","Aljic");
 INSERT INTO user(username,password,first_name,last_name)
 VALUES ("adis@a.com","sifra","Jane","Doe");
 select * from user;
 DELIMITER //
CREATE PROCEDURE register_user( IN email VARCHAR(30),IN pass VARCHAR(10), IN first_n VARCHAR(20),IN last_n VARCHAR(20),IN s_word VARCHAR(10))
BEGIN
 INSERT INTO user(username,password,first_name,last_name,safe_word)
 VALUES (email,pass,first_n,last_n,s_word);
END //
DELIMITER ;

 DELIMITER //
CREATE PROCEDURE new_recipe( IN recipe_name VARCHAR(40),IN type_of_meal ENUM ("Appetizer","Main Course","Dessert","Drink"), IN user_id INT,IN description VARCHAR(4000)
)
BEGIN

 INSERT INTO recipe(recipe_name,type_of_meal,user_id,description)
 VALUES (recipe_name,type_of_meal,user_id,description);

END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE insert_ingridients (IN recipe_id INT, IN ingridient_name VARCHAR(30),IN quantity VARCHAR(14)) 
BEGIN
INSERT INTO ingridient (ingridient_name) VALUES (ingridient_name);
INSERT INTO ingridient_recipe (recipe_id,ingridient_name,quantity) VALUES (recipe_id,ingridient_name,quantity);

 
 
 END //
DELIMITER ;

 DELIMITER //

CREATE PROCEDURE last_recipe_id()
BEGIN
	SELECT recipe_id FROM recipe ORDER BY recipe_id DESC LIMIT 1;

END //

DELIMITER ;


 DELIMITER //

CREATE PROCEDURE validate_user()
BEGIN
	SELECT user_id,username, password  FROM user;

END //

DELIMITER ;

 DELIMITER //

CREATE PROCEDURE get_recipe()
BEGIN
	SELECT recipe.recipe_name,recipe.type_of_meal, recipe.description, user.username, user.first_name,user.last_name, ingridient_recipe.ingridient_name,ingridient_recipe.quantity
    FROM recipe
    INNER JOIN ingridient_recipe ON recipe.recipe_id = ingridient_recipe.recipe_id
    INNER JOIN user ON recipe.user_id = user.user_id;

END //

DELIMITER ;
select * from recipe;