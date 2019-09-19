

CREATE TABLE homes
(
  id                        SERIAL PRIMARY KEY,
  title                     VARCHAR(256),
  location                  VARCHAR(256),
  super_host_name           VARCHAR(20),
  super_host_photo          VARCHAR(128),
  rating                    VARCHAR(5),
  description               VARCHAR(256),
  space_desc                VARCHAR(256),
  guest_desc                VARCHAR(256),
  other_desc                VARCHAR(256)
);

CREATE TABLE photos
(
    id              SERIAL PRIMARY KEY,
    home_id         VARCHAR(256),
    file_path       VARCHAR(256),
    description     VARCHAR(256)
);

CREATE TABLE bedrooms
(
    id              SERIAL PRIMARY KEY,
    home_id         VARCHAR(256),
    size            VARCHAR (256),
    bath            VARCHAR(10)
);

CREATE TABLE amenities
(
    id              SERIAL  PRIMARY KEY,
    home_id         VARCHAR(256),
    category        VARCHAR(256),
    item            VARCHAR(256),
    description     VARCHAR(256)
);
