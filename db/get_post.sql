select * from heroposts
join herousers on herousers.id = heroposts.user_id
where heroposts.id = $1