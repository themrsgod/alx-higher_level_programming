-- create a table called first_table and not fail if exists
CREATE TABLE first_table
	IF NOT EXISTS first_table (id INT, name VARCHAR(256));
:
