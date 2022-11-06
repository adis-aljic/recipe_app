-- drop database recipe;	
CREATE DATABASE IF NOT EXISTS recipe;
USE recipe;
-- select * from ingridient;
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
ingridient_id INT PRIMARY KEY AUTO_INCREMENT,
ingridient_name VARCHAR (20) UNIQUE NOT NULL,
recipe_id INT,
FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id)

??????????????????????
);
 
 CREATE TABLE ingridient_recipe (
 ingridient_recipe_id INT PRIMARY KEY AUTO_INCREMENT,
 recipe_id INT,
 FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
 ingridient_id INT,
 FOREIGN KEY(ingridient_id) REFERENCES ingridient(ingridient_id),
 quantity VARCHAR(4) NOT NULL
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
CREATE PROCEDURE last_recipe_id_ingridient_id () 
BEGIN
  SELECT ingridient_id FROM ingridient ORDER BY ingridient_id DESC LIMIT 1;

  SELECT recipe_id FROM recipe ORDER BY recipe_id DESC LIMIT 1;

 
 
 END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE insert_ingridients (IN last_recipe_id INT, last_ingridient_id INT, quantity VARCHAR(4), IN ingridient_name VARCHAR(20)) 
BEGIN
INSERT INTO ingridient (ingridient_name) VALUES (ingridient_name);
INSERT INTO ingridient_recipe (recipe_id,ingridient_id,quantity) VALUES (last_recipe_id,last_ingridient_id,quantity);

 
 
 END //
DELIMITER ;

select * from ingridient_recipe;
 DELIMITER //

CREATE PROCEDURE validate_user()
BEGIN
	SELECT user_id,username, password  FROM user;

END //

DELIMITER ;