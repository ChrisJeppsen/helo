  create table heroUsers (
    id serial primary key,
    user_name varchar(200),
    password varchar(200)
 );

create table heroPosts (
    id serial primary key,
    user_id int references heroUsers(id),
    title varchar(200),
    image_url text,
    content varchar(200)
);