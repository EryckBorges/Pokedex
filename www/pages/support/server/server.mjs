import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import { passwordApp } from './security.js'

console.log(passwordApp);


const app = express();
const PORT = 3000; // ou outra porta

app.use(cors());
app.use(bodyParser.json());

// Configuração do transporte do Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "eryckborges2502@gmail.com",
        pass: passwordApp, 
    },
});

// Função para enviar email
async function enviarEmail({ nome, email, assunto, mensagem }) {
  const mailOptions = {
    from: `"${nome}" <${email}>`,
    to: "devescorpion@gmail.com",
    subject: assunto,
    html: `
      <div style="background: url('../allGames/elements/background.svg'); height:100vh; width:100vw">
        Nome: ${nome}
        E-mail: ${email}
        Mensagem: ${mensagem}
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Rota de envio
app.post("/enviar-email", async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;
    await enviarEmail({ nome, email, telefone, mensagem });
    res.status(200).send({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).send({ success: false, message: "Erro ao enviar o email." });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
