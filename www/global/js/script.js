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



