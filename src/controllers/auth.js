const { Psicologo } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const authController = {
<<<<<<< HEAD
  async login(req, res) {
    const { email, senha } = req.body;
    const data = await Psicologo.findOne({
=======
  login: async (req, res) => {
    const { email, senha } = req.body;
    const psicologo = await Psicologo.findOne({
>>>>>>> b80e4665565cec77dd24659193679b11f9626a06
      where: {
        email,
      },
    });
<<<<<<< HEAD
    const psicologo = data.toJSON();
    if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
      return res
        .status(401)
        .json("E-mail ou senha inválido, verifique e tente novamente");
    }

    const token = jwt.sign(
      {
        id: psicologo.id,
        email: psicologo.email,
        nome: psicologo.nome,
        userType: "user",
      },
      secret.key
    );

    return res.json(token);
=======

    if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
      return res
        .status(401)
        .json("“E-mail ou senha inválido, verifique e tente novamente”");
    }

    const user = {
      id: psicologo.id,
      email: psicologo.email,
      nome: psicologo.nome,
      userType: "user",
    };
    // const { senha: _senha, ...user } = usuario;

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
>>>>>>> b80e4665565cec77dd24659193679b11f9626a06
  },
};

module.exports = authController;
