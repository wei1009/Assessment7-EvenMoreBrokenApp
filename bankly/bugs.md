BUG #1 routes/users.js patch /users/username  
-Supply the validator with a schema, it should evaluate if it's admin after user is logged in. So that the current user is be able to update.  
Add schemas/userUpdate.json

BUG #2 middleware/auth.js  
-Insert the payload into request object. It will fail if there is no valid token. Fixed jwt.verify().

BUG #3 route/auth.js
-User.authenticate didn't preceded by await.

BUG #4 routes/users.js delete /users/username  
-User.delete didn't preceded by await.