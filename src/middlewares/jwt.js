var { expressjwt: expressJWT } = require("express-jwt");
const secret = require("../configs/secret");

<<<<<<< HEAD
module.exports = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
});
=======
module.exports = expressJWT({
    secret: secret.key,
    algorithms: ["HS256"],  
  });
  
>>>>>>> b80e4665565cec77dd24659193679b11f9626a06
