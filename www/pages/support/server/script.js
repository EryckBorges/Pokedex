import { Notification } from "../../../global/js/script.js";

const notification = new Notification();

notification.createMsg(document.querySelector('body'))

const form = document.querySelector('form');
const btnForm = document.querySelector('.buttonForm img')

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nome = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let assunto = document.querySelector('.subject').value;
    let mensagem = document.querySelector('.description').value;

    btnForm.classList.add('rotate');

    try {
      const response = await fetch('https://pokedados-server.vercel.app/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, assunto, mensagem })
      });

      const result = await response.json();
      notification.success();
      btnForm.classList.remove('rotate');
      form.reset()
    } catch (error) {
      notification.error();
      btnForm.classList.remove('rotate');
      form.reset()
    }
  });

 