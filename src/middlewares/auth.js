<<<<<<< HEAD
const { verify } = require("jsonwebtoken");
const secret = require("../configs/secret");
=======
>>>>>>> b80e4665565cec77dd24659193679b11f9626a06
const { Psicologo } = require("../models");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Usuário não autenticado" });
  }
  
  const token = authorization.split(" ")[1];
  const auth = verify(token, secret.key);
  const psicologo = await Psicologo.findByPk(auth.id);

  if (!psicologo) {
    return res.status(401).json({ message: "Usuário não autenticado" });
  }
  req.auth = auth;
  next();
};
