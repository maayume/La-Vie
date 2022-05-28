const { Psicologo } = require("../models");
const bcrypt = require("bcrypt");

const PsicologoController = {
  index: async (req, res) => {
    const allPsicologos = await Psicologo.findAll({
<<<<<<< HEAD
      attributes: ["id", "nome", "email", "apresentacao"],
=======
      attributes: { exclude: ["senha"] },
>>>>>>> b80e4665565cec77dd24659193679b11f9626a06
    });

    res.json(allPsicologos);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const psicologo = await Psicologo.findAll({
      where: { id: id },
      attributes: ["id", "nome", "email", "apresentacao"],
    });

    if (psicologo) {
      return res.json(psicologo);
    }

    res.status(404).json({
      message: "id não encontrado",
    });
  },
  store: async (req, res) => {
    const { nome, email, senha, apresentacao = [] } = req.body;

    const novaSenha = bcrypt.hashSync(senha, 10);

    const psicologoExistente = await Psicologo.findOne({
      where: { email: email.toLowerCase() },
    });
    if (psicologoExistente) {
      return res.status(400).json({ message: "Psicologo já cadastrado" });
    }
    const novoPsicologo = await Psicologo.create({
      nome,
      email: email.toLowerCase(),
      senha: novaSenha,
      apresentacao,
    });
    if (novoPsicologo) {
      return res.status(201).json(novoPsicologo);
    }

    res.status(400);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, apresentacao = [] } = req.body;
    const psicologoAtualizado = await Psicologo.update(
      {
        nome,
        email,
        senha,
        apresentacao,
      },
      {
        where: {
          id,
        },
      }
    );

    if (psicologoAtualizado) {
      return res.json({
        id,
        ...(req.body || {}),
      });
    }

    res.status(400);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const deletarPsicologo = await Psicologo.destroy({
      where: {
        id,
      },
    });

    if (deletarPsicologo) {
      return res.status(204).send("");
    }
    res.status(404).json({
      message: "id não encontrado",
    });
  },
};

module.exports = PsicologoController;
