const buttonForm = document.querySelector('.buttonForm');

  buttonForm.addEventListener('click', async (e) => {
    e.preventDefault();

    const nome = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const assunto = document.querySelector('.subject').value;
    const mensagem = document.querySelector('.description').value;

    console.log(email, nome, assunto, mensagem);
    

    try {
      const response = await fetch('http://192.168.1.135:3000/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, assunto, mensagem })
      });

      const result = await response.json();
    } catch (error) {
      alert('Erro ao enviar o email 😿');
    }
  });
