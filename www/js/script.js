const btnMorePokemons = document.querySelector('.buttonMore');
const linePokemon = document.querySelector('.linePokemon');

const geracoesLimit = [0, 151, 251, 386, 493, 649, 721, 809, 905];
const limit = 30;

let geracaoAtual;
const filterRegiao = document.querySelector('#filter');

if (localStorage.getItem('generation')) {
    geracaoAtual = localStorage.getItem('generation');
    filterRegiao.value = localStorage.getItem('generation');
}else {
    geracaoAtual = 0;
    filterRegiao.value = 0;
}

let offset = 0;

// Função para adicionar as tipagem de pokemon

let typesPokemons = (types) => {
    return types.map((typesForPokemons) => `<span>${typesForPokemons.type.name.charAt(0).toUpperCase() + typesForPokemons.type.name.slice(1)}</span>`)
}

// Função para adicionar o pokemon na tela

const constructorNewPokemon = (pokemon) => {
    btnMorePokemons.classList.add('rotateAnimation')
    const div = document.createElement('div');
    div.classList.add("center", "over", "cardPokemon", `${pokemon.types[0].type.name}`, `cardPokemon${pokemon.id}`, "animate__animated", "animate__zoomIn")

    div.innerHTML = `<div class="over center dados width">
                <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                <span class="id">#${pokemon.id}</span>
            </div>
            <div class="center over width contentPokemon">
                <div class="center over types height">
                    ${typesPokemons(pokemon.types).join('')}
                </div>
                <div class="center over pokemon heigth">
                    <img src="./sprites/official-artwork/${pokemon.id}.png" draggable="false" alt="${pokemon.name}">
                </div>
            </div>`

    setTimeout(() => {
        btnMorePokemons.classList.remove('rotateAnimation')
    }, 4000);

    div.addEventListener('click', () => {
        const showPokemon = new ShowPokemonDetails(pokemon, pokemon.id);
        showPokemon.createPageDetails(pokemon);
    })

    return div

}

// Função para poder ter acesso os dados dos pokemons

const loadPokemon = (offset, limit, ordem = 'menorNumber') => {
    pokeApi.getPokemon(offset, limit).then((pokemonsList = []) => {
        // Ordenação por nome
        if (ordem === "a-z") {
            pokemonsList.sort((a, b) => a.name.localeCompare(b.name));
        } else if (ordem === "z-a") {
            pokemonsList.sort((a, b) => b.name.localeCompare(a.name));
        }
        // Ordenação por numero
        if (ordem == 'maiorNumber') {
            pokemonsList.reverse();
        }

        const list = document.querySelector('.linePokemon');
        pokemonsList.forEach((pokemon) => {
            const card = constructorNewPokemon(pokemon);
            list.appendChild(card)
        })
        btnMorePokemons.classList.remove('rotateAnimation');
    }).catch((error) => console.error(error));
}

// Verifica qual a geração que está selecionada para poder exibir a imagem

const verificaGeracao = (geracaoAtual) => {
    offset = geracoesLimit[geracaoAtual];
    loadPokemon(offset, limit)
}

// Ao clicar no botão a pagina adiciona mais pokemons

btnMorePokemons.addEventListener('click', () => {
    offset += limit;
    btnMorePokemons.classList.add('rotateAnimation');

    const qnt = offset + limit

    if (qnt >= geracoesLimit[geracaoAtual + 1]) {
        const newLimit = geracoesLimit[geracaoAtual + 1] - offset;
        loadPokemon(offset, newLimit)
        btnMorePokemons.setAttribute('disabled', '');
    } else {
        loadPokemon(offset, limit)
    }
});

// Seleção de Região

const organizar = document.querySelector("#organizar");

filterRegiao.addEventListener('change', () => {
    let valueRegiao = Number(filterRegiao.value)
    organizar.value = 0;
    switch (valueRegiao) {
        case 0:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 0;
            verificaGeracao(geracaoAtual);
            break;
        case 1:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 1;
            verificaGeracao(geracaoAtual);
            break;
        case 2:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 2;
            verificaGeracao(geracaoAtual);
            break;
        case 3:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 3;
            verificaGeracao(geracaoAtual);
            break;
        case 4:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 4;
            verificaGeracao(geracaoAtual);
            break;
        case 5:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 5;
            verificaGeracao(geracaoAtual);
            break;
        case 6:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 6;
            verificaGeracao(geracaoAtual);
            break;
        case 7:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 7;
            verificaGeracao(geracaoAtual);
            break;
        case 8:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';
            geracaoAtual = 8;
            verificaGeracao(geracaoAtual);
            break;
        default:
            break;
    }
});

organizar.addEventListener('change', () => {
    let valueOrganizar = Number(organizar.value)
    switch (valueOrganizar) {
        case 0:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(offset, limit, 'menorNumber')
            break;
        case 1:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(geracoesLimit[geracaoAtual + 1] - limit, limit, 'maiorNumber')
            break;
        case 2:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(offset, limit, 'a-z')
            break;
        case 3:
            btnMorePokemons.classList.add('rotateAnimation')
            linePokemon.innerHTML = '';

            loadPokemon(offset, limit, 'z-a')
            break;
        default:
            break;
    }
});

// Filtro através de pesquisa por nome ou id de pokemon

const searchPokemonInput = document.querySelector('.inputSearch');
const searchPokemonButton = document.querySelector('.btnSearch');

const filterSearch = (searchPokemon) => {
    linePokemon.innerHTML = ''
    console.log(searchPokemon);

    // Verifica se tem algo na pesquisa

    if (!searchPokemon) {
        verificaGeracao(geracaoAtual);
        return;
    }

    // Url para pegar todos os pokemons que existem e muito mais

    const urlAllPokemons = 'https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=3000';

    fetch(urlAllPokemons)
        .then((results) => results.json())
        .then((jsonDetailsAllPokemon) => {
            const allPokemons = jsonDetailsAllPokemon;

            const verificarSearch = async () => {
                if (!isNaN(searchPokemon)) {
                    const listAllPokemons = allPokemons.results[searchPokemon - 1];
                    console.log(listAllPokemons);

                    const listAllPokemonsUrl = `https://pokeapi.co/api/v2/pokemon-species/${listAllPokemons.name}/`

                    fetch(listAllPokemonsUrl)
                        .then((resultsUrl) => resultsUrl.json())
                        .then((jsonResultsUrl) => {
                            const urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${jsonResultsUrl.id}`
                            fetch(urlIdPokemon)
                                .then((resultsIdPokemonUrl) => resultsIdPokemonUrl.json())
                                .then((dadoPokemonUrlId) => {
                                    const cardSearchPokemon = constructorNewPokemon(dadoPokemonUrlId);
                                    linePokemon.appendChild(cardSearchPokemon)
                                })

                        })
                } else {
                    const listAllPokemons = allPokemons.results
                        .map(poke => poke.name)
                        .filter(poke => poke.startsWith(`${searchPokemon}`))
                        .sort((a, b) => a.localeCompare(b));

                    if (listAllPokemons.length == 0) {
                        const notFound = document.querySelector('.notFound');
                        notFound.classList.add('open');
                        btnMorePokemons.style.display = 'none';
                        setTimeout(() => {
                            searchPokemonInput.value = '';
                            notFound.classList.remove('open');
                            verificaGeracao(geracaoAtual);
                            btnMorePokemons.style.display = 'flex';
                        }, 2000);
                    }

                    for (const nome of listAllPokemons) {
                        const listAllPokemonsUrl = `https://pokeapi.co/api/v2/pokemon-species/${nome}/`;
                        const resultsUrl = await fetch(listAllPokemonsUrl).then(r => r.json());

                        const urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${resultsUrl.id}`;
                        const dadoPokemonUrlId = await fetch(urlIdPokemon).then(r => r.json());

                        const cardSearchPokemon = constructorNewPokemon(dadoPokemonUrlId);
                        linePokemon.appendChild(cardSearchPokemon);
                    }
                }
            }

            verificarSearch();

        })
}

verificaGeracao(geracaoAtual);

// Pesquisa quando preciona o enter

searchPokemonInput.addEventListener('search', () => {
    filterSearch(searchPokemonInput.value.toLowerCase())
})

// Click do botão para pesquisar

searchPokemonButton.addEventListener('click', () => {
    filterSearch(searchPokemonInput.value.toLowerCase())
})

class ShowPokemonDetails {
    constructor(pokemon, id) {
        this.pokemon = pokemon;
        this.id = id;
    }

    addTypePokemon(types) {
        return types.map((typesForPokemons) => `
            <div class="center over column type">
                <img src="./element/types/${typesForPokemons.type.name}.ico" draggable="false" alt="Icone ${typesForPokemons.type.name}">
                <span>
                    ${typesForPokemons.type.name.charAt(0).toUpperCase() + typesForPokemons.type.name.slice(1)}
                </span>
            </div>
        `).join('')
    }

    addMovsPokemon(moves) {
        return moves.moves.map((movsForPokemons) => `
            <span>${movsForPokemons.move.name.charAt(0).toUpperCase() + movsForPokemons.move.name.slice(1)}</span>
        `).join('')
    }

    addDescription(description) {
        let i = 0;

        while (description.flavor_text_entries[i].language.name != "en") {
            i++
        }

        return description.flavor_text_entries[i].flavor_text
    }

    evolutionToPokemon(id) {
        const url = id;

        fetch(url)
            .then(result => result.json())
            .then(async jsonEvolve => {
                // --- Função recursiva pra pegar todas as evoluções e níveis ---
                function getAllEvolutions(chain) {
                    const evolutions = [];

                    function traverse(node) {
                        if (!node) return;

                        evolutions.push({
                            name: node.species.name,
                            level: node.evolution_details?.[0]?.min_level || null
                        });

                        node.evolves_to.forEach(evo => traverse(evo));
                    }

                    traverse(chain);
                    return evolutions;
                }

                const evolutionsData = getAllEvolutions(jsonEvolve.chain);
                const evolutionNames = evolutionsData.map(e => e.name);

                // --- Busca o ID de cada nome ---
                const pokemonsList = await pokeApi.getIdPokemonEvolution(evolutionNames);

                // --- Gera as imagens + nomes + nível ---
                const evolves = pokemonsList.map((pokeId, index) => {
                    const evo = evolutionsData[index];
                    const levelText = evo.level ? `<p>Lvl ${evo.level}</p>` : `<p>—</p>`;

                    return `
                        <div class="evo-card" style="text-align:center;">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png" alt="${evo.name}">
                            <p style="font-weight:bold;">${evo.name}</p>
                            ${levelText}
                        </div>
                    `;
                }).join('');

                const div = `
                    <div class="center over evolutions width">
                        ${evolves}
                    </div>
                `;

                document.querySelector('.evolutionPokemon').innerHTML = div;
            })
            .catch(err => console.error('Erro ao buscar evoluções:', err));
            pokeApi.getIdPokemonEvolution = async function (pokemonNames) {
                const requests = pokemonNames.map(async (name) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    const data = await response.json();
                    return data.id;
                });
            
                return Promise.all(requests);
            };
    }

    createPageDetails() {
        const urlForPokemon = `https://pokeapi.co/api/v2/pokemon-species/${this.id}/`;

        fetch(urlForPokemon)
            .then((result) => result.json())
            .then((details) => {
                const urlForPokemonDetails = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;

                fetch(urlForPokemonDetails)
                    .then((results) => results.json())
                    .then((jsonDetails) => {
                        console.log(jsonDetails);
                        
                        const criePokemon = jsonDetails.cries.latest;
                        const audio = new Audio(criePokemon);
                        audio.play()

                        const main = document.querySelector('main');
                        const header = document.querySelector('header');
                        const detailsPokemon = document.querySelector('.detailsPokemon');
                        const backgroundPokemon = document.querySelector('.backgroundPokemon');
                        const pokemonName = document.querySelector('.pokemonName');
                        const pokedexDados = document.querySelector('.pokedexDados span');
                        const pokemonImage = document.querySelector('.pokemonImage img');
                        const weight = document.querySelector('.weight span');
                        const typesDetails = document.querySelector('.typesDetails');
                        const heightPokemon = document.querySelector('.heightPokemon span');
                        const descPokemons = document.querySelector('.descPokemons p');
                        const movs = document.querySelector('.movs');
                        const body = document.querySelector('body');
                        const hp = document.querySelector('.hp progress');
                        const attack = document.querySelector('.attack progress');
                        const defense = document.querySelector('.defense progress');
                        const specialAttack = document.querySelector('.specialAttack progress');
                        const specialDefense = document.querySelector('.specialDefense progress');
                        const speed = document.querySelector('.speed progress');
                        const evolutionPokemon = document.querySelector('.evolutionPokemon');
                        const infoPokemon = document.querySelector('.infoPokemon');
                        const forms = document.querySelector('.forms');
                        const statistic = document.querySelector('.statistic');

                        // Função para mostrar as estatisticas di pokemon

                        const info = document.querySelector(".info");
                        const esta = document.querySelector(".esta");
                        const form = document.querySelector(".form");
                        const evol = document.querySelector(".evol");

                        const verificaActive = (indice) => {
                            if (indice == 'info') {
                                esta.classList.remove('active');
                                form.classList.remove('active');
                                evol.classList.remove('active');
                                statistic.classList.remove('animate__fadeIn', 'activedDados');
                                forms.classList.remove('animate__fadeIn', 'activedDados');
                                evolutionPokemon.classList.remove('animate__fadeIn', 'activedDados');
                                info.classList.add('active');
                                infoPokemon.classList.add('animate__fadeIn', 'activedDados');
                            } else if (indice == 'esta') {
                                infoPokemon.classList.remove('animate__fadeIn', 'activedDados');
                                forms.classList.remove('animate__fadeIn', 'activedDados');
                                evolutionPokemon.classList.remove('animate__fadeIn', 'activedDados');
                                info.classList.remove('active');
                                form.classList.remove('active');
                                evol.classList.remove('active');
                                esta.classList.add('active');
                                statistic.classList.add('animate__fadeIn', 'activedDados');
                            }else if (indice == 'form') {
                                infoPokemon.classList.remove('animate__fadeIn', 'activedDados');
                                statistic.classList.remove('animate__fadeIn', 'activedDados');
                                evolutionPokemon.classList.remove('animate__fadeIn', 'activedDados');
                                esta.classList.remove('active');
                                info.classList.remove('active');
                                evol.classList.remove('active');
                                form.classList.add('active');
                                forms.classList.add('animate__fadeIn', 'activedDados');
                            }else if (indice == 'evol') {
                                infoPokemon.classList.remove('animate__fadeIn', 'activedDados');
                                forms.classList.remove('animate__fadeIn', 'activedDados');
                                statistic.classList.remove('animate__fadeIn', 'activedDados');
                                esta.classList.remove('active');
                                form.classList.remove('active');
                                info.classList.remove('active');
                                evol.classList.add('active');
                                evolutionPokemon.classList.add('animate__fadeIn', 'activedDados');
                            }
                        }

                        body.style.overflow = "hidden";
                        detailsPokemon.classList.remove('animate__animated', 'animate__fadeOutRight');
                        main.classList.remove('animate__animated', 'animate__fadeInLeft');
                        header.classList.remove('animate__animated', 'animate__fadeInLeft');
                        main.classList.add('animate__animated', 'animate__fadeOutLeft');
                        header.classList.add('animate__animated', 'animate__fadeOutLeft');
                        detailsPokemon.classList.add('actived', 'animate__animated', 'animate__fadeInRight');
                    
                        // Adiciona os dados do pokemon
                        backgroundPokemon.classList.add(jsonDetails.types[0].type.name);
                        pokemonName.innerHTML = details.name.charAt(0).toUpperCase() + details.name.slice(1);
                        pokedexDados.innerHTML = this.id;
                        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${this.id}.gif`;     
                        hp.value = jsonDetails.stats[0].base_stat;
                        attack.value = jsonDetails.stats[1].base_stat;
                        defense.value = jsonDetails.stats[2].base_stat;
                        specialAttack.value = jsonDetails.stats[3].base_stat;
                        specialDefense.value = jsonDetails.stats[4].base_stat;
                        speed.value = jsonDetails.stats[5].base_stat;

                        weight.innerHTML = jsonDetails.weight / 10 + "Kg";
                        typesDetails.innerHTML = this.addTypePokemon(jsonDetails.types);
                        heightPokemon.innerHTML = jsonDetails.height / 10 + "M";
                        descPokemons.innerHTML = this.addDescription(details);
                        movs.innerHTML = this.addMovsPokemon(jsonDetails);
                        
                        // Funcionalidade Para quando o usuário quiser voltar para a tela anterior
                        history.pushState(null, "", location.href);
                        window.addEventListener('popstate', () => {
                            history.pushState(null, "", location.href);
                            body.style.overflow = "scroll";
                            main.classList.remove('animate__animated', 'animate__fadeOutLeft');
                            header.classList.remove('animate__animated', 'animate__fadeOutLeft');
                            detailsPokemon.classList.remove('animate__animated', 'animate__fadeInRight');
                            detailsPokemon.classList.add('animate__animated', 'animate__fadeOutRight');
                            main.classList.add('animate__animated', 'animate__fadeInLeft');
                            header.classList.add('animate__animated', 'animate__fadeInLeft');
                            const evolutions = document.querySelector('.evolutions');
                            const evoCard = document.querySelector('.evo-card');
                            evolutions.removeChild(evoCard)
                            verificaActive('info')
                            setTimeout(() => {
                                detailsPokemon.classList.remove('actived');
                            }, 1000);

                        });

                        // Funcionalidade para mostrar o próximo pokemon ou pokemon anterior
                        const nextBtnPokemon = document.querySelector('.nextPokemon');
                        const backBtnPokemon = document.querySelector('.backPokemon');
                        // Adiciona os listeners apenas uma vez, fora da função createPageDetails
nextBtnPokemon.addEventListener('click', handleNextPokemon);
backBtnPokemon.addEventListener('click', handleBackPokemon);

// Funções de clique
function handleNextPokemon() {
    const nextId = jsonDetails.id + 1; // currentPokemon deve ser global ou acessível
    jsonDetails = new ShowPokemonDetails(jsonDetails.data, nextId);
    jsonDetails.createPageDetails();
}

function handleBackPokemon() {
    const backId = jsonDetails.id - 1;
    jsonDetails = new ShowPokemonDetails(jsonDetails.data, backId);
    jsonDetails.createPageDetails();
}


                        pokemonImage.addEventListener('click', () => {
                            audio.play()
                        })

                        info.addEventListener('click', () => {
                            verificaActive('info');
                        })

                        form.addEventListener('click', () => {
                            verificaActive('form');
                        })

                        evol.addEventListener('click', () => {
                            verificaActive('evol');
                            console.log(details);
                            
                            this.evolutionToPokemon(details.evolution_chain.url)
                        })

                        esta.addEventListener('click', () => {
                            verificaActive('esta');
                        })
                    })
            })
    }
}

