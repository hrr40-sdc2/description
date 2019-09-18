

CREATE TABLE homes
(
  id                        SERIAL PRIMARY KEY,
  title                     VARCHAR(256),
  location                  VARCHAR(256,)
  super_host_name           VARCHAR(20),
  super_host_photo          VARCHAR(128),
  rating                    VARCHAR(5),
  desc                      TEXT,
  space_desc                TEXT,
  guest_desc                TEXT,
  other_desc                TEXT,
  created_at                TIMESTAMP,
  updated_at                TIMESTAMP
);

CREATE TABLE photos
(
    id              SERIAL PRIMARY KEY,
    home_id         INTEGER REFERENCES public.home (id),
    file_path       VARCHAR(256),
    desc            Text,
    created_at      TIMESTAMP,
    updated_at      TIMESTAMP
);

CREATE TABLE bedrooms
(
    id              SERIAL PRIMARY KEY,
    home_id         INTEGER REFERENCES public.home (id),
    size            VARCHAR (10),
    bath            VARCHAR(10),
    created_at      TIMESTAMP,
    updated_at      TIMESTAMP
);

CREATE TABLE amenities
(
    id              SERIAL  PRIMARY KEY,
    home_id         INTEGER REFERENCES public.home (id),
    category        Text,
    item            Text,
    desc            Text,
    created_at      TIMESTAMP,
    updated_at      TIMESTAMP
);
