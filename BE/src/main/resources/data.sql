DROP TABLE IF EXISTS advertise;

CREATE TABLE advertise (advertise_id INT PRIMARY KEY AUTO_INCREMENT, image_path VARCHAR(45), orders INT);

INSERT INTO advertise (image_path, orders) VALUES ('https://picsum.photos/1920/570/?image=814', 1);
INSERT INTO advertise (image_path, orders) VALUES ('https://picsum.photos/1920/570/?image=815', 2);
INSERT INTO advertise (image_path, orders) VALUES ('https://picsum.photos/1920/570/?image=816', 3);

DROP TABLE IF EXISTS advertise;

CREATE TABLE item (advertise_id INT PRIMARY KEY AUTO_INCREMENT, image_path VARCHAR(45), orders INT);
