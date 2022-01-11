BUG #1 app.js  
-There are two module.exports = app in app.js.  

BUG #2 routes/auth.js  post /auth/register  
-There's no validation method for this so the error is never raised.  
Add schemas/newSchemas.json

BUG #3 routes/users.js patch /users/username  
-Supply the validator with a schema, it should evaluate if it's admin after user is logged in. So that the current user is be able to update.  
Add schemas/userUpdate.json

BUG #4 routes/users.js delete /users/username  
-Add auth validation inside the route.

BUG #5 middleware/auth.js  
-Insert the payload into request object. It will fail if there is no valid token. Fixed the return next statement and throw an unauthorized error if it's not valid.