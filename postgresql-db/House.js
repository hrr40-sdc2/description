CREATE DATABASE test;
\connect ;

CREATE TABLE public.home
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
  created_at                TIMESTAMPTZ,
  updated_at                TIMESTAMPTZ
);

CREATE TABLE public.home_image
(
    id              SERIAL PRIMARY KEY,
    home_id         INTEGER REFERENCES public.home (id),
    file_path       VARCHAR(256),
    description     Text,
    created_at      TIMESTAMP,
    updated_at      TIMESTAMP
);

CREATE TABLE public.home_bedroom
(
    id              SERIAL PRIMARY KEY,
    home_id         INTEGER REFERENCES public.home (id),
    name            VARCHAR(256),
    size            VARCHAR (10),
    bath            VARCHAR(10),
    created_at      TIMESTAMP,
    updated_at      TIMESTAMP
);

CREATE TABLE public.home_amenity
(
    id              SERIAL  PRIMARY KEY,
    home_id         INTEGER REFERENCES public.home (id),
    category        Text,
    item            Text,
    desc            Text,
    created_at      TIMESTAMP,
    updated_at      TIMESTAMP
);
