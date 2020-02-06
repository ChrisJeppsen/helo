select * from heroposts
join herousers on herousers.id = heroposts.user_id
where heroposts.user_id = $1