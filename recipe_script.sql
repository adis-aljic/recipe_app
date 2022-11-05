-- drop database recipe;
CREATE DATABASE IF NOT EXISTS recipe;
USE recipe;

CREATE TABLE recipe(
recipe_id INT PRIMARY KEY AUTO_INCREMENT,
recipe_name VARCHAR(40) NOT NULL,
type_of_meal ENUM ("Appetizer","Main Course","Dessert","Drink"),
user_id INT,
describtion VARCHAR (4000),
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user (
user_id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(30) UNIQUE NOT NULL,
password VARCHAR (10)  NOT NULL,
first_name VARCHAR (20),
last_name VARCHAR(20),
admin ENUM ("true","false"),
safe_word VARCHAR(10),
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE recipe
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

CREATE TABLE ingredient (
ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
ingredient_name VARCHAR (20) UNIQUE NOT NULl,
quantity VARCHAR(4) NOT NULL
-- quantity is in grams
);
 
 CREATE TABLE ingredient_recipe (
 ingredient_recipe_id INT PRIMARY KEY AUTO_INCREMENT,
 recipe_id INT,
 FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
 ingredient_id INT,
 FOREIGN KEY(ingredient_id) REFERENCES ingredient(ingredient_id)
 );
 select * from user;
 INSERT INTO user(username,password,first_name,last_name,admin)
 VALUES ("a@a.com","password","Adis","Aljic","true");
 
 DELIMITER //

CREATE PROCEDURE validate_user(in username_input VARCHAR(10),IN password_input VARCHAR (10))
BEGIN
	SELECT username, password  FROM user WHERE username = username_input AND password = password_input;

END //

DELIMITER ;