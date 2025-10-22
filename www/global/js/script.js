//Animação ao rolar o scrool

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');
  
    // Dicionário para armazenar timers de animação de saída
    const exitTimers = new Map();
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target;
        const animationClass = target.getAttribute('data-animation');
  
        if (entry.isIntersecting) {
          if (exitTimers.has(target)) {
            clearTimeout(exitTimers.get(target));
            exitTimers.delete(target);
          }
  
          // Adiciona a animação de entrada
          if (animationClass) {
            target.setAttribute('style', `animation:${animationClass};animation-duration:1s;`);
            target.style.opacity = "1";
          }
        } else {
            const timer = setTimeout(() => {
              target.removeAttribute('style');
            }, 2000);
            target.style.opacity = "0";
            exitTimers.set(target, timer);
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});

// Setor responsavel pela abertura e fechamento do menu

const btnMenu = document.querySelector('.btnMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
  menu.classList.remove('animate__slideOutLeft');
  menu.classList.add('activeMenu', 'animate__animated', 'animate__slideInLeft');
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('animate__slideInLeft');
  menu.classList.add('animate__slideOutLeft')
  setTimeout(() => {
      menu.classList.remove('activeMenu');
  }, 1000);
})

// Funcionalidade do menu que vai pegar o valor clicado pelo usuário e usa-lo para filtrar a 
// geração

document.addEventListener('click', (element) => {
  const elemento = element.target;
  const idElement = elemento.id

  function redirecionar (generation) {
    localStorage.setItem('generation', generation);
    
    //Redireciona o usuário para a tela inicial
    function tryRedirect(url1, url2) {
      const img = new Image();
      img.onload = () => {
        // Se carregar, redireciona pro primeiro link
        window.location.href = url1;
      };
      img.onerror = () => {
        // Se der erro, vai pro segundo link
        window.location.href = url2;
      };
      img.src = url1; // testa se existe
    }

    // Uso
    tryRedirect('../www/', '../../');
  }

  if (idElement == 'kanto') {
    redirecionar(0);
  }else if (idElement == 'johto') {
    redirecionar(1);
  }else if (idElement == 'hoenn') {
    redirecionar(2);
  }else if (idElement == 'sinnoh') {
    redirecionar(3);
  }else if (idElement == 'unova') {
    redirecionar(4);
  }else if (idElement == 'kalos') {
    redirecionar(5);
  }else if (idElement == 'alola') {
    redirecionar(6);
  }
  else if (idElement == 'galar') {
    redirecionar(7);
  }
  else if (idElement == 'paldea') {
    redirecionar(8);
  }
})

document.addEventListener('deviceready', () => {
  // pega o plugin App do Capacitor
  const App = Capacitor.Plugins.App;

  App.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back(); // volta para a tela anterior
    } else {
      // se não tiver mais histórico, não faz nada (impede sair do app)
      console.log('Botão voltar pressionado, mas não há página anterior.');
    }
  });
});

// Funcionalidade do caixas de aviso

export class Notification {
  createMsg (body) {
    this.body = body;
    const content = document.createElement('div');
    const logoMsg = document.createElement('img');
    const msg = document.createElement('p');

    this.msg = msg;
    this.logoMsg = logoMsg;

    this.content = content;

    // Estilos do content
    content.style.height = '60px';
    content.style.display = 'flex';
    content.style.justifyContent = 'left';
    content.style.overflow = 'hidden';
    content.style.alignItems = 'center';
    content.style.width = '200px';
    content.style.borderRadius = '50px'
    content.style.padding = '10px 20px';
    content.style.gap = '15px';
    content.style.position = 'fixed';
    content.style.top = '10vh';
    content.style.right = '2vw';
    content.style.background = '#DB2323';
    content.style.zIndex = '99';
    content.classList.add('animate__animated', 'opacity')

    // Estilos do logo da mensagem do content
    logoMsg.style.height = "90%";
    logoMsg.style.width = "auto";
    
    // Estilos da mensagem do content
    msg.style.fontSize = "1em";
    msg.style.color = "#ffffff";
    msg.style.textAlign = "center";

    content.appendChild(logoMsg)
    content.appendChild(msg)

    this.body.appendChild(content)
  }

  error() {
    this.content.classList.remove('animate__fadeOutRight');
    this.content.classList.add('animate__fadeInRight');
    this.logoMsg.src = 'https://cdn-icons-png.flaticon.com/512/3416/3416079.png';
    this.msg.innerHTML = "Email Not Set";
    setTimeout(() => {
      this.content.classList.remove('animate__fadeInRight');
      this.content.classList.add('animate__fadeOutRight');
    }, 4000)
  }

  warning() {
    this.content.classList.remove('animate__fadeOutRight');
    this.content.classList.add('animate__fadeInRight');
    this.logoMsg.src = 'https://cdn-icons-png.flaticon.com/512/552/552744.png';
    this.msg.innerHTML = "Wrong Data";
    setTimeout(() => {
      this.content.classList.remove('animate__fadeInRight');
      this.content.classList.add('animate__fadeOutRight');
    }, 4000)
  }

  success() {
    this.content.classList.remove('animate__fadeOutRight');
    this.content.classList.add('animate__fadeInRight');
    this.logoMsg.src = 'https://cdn-icons-png.flaticon.com/512/18452/18452147.png';
    this.msg.innerHTML = "Email Sent";
    setTimeout(() => {
      this.content.classList.remove('animate__fadeInRight');
      this.content.classList.add('animate__fadeOutRight');
    }, 4000)
  }

  ignorar() {
    console.log("Ignorado");
    
  }
}

const notification = new Notification();

notification.createMsg(document.querySelector('body'))
