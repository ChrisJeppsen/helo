insert into herousers
 (user_name, password)
values 
 ($1, $2)
returning id, user_name;
