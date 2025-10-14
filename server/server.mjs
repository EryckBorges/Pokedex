import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// --- ⚙️ Variável de ambiente (configure na Vercel depois)
const passwordApp = process.env.PASSWORD_APP;

// --- Nodemailer config ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eryckborges2502@gmail.com",
    pass: passwordApp,
  },
});

// --- Função de envio de e-mail ---
async function enviarEmail({ nome, email, assunto, mensagem }) {
  const mailOptions = {
    from: `"${nome}" <${email}>`,
    to: "devescorpion@gmail.com",
    subject: assunto,
    html: `
      <body style="background:white;background-image: url('https://i.imgur.com/p6pENfN.png'); background-position: center;background-repeat: repeat; height:auto; min-height:50vh; width:100%">
        <div style="background-image: url('https://i.imgur.com/CyxwVgi.png'); background-position: center;background-size:cover;background-repeat: no-repeat; height:15vh; width:100%"></div>
        <div>
          <div style="display:flex; justify-content:center; align-items:center; background:white;height:auto; margin-bottom:10px; border-radius:20px; padding:10px;">
            <img src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png" style="width:50px; height:auto">
            <p style="font-size:1.2em; font-weight:bold; margin-left:10px;">${nome}</p>
          </div>
          <div style="display:flex; justify-content:center; align-items:center; background:white;height:auto; border-radius:20px; padding:10px; margin-bottom:10px">
            <img src="https://cdn-icons-png.flaticon.com/512/542/542689.png" style="width:50px; height:auto">
            <p style="font-size:1.2em; font-weight:bold; margin-left:10px;">${email}</p>
          </div>
          <div style="display:flex; justify-content:center; align-items:center; background:white;height:auto;border-radius:20px; margin-bottom:10px;">
            <p style="font-size:1.2em; font-weight:bold;color:black; padding:10px">${mensagem}</p>
          </div>
        </div>
      </body>
      <footer style="background: black !important; width:100%; height:30vh;"></footer>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// --- Rota principal ---
app.get("/", (req, res) => {
  res.send("Servidor Vercel ativo UwU");
});

// --- Rota de envio de e-mail ---
app.post("/enviar-email", async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;
    await enviarEmail({ nome, email, assunto, mensagem });
    res.status(200).send({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).send({ success: false, message: "Erro ao enviar o email." });
  }
});

// --- ⚠️ NADA DE app.listen() ---
// A Vercel cuida disso automaticamente
export default app;
