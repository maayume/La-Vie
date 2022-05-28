const { Psicologo } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const authController = {
  async login(req, res) {
    const { email, senha } = req.body;
    const data = await Psicologo.findOne({
      where: {
        email,
      },
    });
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
  },
};

module.exports = authController;
