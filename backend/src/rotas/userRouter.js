const express = require("express")
const {createNewUser} = require("./controls/createUserAPI.js")
const {loginUser} = require("./controls/loginUserAPI.js")
const logger = require('../../logger.js');
const router = require("express").Router()

//Criar usuario
router.post("/create",
  [
    body("user")
      .notEmpty().withMessage("Usuário é obrigatório")
      .isLength({ min: 4 }).withMessage("Usuário deve ter no mínimo 4 caracteres"),
    body("password")
      .notEmpty().withMessage("Senha é obrigatória")
      .isLength({ min: 6 }).withMessage("Senha deve ter no mínimo 6 caracteres"),
  ], async (req, res) => {

     try {

        const { user, password } = req.body;
        const createUser = await createNewUser({ user, password });

        if (createUser) {
            // Remove cookie antigo caso exista
            res.clearCookie('authToken');

            logger.info(`Usuário cadastrado com sucesso: ${user}`);

            res.json({ message: "Usuário cadastrado.", createUser });

        } else {

            logger.warn(`Tentativa de cadastro de usuário já existente: ${user}`);
            res.status(400).json({ message: "Esse usuário já existe." });
        }
    } catch (err) {
        
        logger.error(`Erro ao criar usuário: ${err.message}`);
        res.status(500).json({ message: "Problemas internos" });
    }
});

router.post(
    "/login",
  [
    body("user").notEmpty().withMessage("Usuário é obrigatório"),
    body("password").notEmpty().withMessage("Senha é obrigatória"),
  ], async (req, res) => {
    try {
        const { user, password } = req.body;
        const login = await loginUser({ user, password });

        if (!login) {
            logger.warn(`Falha de login: Usuário e/ou senha incorretos para ${user}`);
            return res.status(400).json({ message: "Usuário e/ou senha errados." });
        }

        const token = login;
        logger.info(`Usuário logado com sucesso: ${user}`);

        // Remove cookie antigo caso exista
        res.clearCookie('authToken');
        res.cookie('authToken', token);
        res.json({ message: "Logado" });
    } catch (err) {
        logger.error(`Erro ao realizar login: ${err.message}`);
        res.status(500).json({ message: "Problemas internos" });
    }
});

module.exports = router