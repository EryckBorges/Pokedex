import { Notification } from '../../../global/js/script.js'

const notification = new Notification();
notification.ignorar()

// Array com os dados dos jogos dos pokemons
const dadosJogosPokemon = [
    // Pokemon Pokopia
    {
        id: 0,
        capasPokemon: './capas/pokopia.jpg',
        descricao: `Play as a Ditto who has taken on the appearance of a human! Meet and befriend other Pokémon as you shape a life for yourself by learning moves to modify the environment. Use Bulbasaur’s Leafage to make wild grass grow, water it with Squirtle’s Water Gun, and more. The more nature flourishes, the more Pokémon will appear for you to meet and learn from!<br><br>Build houses, grow crops, and more in a world with changing days, nights, and weather.`,
        logoPokemon: './logos/pokopia.png',
        trailer: './videos/pokopia.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/store/software/switch2/70010000107421/a13a61db0b2925c21209bec2a4d7d78b6ecf2c06fe691e927d4d9fbc49db4968', 
            'https://portaldogamer.com.br/wp-content/uploads/2025/09/pokemon-pokopio.png', 
            'https://blackcompany.com.br/wp-content/uploads/2025/09/pokemon-pokopia_n279.png',
            'https://img.particlenews.com/image.php?type=thumbnail_580x000&url=09suMH_14ftQekR00',
            'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/09/pokemon-pokopia-switch-2-nintendo-direct-game-rant-4.jpg?q=49&fit=crop&w=825&dpr=2'
        ],
        linkGoogle: 'https://www.google.com/search?q=Pokemon+Pokopia',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-pokopia-switch-2/',
    },
    // Pokemon Z-A
    {
        id: 1,
        capasPokemon: './capas/z-a.webp',
        descricao: `Pokémon Legends: Z-A is an action RPG that takes you into the iconic Lumiose City in the Kalos region, completely redesigned to support humans and Pokémon living together.<br><br>
                    You’ll experience real-time battles: no more turns — Pokémon attack as soon as you give the command, with positioning, dodges, and range management.<br><br>
                    The so-called Wild Zones are located inside the city — wild areas where Pokémon roam freely.<br><br>
                    At night, the “Z-A Royale” mode appears: competitive battles to test who’s at the top.<br><br>
                    Mega Evolution makes a strong comeback: when there’s a deep bond between Trainer and Pokémon, you’ll be able to activate it. There are also Rogue Mega-Evolved Pokémon causing trouble in Lumiose, which you’ll have to face.<br><br>
                    You can choose from three starter Pokémon: Chikorita, Tepig, or Totodile.
        `,
        logoPokemon: './logos/z-a.png',
        trailer: './videos/z-a.mp4',
        galeryPhotos: [
            'https://legends.pokemon.com/_next/image?url=%2Fimages%2Fhomepage%2Fbattle-1-2x.jpg&w=640&q=75', 
            'https://legends.pokemon.com/_next/image?url=%2Fimages%2Fhomepage%2Fbattle-3-2x.jpg&w=640&q=75', 
            'https://legends.pokemon.com/_next/image?url=%2Fimages%2Fhomepage%2Fbattle-2-2x.jpg&w=640&q=75',
            'https://legends.pokemon.com/_next/image?url=%2Fimages%2Fhomepage%2Fbattle-5-2x.jpg&w=640&q=75',
            'https://legends.pokemon.com/_next/image?url=%2Fimages%2Fhomepage%2Fbattle-6-2x.jpg&w=640&q=75'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Z-A',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-legends-z-a-nintendo-switch-2-edition-switch-2/?srsltid=AfmBOoqHtDJiaknJEsecIUW1q8u0Zral8GBnQ-2axu11FS4ds_mlpRYp',
    },
    // Pokemon Scarlet
    {
        id: 2,
        capasPokemon: './capas/scarlet.png',
        descricao: `Catch, battle, and train Pokémon in the Paldea region, a vast area full of lakes, towering peaks, deserts, villages, and expanding cities. Explore the open world at your own pace and travel across land, water, and air riding the legendary Pokémon that changes forms (Koraidon in Pokémon Scarlet and Miraidon in Pokémon Violet). Choose Sprigatito, Fuecoco, or Quaxly as your first Pokémon partner before starting your journey through Paldea.`,
        logoPokemon: './logos/scarlet.webp',
        trailer: './videos/scarlet.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/9e78551e9143c33808225efd398d378b3f73dcd8b812cd07aee9e496a66bcf9b', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/f8ddaa6cfe5d9551504d99e3fc9387c9d8daa6a03fb0d86058dfeb143b566383', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/f7ca9c4e9dd303234d74488fdf350ceca6255b534d71a45fe6f08d4d290416d2',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/81587bec7fac829b80ee9c759e96aebb689e7340de1fb28880244d79c38f55b6',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/b3550976ca7fa327c9f12e3a1f9d7a19a69c382e368ca0de257dd153e1f2d3e4'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Scarlet',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-scarlet-switch/?srsltid=AfmBOoo37iDOqZzfvq1Er8ojGJY-siubb2DqFOqOjs0jJZLbwaQbw1nL',
    },
    // Pokemon Violet
    {
        id: 3,
        capasPokemon: './capas/violet.png',
        descricao: `Catch, battle, and train Pokémon in the Paldea region, a vast area full of lakes, towering peaks, deserts, villages, and expanding cities. Explore the open world at your own pace and travel across land, water, and air riding the legendary Pokémon that changes forms (Koraidon in Pokémon Scarlet and Miraidon in Pokémon Violet). Choose Sprigatito, Fuecoco, or Quaxly as your first Pokémon partner before starting your journey through Paldea.`,
        logoPokemon: './logos/violet.webp',
        trailer: './videos/scarlet.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/9e78551e9143c33808225efd398d378b3f73dcd8b812cd07aee9e496a66bcf9b', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/f8ddaa6cfe5d9551504d99e3fc9387c9d8daa6a03fb0d86058dfeb143b566383', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/f7ca9c4e9dd303234d74488fdf350ceca6255b534d71a45fe6f08d4d290416d2',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/81587bec7fac829b80ee9c759e96aebb689e7340de1fb28880244d79c38f55b6',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053966/b3550976ca7fa327c9f12e3a1f9d7a19a69c382e368ca0de257dd153e1f2d3e4'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Violet',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-violet-switch/?srsltid=AfmBOorswv9Z_PkOl7ha14X7pRb8MT1WHQd62QboTvvs3WZipf-pYW_p',
    },
    // Pokemon Arceus
    {
        id: 4,
        capasPokemon: './capas/arceus.jpg',
        descricao: `Get ready for a brand-new Pokémon adventure in Pokémon™ Legends: Arceus, an all-new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Embark on research missions in the ancient Hisui region. Explore vast natural landscapes to capture wild Pokémon, learning their behavior, sneaking up on them, and throwing a well-aimed Poké Ball™. You can also toss a Poké Ball containing your partner Pokémon near a wild Pokémon to seamlessly enter battle. Travel across land, sea, and sky on the backs of Pokémon to explore every corner of the Hisui region.<br><br>Your adventure takes place in the vast natural expanse of the Hisui region, where you are tasked with studying Pokémon to complete the region’s very first Pokédex. Mount Coronet rises from the center, surrounded on all sides by areas with distinct environments. In this era—long before the events of Pokémon Brilliant Diamond and Pokémon Shining Pearl—you can encounter newly discovered Pokémon like Wyrdeer, an evolution of Stantler, as well as new regional forms such as Hisuian Growlithe, Hisuian Zorua, and Hisuian Zoroark! Along the way, uncover the mystery surrounding the Mythical Pokémon known as Arceus.`,
        logoPokemon: './logos/arceus.png',
        trailer: './videos/arceus.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039945/745cb0a8097d1b3465dd31147bbe05fc5ce39ed37807c2b0c3961e909dc0bf1d', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039945/292f0449942197213b5186b18e23145ce984974e9cac2c4fdc8c4cbc8ead6186', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039945/a7f9a73b5deaa0ecefe467296111673788a97db9e32642b4cd556c6573965f0d',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039945/e9970635c91c429286ad0361b3431bb05f662b7c88569bf11fde9891fc9ded0f',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039945/320ffb4e290966aca9416e78008ff1798cc47c8fccae54443becae37c43ecb30'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Arceus',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-legends-arceus-switch/?srsltid=AfmBOopJYUGxQEtE9Z5PBEmmXDZZ_OtuLD1n02UbqvNamBO2D9M5R6Pr',
    },
    // Pokemon Brilliant Diamond
    {
        id: 5,
        capasPokemon: './capas/brilliantDiamond.png',
        descricao: `Welcome to the Sinnoh region! Rich in nature and with the mighty Mount Coronet at its core, Sinnoh is a land of many myths passed down through generations. You will be able to choose Turtwig, Chimchar, or Piplup as your first partner Pokémon and then set off on your journey to become the Champion of the Pokémon League. Along the way, you will encounter the mysterious Team Galactic and may come across the Legendary Pokémon Dialga.<br><br>Use the Explorer Kit you’ll receive during your adventure to visit the Grand Underground! Here, you can unearth Pokémon Fossils and valuable treasures, including statues for your very own Secret Base. You can also visit areas called Pokémon Hideaways, where you’ll encounter Pokémon living in a variety of different environments—some Pokémon can only be found in these Hideaways. Set off on an adventure in the Grand Underground with other players through local or online* communication on your Nintendo Switch system`,
        logoPokemon: './logos/diamond.png',
        trailer: './videos/diamond.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039950/98f268a8e539178302827e8bd770a3d273d1dd18890f68f87f93589f8deb4be5', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039950/080d47d081a28d427e2cb3f4fe420a22c548caba89a169b1b68df38eedff9431', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039950/59fa405e0614bf4a1c78336ed4bb5c318e5f57501d51d227803531461f5326f8',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039950/62fc3af5a3307232017506346084734726ea69525df7033fff5de241e45ce0d6',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039950/cc71fb98b8d64c0723598cde01a620afe4c3022c825a2b8956bd02efc1ee1af2'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Brilliant+Diamond',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-brilliant-diamond-switch/?srsltid=AfmBOopJ5A0Uja_GR7GqHMyP-Dp50N_0vUwChvHA_XFHW2msGqHUAXUu',
    },
    // Pokemon Shining Pearl
    {
        id: 6,
        capasPokemon: './capas/shiningPearl.png',
        descricao: `Welcome to the Sinnoh region! Rich in nature and with the mighty Mount Coronet at its core, Sinnoh is a land of many myths passed down through generations. You will be able to choose Turtwig, Chimchar, or Piplup as your first partner Pokémon and then set off on your journey to become the Champion of the Pokémon League. Along the way, you will encounter the mysterious Team Galactic and may come across the Legendary Pokémon Dialga.<br><br>Use the Explorer Kit you’ll receive during your adventure to visit the Grand Underground! Here, you can unearth Pokémon Fossils and valuable treasures, including statues for your very own Secret Base. You can also visit areas called Pokémon Hideaways, where you’ll encounter Pokémon living in a variety of different environments—some Pokémon can only be found in these Hideaways. Set off on an adventure in the Grand Underground with other players through local or online* communication on your Nintendo Switch system`,
        logoPokemon: './logos/shiningPearl.png',
        trailer: './videos/diamond.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039955/98f268a8e539178302827e8bd770a3d273d1dd18890f68f87f93589f8deb4be5', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039955/080d47d081a28d427e2cb3f4fe420a22c548caba89a169b1b68df38eedff9431', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039955/78b175341f1bb0b931c39fe8641218b14cc4933070221b7f05d63e270d1602f9',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039955/cc71fb98b8d64c0723598cde01a620afe4c3022c825a2b8956bd02efc1ee1af2',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000039955/62fc3af5a3307232017506346084734726ea69525df7033fff5de241e45ce0d6'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Shining+Pearl',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-shining-pearl-switch/?srsltid=AfmBOoobJGpDG9dzPjEkw1HY6VxoIVH0pKYBRK-qX9hOrCns-WbyIda1',
    },
    // Pokemon Sword
    {
        id: 7,
        capasPokemon: './capas/sword.png',
        descricao: `A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then, set out on a journey across the new Galar region, where you’ll challenge the troublemakers of Team Yell while uncovering the mysteries behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where players can freely control the camera. Join up with three other players locally or online in the new cooperative multiplayer mode, Max Raid Battles, where players take on Pokémon that are truly gigantic in size and strength thanks to the Dynamax phenomenon.<br><br>Some Pokémon can even undergo Gigantamax transformations, changing their appearance and gaining access to powerful G-Max Moves. But becoming a Champion isn’t just about honing your battle skills: by visiting shops in town, you can pick your own outfits and hairstyles to become exactly the Trainer you want to be. On your journey, you’ll encounter newly discovered Pokémon, as well as some you already know—though a bit different in their unique Galarian forms! You’ll also have new ways to level up your Pokémon by assigning them Poké Jobs; and just for fun, you can spend time with them at Pokémon Camp!`,
        logoPokemon: './logos/sword.png',
        trailer: './videos/sword.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/31ee74fe5360c4e76f72a6a4747c0771a4d6cd1a88d00690ea2f97caa9b16009', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/7efd9a639826a4cd4eb655ad489a882e9ab9c2f2cd28fad2e9b589c9630a730b', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/ed2ec03e6aa1f54c7d1c809dfd345b18cc2bd35f5726080689d4eb818ddf0b06',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/c49172b16b091d661750c2d2b9e70e263f29ce20abf47dda6bd78a8273cd7fa0',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/436a4088cf4346d24ab7d52b4207f9ac5e30963272dbcb3aa0f6aa1d206cfbfe'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Sword',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-sword-switch/?srsltid=AfmBOooxxs5hDnJHnd9LTi4fPqrpt1VGbu3-5_K_SoIu0szufYuZGvHB',
    },
    // Pokemon Shield
    {
        id: 8,
        capasPokemon: './capas/shield.png',
        descricao: `A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then, set out on a journey across the new Galar region, where you’ll challenge the troublemakers of Team Yell while uncovering the mysteries behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where players can freely control the camera. Join up with three other players locally or online in the new cooperative multiplayer mode, Max Raid Battles, where players take on Pokémon that are truly gigantic in size and strength thanks to the Dynamax phenomenon.<br><br>Some Pokémon can even undergo Gigantamax transformations, changing their appearance and gaining access to powerful G-Max Moves. But becoming a Champion isn’t just about honing your battle skills: by visiting shops in town, you can pick your own outfits and hairstyles to become exactly the Trainer you want to be. On your journey, you’ll encounter newly discovered Pokémon, as well as some you already know—though a bit different in their unique Galarian forms! You’ll also have new ways to level up your Pokémon by assigning them Poké Jobs; and just for fun, you can spend time with them at Pokémon Camp!`,
        logoPokemon: './logos/shield.webp',
        trailer: './videos/sword.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/31ee74fe5360c4e76f72a6a4747c0771a4d6cd1a88d00690ea2f97caa9b16009', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/7efd9a639826a4cd4eb655ad489a882e9ab9c2f2cd28fad2e9b589c9630a730b', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/ed2ec03e6aa1f54c7d1c809dfd345b18cc2bd35f5726080689d4eb818ddf0b06',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/c49172b16b091d661750c2d2b9e70e263f29ce20abf47dda6bd78a8273cd7fa0',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000004496/436a4088cf4346d24ab7d52b4207f9ac5e30963272dbcb3aa0f6aa1d206cfbfe'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Shield',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-shield-switch/?srsltid=AfmBOop8E6ZQcLiUMgyWzAHxHRjfka_isi8cG12TuYtYZJGC41Z9bti2',
    },
    // Pokemon Let's Go Pikachu
    {
        id: 9,
        capasPokemon: './capas/pikachu.jpg',
        descricao: `Partner up with Pikachu to capture and collect Pokémon in a diverse and vibrant adventure in Pokémon™: Let’s Go, Pikachu!, now available on the Nintendo Switch™ system! Become the best Pokémon Trainer you can be as you battle other Trainers, Gym Leaders, and the sinister Team Rocket. Use the throwing motion to catch Pokémon in the wild with a Joy-Con controller or a Poké Ball™ Plus accessory (sold separately), which lights up, vibrates, and makes sounds to bring your adventure to life. You can also use button controls in handheld mode. Share your adventure with friends and family using an additional Joy-Con or Poké Ball Plus. You can even connect the game to the Pokémon™ GO app on a compatible smart device to transfer Pokémon originally discovered in the Kanto region!<br><br>Explore the vibrant Kanto region, home to beloved characters like Brock, Misty, and the infamous trio Jessie, James, and Meowth! Throughout the story, your bond with your partner Pokémon grows stronger as you travel together. Journey in style by customizing Pikachu and your Trainer with a variety of outfits. Wild Pokémon roam the game world in natural sizes—catch them like a true Pokémon Trainer by using a Poké Ball™ at just the right place and time. Battle and trade Pokémon with other players who own the game via local wireless or online connections. Take your favorite Pokémon for a stroll in your Poké Ball Plus to help it gain levels and receive rewards when it returns to the game. Connect with Pokémon GO* to transfer Pokémon caught in the Kanto region into this game, including Shiny and Alolan forms, as well as the newly discovered Pokémon Meltan!`,
        logoPokemon: './logos/pikachu.png',
        trailer: './videos/pikachu.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000447/1932f76f19396837e45c6e17c74f215426a27254a74a46fe28ae057763273811', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000447/bce9534267d7b0c14b368c4328dada108e1fbc50b6d351c83bd4578a8bc75173', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000447/52f28c6cb638b37eb456b2e0e0561d12988ef0c6969348d8fdb9cc8e0e180c41',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000447/7658806fd0e0d609dd9d06f3b11e64c1d8a2662b642e76862d7c9f5d6c71c4af',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000447/0094ea8ce977c89e398a24177b497f7e307f3b6d4050f64c16bd642f118abe34'
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Let's+go+Pikachu",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-lets-go-pikachu-switch/?srsltid=AfmBOorg8yKY23Cd7GSTh1C_HIjTYXtUxQVjHuAIEKd6PAgmr86LqNYv',
    },
    // Pokemon Let's Go Eevee
    {
        id: 10,
        capasPokemon: './capas/eevee.jpg',
        descricao: `Partner up with Pikachu to capture and collect Pokémon in a diverse and vibrant adventure in Pokémon™: Let’s Go, Pikachu!, now available on the Nintendo Switch™ system! Become the best Pokémon Trainer you can be as you battle other Trainers, Gym Leaders, and the sinister Team Rocket. Use the throwing motion to catch Pokémon in the wild with a Joy-Con controller or a Poké Ball™ Plus accessory (sold separately), which lights up, vibrates, and makes sounds to bring your adventure to life. You can also use button controls in handheld mode. Share your adventure with friends and family using an additional Joy-Con or Poké Ball Plus. You can even connect the game to the Pokémon™ GO app on a compatible smart device to transfer Pokémon originally discovered in the Kanto region!<br><br>Explore the vibrant Kanto region, home to beloved characters like Brock, Misty, and the infamous trio Jessie, James, and Meowth! Throughout the story, your bond with your partner Pokémon grows stronger as you travel together. Journey in style by customizing Pikachu and your Trainer with a variety of outfits. Wild Pokémon roam the game world in natural sizes—catch them like a true Pokémon Trainer by using a Poké Ball™ at just the right place and time. Battle and trade Pokémon with other players who own the game via local wireless or online connections. Take your favorite Pokémon for a stroll in your Poké Ball Plus to help it gain levels and receive rewards when it returns to the game. Connect with Pokémon GO* to transfer Pokémon caught in the Kanto region into this game, including Shiny and Alolan forms, as well as the newly discovered Pokémon Meltan!`,
        logoPokemon: './logos/eevee.png',
        trailer: './videos/eevee.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000450/771cb88f521c207aa1e6e2f218513c44c0400c3526c11f3c2f128907feafeec3', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000450/ab6bfba08d011b6452497b95342c999d4618844d9eb1198f1291001b3721fd13', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000450/e8e1f203fc2d8ead2c7542e78e97675a01c0291180a7b8e1afe0d1488b05ada9',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000450/8e1cdb55150575a161611ac27c0e7cb51d5efabfaa9fb606b8825ddbd6bcde0d',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000000450/26499388750145229f5b819c57c2e7e6ecf86edb4c7f33ba18f50630edf4d10f'
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Let's+go+Eevee",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-lets-go-eevee-switch/?srsltid=AfmBOoqdHoQKn9GrKiNar1Xtno8Xy_OLwsPmhnoBBxo7voo5ADE7ZisT',
    },
    // Pokemon Ultra Sun
    {
        id: 11,
        capasPokemon: './capas/ultra.jpg',
        descricao: `Sinister black clouds are forming in the sky, over the Alola region: the setting of Pokémon Ultra Sun and Pokémon Ultra Moon. In Pokémon Ultra Sun and Pokémon Ultra Moon, a large-scale story unfolds, featuring the Legendary Pokémon Solgaleo, Lunala, and Necrozma. The secrets about Necrozma and the Alola region, well kept in the previous games, will be revealed here.<br><br>In Pokémon Ultra Sun and Pokémon Ultra Moon, you will be able to venture into the various worlds that exist beyond these Ultra Wormholes. Inside an Ultra Wormhole, there are countless temporal passages that lead to different worlds. Explore different worlds by crossing through these passages! You may even visit the home worlds of those Pokémon known as Ultra Beasts!`,
        logoPokemon: './logos/ultra.webp',
        trailer: './videos/ultra.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Solgaleo_Lunala_UltraWormhole_Art_image600w.jpg', 
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Main_Character_image600w.jpg', 
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Mantine_Surf_Illustration_CMM_big.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Alola_PhotoClub_image600w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Photo_Club_04.jpg'
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Ultra+Sun",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html',
    },
    // Pokemon Ultra Moon
    {
        id: 12,
        capasPokemon: './capas/ultraMoon.jpg',
        descricao: `Sinister black clouds are forming in the sky, over the Alola region: the setting of Pokémon Ultra Sun and Pokémon Ultra Moon. In Pokémon Ultra Sun and Pokémon Ultra Moon, a large-scale story unfolds, featuring the Legendary Pokémon Solgaleo, Lunala, and Necrozma. The secrets about Necrozma and the Alola region, well kept in the previous games, will be revealed here.<br><br>In Pokémon Ultra Sun and Pokémon Ultra Moon, you will be able to venture into the various worlds that exist beyond these Ultra Wormholes. Inside an Ultra Wormhole, there are countless temporal passages that lead to different worlds. Explore different worlds by crossing through these passages! You may even visit the home worlds of those Pokémon known as Ultra Beasts!`,
        logoPokemon: './logos/ultraMoon.webp',
        trailer: './videos/ultra.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Story_Illustration_image600w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Solgaleo_Lunala_UltraWormhole_Art_image600w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Main_Character_image600w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Alola_PhotoClub_image600w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonultrasunultramoon/CI_3DS_PokemonUltraSunUltraMoon_Photo_Club_04.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Ultra+Moon",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Moon-1231705.html',
    },
    // Pokemon Sun
    {
        id: 13,
        capasPokemon: './capas/sun.jpg',
        descricao: `The Pokémon Sun and Pokémon Moon video games take place in an archipelago of tropical islands: four islands full of nature and one artificial island. The Alola region is known as a resort that attracts tourists from all over the world.<br><br>It is surrounded by the sea and features great ecological diversity, with Pokémon native to the region as well as Pokémon that have only recently arrived in Alola from other regions. In Alola, humans and Pokémon coexist in a very close relationship, having developed a culture different from that of other regions.`,
        logoPokemon: './logos/sun.webp',
        trailer: './videos/sun.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI_3DS_PokemonSunMoon_AlolaRegionMap_image950w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI7_3DS_PokemonSunMoon_PokeRide_CMM_big.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI_3DS_PokemonSunMoon_RotomPokedex_image950w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI_3DS_PokemonSunMoon_PokeFinder_MS7_image950w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI7_3DS_PokemonSunMoon_FestivalPlaza_CMM_big.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Sun",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Sun-1092368.html?srsltid=AfmBOopFNQG4KZIASYcX1fn9JVRg6I-f_H_EHt-P3075XEa4jeSnP0kT',
    },
    // Pokemon Moon
    {
        id: 14,
        capasPokemon: './capas/moon.png',
        descricao: `The Pokémon Sun and Pokémon Moon video games take place in an archipelago of tropical islands: four islands full of nature and one artificial island. The Alola region is known as a resort that attracts tourists from all over the world.<br><br>It is surrounded by the sea and features great ecological diversity, with Pokémon native to the region as well as Pokémon that have only recently arrived in Alola from other regions. In Alola, humans and Pokémon coexist in a very close relationship, having developed a culture different from that of other regions.`,
        logoPokemon: './logos/moon.png',
        trailer: './videos/sun.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI_3DS_PokemonSunMoon_AlolaRegionMap_image950w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI7_3DS_PokemonSunMoon_PokeRide_CMM_big.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI_3DS_PokemonSunMoon_RotomPokedex_image950w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI_3DS_PokemonSunMoon_PokeFinder_MS7_image950w.jpg',
            'https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_3ds_12/3ds_pokemonsunmoon/CI7_3DS_PokemonSunMoon_FestivalPlaza_CMM_big.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Moon",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Moon-1092369.html?srsltid=AfmBOoqzdn41_U7cgPCICkiRZ1IzQ3Ol7dClZmcj9zT8wFAKUWCiCHyA',
    },
    // Pokemon Omega Ruby
    {
        id: 15,
        capasPokemon: './capas/ruby.webp',
        descricao: `Enter the Hoenn region and explore this land, where two major organizations, Team Magma and Team Aqua, stand in opposition. The former seeks to expand the landmass of the Hoenn region and wields more power, while Team Aqua aims to raise the oceans and plays a more prominent role in Pokémon Alpha Sapphire. In either version, you will find yourself immersed in the heart of the conflict!<br><br>The story begins when you move to Littleroot Town, where you have the chance to choose one of three Pokémon to accompany you on your adventure: Treecko, the Grass type, Torchic, the Fire type, and Mudkip, the Water type. Regardless of which you choose, raising your Pokémon with care is always important for anyone who wants a strong partner. Under the right circumstances, it may even be able to perform a stunning Mega Evolution, allowing it to unleash even greater strength. Keep an eye out for two newly revealed Legendary Pokémon called Groudon and Kyogre, the creators of land and sea respectively. Each of them possesses a newly discovered transformation known as "Primal Reversion."`,
        logoPokemon: './logos/omega.webp',
        trailer: './videos/omega.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_24_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_16_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_19_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_22_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_03_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Omega+Ruby",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Omega-Ruby-893014.html?srsltid=AfmBOorxXyTEdTxz9FUtdqc5RvjP7A0B0AdrtXZKWPw8WwJBIvoMxm5p#Introdu__o',
    },
    // Pokemon Alpha Sapphire
    {
        id: 16,
        capasPokemon: './capas/alphaSapphire.png',
        descricao: `Enter the Hoenn region and explore this land, where two major organizations, Team Magma and Team Aqua, stand in opposition. The former seeks to expand the landmass of the Hoenn region and wields more power, while Team Aqua aims to raise the oceans and plays a more prominent role in Pokémon Alpha Sapphire. In either version, you will find yourself immersed in the heart of the conflict!<br><br>The story begins when you move to Littleroot Town, where you have the chance to choose one of three Pokémon to accompany you on your adventure: Treecko, the Grass type, Torchic, the Fire type, and Mudkip, the Water type. Regardless of which you choose, raising your Pokémon with care is always important for anyone who wants a strong partner. Under the right circumstances, it may even be able to perform a stunning Mega Evolution, allowing it to unleash even greater strength. Keep an eye out for two newly revealed Legendary Pokémon called Groudon and Kyogre, the creators of land and sea respectively. Each of them possesses a newly discovered transformation known as "Primal Reversion."`,
        logoPokemon: './logos/alpha.webp',
        trailer: './videos/omega.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_24_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_27_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_18_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_17_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonoras/3DS_PokemonORAS_08_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Alpha+Sapphire",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Alpha-Sapphire-894321.html',
    },
    // Pokemon X
    {
        id: 17,
        capasPokemon: './capas/x.png',
        descricao: `In Pokémon X, your Pokémon adventure takes on a new dimension, as in 3D every corner of the Kalos region comes to life—from the cobblestone streets of Lumiose City to the most secluded parts of the forests. This city is a bustling metropolis, and whether it’s at the iconic tower at its center or in the lively shops full of customers, you’ll surely find plenty to discover.<br><br>There are many newly discovered Pokémon to encounter, including Gogoat, a Grass-type Pokémon so large it can carry people on its back; Sylveon, an Evolution of Eevee; and the Legendary Pokémon Xerneas. There is also a mysterious Pokémon somehow connected to Mewtwo.`,
        logoPokemon: './logos/x.webp',
        trailer: './videos/xy.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_17_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_5_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_3_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_13_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_1_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+X",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-X-766699.html?srsltid=AfmBOooqC8e7hUkrNnrw4nAGkrS03vXIu2CHJO58aYiUCmacwnTD6Vex',
    },
    // Pokemon Y
    {
        id: 18,
        capasPokemon: './capas/y.jpeg',
        descricao: `In Pokémon Y, your Pokémon adventure takes on a new dimension, as in 3D every corner of the Kalos region comes to life—from the cobblestone streets of Lumiose City to the most secluded parts of the forests. This city is a bustling metropolis, and whether it’s at the iconic tower at its center or in the lively shops full of customers, you’ll surely find plenty to discover.<br><br>There are many newly discovered Pokémon to encounter, including Gogoat, a Grass-type Pokémon so large it can carry people on its back; Sylveon, an Evolution of Eevee; and the Legendary Pokémon Yveltal. There is also a mysterious Pokémon somehow connected to Mewtwo.`,
        logoPokemon: './logos/y.webp',
        trailer: './videos/xy.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_7_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_11_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_9_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_2_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonx_y/3DS_PokemonXY_17_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Y",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Y-766700.html?srsltid=AfmBOoow5VfnpwKTTi0Vv5Z5ZtKPARtH2q8IIWSbclNgsoOZ2Y7NVUdN',
    },
    // Pokemon Black Version 2
    {
        id: 19,
        capasPokemon: './capas/black2.webp',
        descricao: `Pokémon Black Version 2 takes players back to the Unova region, two years after Pokémon Black Version and Pokémon White Version. Although this game takes place in a familiar region, there are many new areas to discover and changes to places you already know. One new area is Virbank City, home to the Pokéstar Studios, which you can visit. You’ll even have the chance to create and star in your own movie with your favorite Pokémon and premiere it in the in-game theater. The audience will then rate it based on your storyline choices and the sequences of moves used in battle. If the movie is a success, you can shoot more films or even create sequels to existing ones. Film categories include, among many others, “romantic comedy” and “horror.”<br><br>Pokémon Black Version 2 will also give fans of the original games the chance to reunite with some old friends, as Cheren and Bianca return. Bianca is now Professor Juniper’s assistant, helping her with her Pokémon research, while Cheren has become a Gym Leader and a teacher at a school in Aspertia City, the starting point of this new adventure.`,
        logoPokemon: './logos/black2.webp',
        trailer: './videos/black2.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/AspertiaViewPark02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/AspertiaHome01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/AspertiaGymPokeCen01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/IceBurn_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/FreezeShock_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Black+Version+2",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Black-Version-2-523591.html',
    },
    // Pokemon White Version 2
    {
        id: 20,
        capasPokemon: './capas/white2.webp',
        descricao: `Pokémon White Version 2 also gives fans of the original games the chance to reunite with some old friends, as Cheren and Bianca return. Bianca is now Professor Juniper’s assistant, helping her with her Pokémon research, while Cheren has become a Gym Leader and a teacher at a school in Aspertia City, the starting point of this adventure.<br><br>In Pokémon White Version 2, you’ll also have the opportunity to catch certain Pokémon from outside the Unova region right from the start of the game, such as Eevee, Riolu, Tyranitar, Arcanine, and Mareep. The game also includes rare Pokémon such as the new Therian Formes of Legendary Pokémon: Tornadus, Thundurus, and Landorus.<br><br>You’ll also encounter two new Legendary Pokémon: Black Kyurem and White Kyurem, which appear on the covers of Pokémon Black Version 2 and Pokémon White Version 2. These powerful Legendary Pokémon boast devastating Ice-type moves: Black Kyurem uses Freeze Shock, while White Kyurem comes equipped with Ice Burn. Black Kyurem is only available in Pokémon Black Version 2, while White Kyurem appears exclusively in Pokémon White Version 2.`,
        logoPokemon: './logos/white2.webp',
        trailer: './videos/black2.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/AspertiaViewPark02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/AspertiaHome01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/AspertiaGymPokeCen01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/IceBurn_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonblackandwhite2/FreezeShock_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+White+Version+2",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-White-Version-2-523613.html#Introdu__o',
    },
    // Pokemon Black Version
    {
        id: 21,
        capasPokemon: './capas/black.webp',
        descricao: `New Legendary Pokémon, new heroes, a new region, and many ways for players to have fun and communicate locally are just some of the exciting and innovative surprises offered by Pokémon Black Version and Pokémon White Version for the Nintendo DS.<br><br>Redefining the Pokémon series, Pokémon Black Version and Pokémon White Version provide both fans and newcomers with a completely different adventure to discover. And, for the very first time in the series, the two games feature their own individual areas to explore! Both games take place in Unova, a region far from the familiar Kanto and Johto regions beloved by fans, and introduce new, action-packed locations such as the vibrant urban setting of Castelia City.`,
        logoPokemon: './logos/black.webp',
        trailer: './videos/black.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_13_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_08_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_11_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_21_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Black+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Black-Version-272332.html?srsltid=AfmBOopPXmrO7biC0rrfT4ZXnprrTZu0rm84LevPnaR46KD_gifhQBzl',
    },
    // Pokemon White Version
    {
        id: 22,
        capasPokemon: './capas/white.jpeg',
        descricao: `New Legendary Pokémon, new heroes, a new region, and many ways for players to have fun and communicate locally are just some of the exciting and innovative surprises offered by Pokémon Black Version and Pokémon White Version for the Nintendo DS.<br><br>Redefining the Pokémon series, Pokémon Black Version and Pokémon White Version provide both fans and newcomers with a completely different adventure to discover. And, for the very first time in the series, the two games feature their own individual areas to explore! Both games take place in Unova, a region far from the familiar Kanto and Johto regions beloved by fans, and introduce new, action-packed locations such as the vibrant urban setting of Castelia City.`,
        logoPokemon: './logos/white.webp',
        trailer: './videos/black.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_13_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_08_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_11_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_black_white_engb/BW2_21_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+White+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-White-Version-272486.html',
    },
    // Pokemon Heart Gold Version
    {
        id: 23,
        capasPokemon: './capas/heartGold.jpg',
        descricao: `Get ready for an exciting adventure with Pokémon HeartGold Version and Pokémon SoulSilver Version for the Nintendo DS! Play as a male or female Trainer and battle across the Johto region with your Pokémon to become a Champion!<br><br>Pokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of the original Pokémon Gold Version and Pokémon Silver Version from 2001. Your mission begins in New Bark Town, where you answer the call of the local Pokémon Professor. He will send you on an epic journey where you’ll learn all about the sinister Team Rocket, who will cause all kinds of trouble for Pokémon. Team Rocket was defeated in Pokémon FireRed Version and Pokémon LeafGreen Version, but they have regrouped in the Johto region. What could they be plotting this time? One thing’s for sure—nothing good can be expected from this devious gang...`,
        logoPokemon: './logos/heartGold.webp',
        trailer: './videos/silver.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1508_002_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1508_001_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1508_000_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1726_000_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1916_000_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Heart+Gold+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-HeartGold-Version-272365.html',
    },
    // Pokemon Soul Silver Version 
    {
        id: 24,
        capasPokemon: './capas/soulSilver.jpg',
        descricao: `Get ready for an exciting adventure with Pokémon HeartGold Version and Pokémon SoulSilver Version for the Nintendo DS! Play as a male or female Trainer and battle across the Johto region with your Pokémon to become a Champion!<br><br>Pokémon HeartGold Version and Pokémon SoulSilver Version are enhanced remakes of the original Pokémon Gold Version and Pokémon Silver Version from 2001. Your mission begins in New Bark Town, where you answer the call of the local Pokémon Professor. He will send you on an epic journey where you’ll learn all about the sinister Team Rocket, who will cause all kinds of trouble for Pokémon. Team Rocket was defeated in Pokémon FireRed Version and Pokémon LeafGreen Version, but they have regrouped in the Johto region. What could they be plotting this time? One thing’s for sure—nothing good can be expected from this devious gang...`,
        logoPokemon: './logos/silver.webp',
        trailer: './videos/silver.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1508_002_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1508_001_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1508_000_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1726_000_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_hgss_engb/image100111_1916_000_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Soul+Silver+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-SoulSilver-Version-272475.html',
    },
    // Pokemon Platinum Version
    {
        id: 25,
        capasPokemon: './capas/platinum.jpg',
        descricao: `A thrilling new adventure set in the Sinnoh region of the Pokémon world, full of new features—such as new ways to play online in the Wi-Fi Plaza via the Nintendo Wi-Fi Connection and the ability to save your greatest victories in the Vs. Recorder—will electrify Pokémon fans. An all-new Distortion World, where the laws of space and time do not apply, also emerges, providing an entirely new challenge for the game!<br><br>The epic story of Pokémon Platinum Version revolves around the legendary Renegade Pokémon, Giratina, which appears in its new Forme, the Origin Forme. Many other Legendary Pokémon can also be captured in Pokémon Platinum Version—from Dialga and Palkia to the powerful Lake Trio of Uxie, Azelf, and Mesprit.`,
        logoPokemon: './logos/platinum.png',
        trailer: './videos/platinum.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_platinum/Pkmn_Plat_Battle_Frontier_castle_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_platinum/Pkmn_Plat_intro_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_platinum/Pkmn_Plat_Wi_Fi_Plaza_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_platinum/Pkmn_Plat_Giratina_cutscene_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemon_platinum/Pkmn_Plat_New_TG_member_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Platinum+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Platinum-Version-272321.html#Introdu__o',
    },
    // Pokemon Diamond Version
    {
        id: 26,
        capasPokemon: './capas/diamond.jpeg',
        descricao: `Exclusively for the Nintendo DS, the new generation of Pokémon is taking the world by storm with Pokémon Diamond and Pokémon Pearl! With over 100 new Pokémon, the ability to play on a Touch Screen, and online play via the Nintendo Wi-Fi Connection, this is the biggest Pokémon adventure ever! Pokémon Diamond and Pokémon Pearl challenge players to explore the Sinnoh region in an incredibly exciting RPG adventure. New Pokémon are everywhere! This marks the debut of Mime Jr., Lucario, and Weavile, and the three starter Pokémon are also new. Players can choose Chimchar (Fire type), Piplup (Water type), or Turtwig (Grass type) to begin their adventure.<br><br>One of the best features of Pokémon games is the ability to trade and battle with other Trainers. The Nintendo DS allows players to connect with other Pokémon fans through a local wireless network or via the Nintendo Wi-Fi Connection. Players can now trade and battle with Trainers from around the world! Pokémon Diamond and Pokémon Pearl also include a voice chat feature so players can communicate online. In Pokémon Diamond and Pokémon Pearl, Trainers can even gain the opportunity to use a Pokémon obtained in previous Game Boy Advance games: Pokémon Emerald, Pokémon FireRed, Pokémon LeafGreen, Pokémon Ruby, and Pokémon Sapphire. The new Pokémon adventure is grand, impressive, and, being on the DS, you can take it anywhere!`,
        logoPokemon: './logos/diamond.webp',
        trailer: './videos/pearl.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_diamond/pokmon_diamond_1_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_diamond/pokmon_diamond_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_diamond/pokmon_diamond_2_TM_Standard.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyPDDEURfZ_-QSRtDhhdGqfnHKnTl50Mimg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3Qd5OX8VJs0gW2TRGOG1koRA5lntgcuuZw&s'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Diamond+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Diamond-272354.html#Introdu__o',
    },
    // Pokemon Pearl Version
    {
        id: 27,
        capasPokemon: './capas/pearl.jpg',
        descricao: `Exclusively for the Nintendo DS, the new generation of Pokémon is taking the world by storm with Pokémon Diamond and Pokémon Pearl! With over 100 new Pokémon, the ability to play on a Touch Screen, and online play via the Nintendo Wi-Fi Connection, this is the biggest Pokémon adventure ever! Pokémon Diamond and Pokémon Pearl challenge players to explore the Sinnoh region in an incredibly exciting RPG adventure. New Pokémon are everywhere! This marks the debut of Mime Jr., Lucario, and Weavile, and the three starter Pokémon are also new. Players can choose Chimchar (Fire type), Piplup (Water type), or Turtwig (Grass type) to begin their adventure.<br><br>One of the best features of Pokémon games is the ability to trade and battle with other Trainers. The Nintendo DS allows players to connect with other Pokémon fans through a local wireless network or via the Nintendo Wi-Fi Connection. Players can now trade and battle with Trainers from around the world! Pokémon Diamond and Pokémon Pearl also include a voice chat feature so players can communicate online. In Pokémon Diamond and Pokémon Pearl, Trainers can even gain the opportunity to use a Pokémon obtained in previous Game Boy Advance games: Pokémon Emerald, Pokémon FireRed, Pokémon LeafGreen, Pokémon Ruby, and Pokémon Sapphire. The new Pokémon adventure is grand, impressive, and, being on the DS, you can take it anywhere!`,
        logoPokemon: './logos/pearl.png',
        trailer: './videos/pearl.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_pearl/pokmon_pearl_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_pearl/pokmon_pearl_1_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_pearl/pokmon_pearl_2_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_pearl/pokmon_pearl_3_TM_Standard.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnupCKAL3PBDTBH5pSx42ZyjvmWncrE2Oa_w&s'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Pearl+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Pearl-272431.html',
    },
    // Pokemon Emerald Version
    {
        id: 28,
        capasPokemon: './capas/esmerald.jpg',
        descricao: `Face the powerful Team Magma and Team Aqua in this latest Pokémon adventure! In Pokémon Emerald, protect the Hoenn region from the mysterious land and sea forces, Groudon and Kyogre, who threaten to take control. Fortunately, the power of Rayquaza—the sky—can help you. Even the most experienced Pokémon Trainers will have to give it their all, as Pokémon Emerald contains some of the toughest battles they will ever face. Seek out the seven new Frontier Brains to collect all the symbols in the Battle Frontier. Completely new areas of Hoenn are revealed in this exciting extension of Pokémon Ruby and Pokémon Sapphire. Additionally, using the Game Boy Advance wireless adapter, you can trade and battle with Pokémon Emerald, Pokémon Ruby and Sapphire, and Pokémon FireRed and LeafGreen. It’s even possible to connect with Pokémon Colosseum using the Game Boy Advance cable for the Nintendo GameCube!`,
        logoPokemon: './logos/esmerald.webp',
        trailer: './videos/esmerald.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gameboy_advance/pokmon_emerald/pokmon_emerald_8_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gameboy_advance/pokmon_emerald/pokmon_emerald_4_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gameboy_advance/pokmon_emerald/pokmon_emerald_6_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gameboy_advance/pokmon_emerald/pokmon_emerald_7_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gameboy_advance/pokmon_emerald/pokmon_emerald_5_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Emerald+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Emerald-Version-267112.html#Galeria_de_imagens',
    },
    // Pokemon Fire Red Version
    {
        id: 29,
        capasPokemon: './capas/fireRed.webp',
        descricao: `Travel through the Kanto region to battle, catch, and train wild Pokémon, as well as to face off against other Trainers and the evil Team Rocket. While trying to catch all 200 Pokémon, including ten exclusive to Pokémon FireRed, visit one of the eight Gyms in an attempt to prove your worth and strive to become a Pokémon Master. With the Nintendo Game Boy Advance Link Cable, you can battle friends in two-on-two matches, with a variety of setup options that will offer you many hours of fun.`,
        logoPokemon: './logos/fireRed.webp',
        trailer: './videos/fireRed.mp4',
        galeryPhotos: [
            'https://s2.glbimg.com/ZGRusVI66d3q-gzMzuHEVEjrZSQ=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/t/s/DvTuADTQKN4hAHkmuOyw/2016-03-18-pokemon-fire-red-leaf-green-inicial.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms/img/video-games/fireredleafgreen/screenshots/firered_leafgreen_ss1.jpg',
            'https://img.romhackers.org/traducoes/%5BGBA%5D%20Pokemon%20-%20Fire%20Red%20Version%20-%20Codinome%20V%20Zambrakas%20-%203.png',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKX8nSh1YZRr1BoAN1pAUz2jk0NR905cvA42aw34EM3h4oj53FGP-hX3umcy0aANwX3zYE2yOnVUbAEfiyEdT2mnuxDQVlHAOEfU-VOqPzjKC9E7rr9AfzpcO1H2T732O_2uz__HV_2SnASxQS5Tt_uhdEgFyKC5U3OBFKI9NSO39JkQn5zMbzWnyo5XuN/s960/Pokemon%20Fire%20Red%20(PTBR)-2.png',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOVPG_IP_OSUeqz_56XGrjL3SUv4aV5VxThfhoDXrVAD4eTzhoOIbiAMSH8x6dnuK9NIdKPZoyCaV_77yeUtDuQBm0Ugb-EPToxIedNPA4K5HodspaIyrbUKF1qIfMs5KsictnYQrOc_pVAgsNg_cksjS2HeaNj9eZn3toBnTW33jIay1bk9RBClkm/s16000-rw/2%20-%20Primeape_Moveset.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Fire+Red+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-FireRed-267123.html',
    },
    // Pokemon Leaf Green Version
    {
        id: 30,
        capasPokemon: './capas/leafGreen.png',
        descricao: `With new islands to explore, new Pokémon that can be transferred to Pokémon Colosseum, hidden extras, and much more, Pokémon LeafGreen is sure to delight all Pokémon fans. There’s even something special about the multiplayer options! Whether you’ve played every Pokémon title released to date or haven’t yet discovered the magic of this universe, Pokémon LeafGreen is an adventure you can’t miss!`,
        logoPokemon: './logos/leafGreen.webp',
        trailer: './videos/fireRed.mp4',
        galeryPhotos: [
            'https://s2.glbimg.com/ZGRusVI66d3q-gzMzuHEVEjrZSQ=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/t/s/DvTuADTQKN4hAHkmuOyw/2016-03-18-pokemon-fire-red-leaf-green-inicial.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms/img/video-games/fireredleafgreen/screenshots/firered_leafgreen_ss1.jpg',
            'https://img.romhackers.org/traducoes/%5BGBA%5D%20Pokemon%20-%20Fire%20Red%20Version%20-%20Codinome%20V%20Zambrakas%20-%203.png',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKX8nSh1YZRr1BoAN1pAUz2jk0NR905cvA42aw34EM3h4oj53FGP-hX3umcy0aANwX3zYE2yOnVUbAEfiyEdT2mnuxDQVlHAOEfU-VOqPzjKC9E7rr9AfzpcO1H2T732O_2uz__HV_2SnASxQS5Tt_uhdEgFyKC5U3OBFKI9NSO39JkQn5zMbzWnyo5XuN/s960/Pokemon%20Fire%20Red%20(PTBR)-2.png',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOVPG_IP_OSUeqz_56XGrjL3SUv4aV5VxThfhoDXrVAD4eTzhoOIbiAMSH8x6dnuK9NIdKPZoyCaV_77yeUtDuQBm0Ugb-EPToxIedNPA4K5HodspaIyrbUKF1qIfMs5KsictnYQrOc_pVAgsNg_cksjS2HeaNj9eZn3toBnTW33jIay1bk9RBClkm/s16000-rw/2%20-%20Primeape_Moveset.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Leaf+Green+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-LeafGreen-267134.html',
    },
    // Pokemon Ruby Version
    {
        id: 31,
        capasPokemon: './capas/rubyVersion.jpg',
        descricao: `Pokémon have evolved! Pokémon Ruby and Pokémon Sapphire, the first in the series for the Game Boy Advance, combine the power of the world’s most advanced handheld console with the gameplay of Pokémon to deliver an unmissable experience.<br><br>With an all-new storyline, a new world to explore, and a wide variety of new (alongside classic!) Pokémon to catch, train, and battle, Pokémon Ruby and Pokémon Sapphire offer everything fans expect from a game in the series. Both titles take place in the Hoenn region, a land full of towns, caves, lakes, and, above all, secrets. At the start of your adventure, you must decide whether you want to play as a male or female character—both equipped with fantastic new Pokémon gear—before setting off on a quest to become the best Pokémon Trainer in Hoenn. Before beginning your mission, however, you must choose one of three new Pokémon: Treecko, the Grass type, Torchic, the Fire type, or Mudkip, the Water type.`,
        logoPokemon: './logos/ruby.png',
        trailer: './videos/rubyVersion.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_05_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_10_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_08_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Ruby",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Ruby-267167.html?srsltid=AfmBOooBCCUFZpxoK-wiWrcIKVkDOw2zxkyekLvv24Ey9CmBcj7iWsSk',
    },
    // Pokemon Sapphire Version
    {
        id: 32,
        capasPokemon: './capas/sapphire.png',
        descricao: `With an all-new storyline, a new world to explore, and a variety of new (alongside classic!) Pokémon to catch, train, and battle, Pokémon Ruby and Pokémon Sapphire offer everything Pokémon fans expect from a game in the series. Both titles take place in the Hoenn region, a land full of towns, caves, lakes, and, above all, secrets. At the start of your adventure, you must decide whether to play as a male or female character—both equipped with fantastic new Pokémon gear—before setting off on a mission to become the best Pokémon Trainer in Hoenn. Before beginning your journey, however, you must choose one of three new Pokémon: Treecko, the Grass type, Torchic, the Fire type, or Mudkip, the Water type.`,
        logoPokemon: './logos/sapphire.webp',
        trailer: './videos/rubyVersion.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_05_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_10_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_04_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_advance_2/gba_pokemonrubyandsapphire/GBA_PokemonRubyAndSapphire_01_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Sapphire+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Sapphire-267178.html',
    },
    // Pokemon Crystal Version
    {
        id: 33,
        capasPokemon: './capas/crystal.jpeg',
        descricao: `When it debuted on the Game Boy Color, Pokémon Crystal Version introduced many new elements to the Pokémon series. This game, an expanded version of Pokémon Gold Version and Pokémon Silver Version, was the first to allow players to choose a male or female character. It was also the first game to feature animations during Pokémon battles.<br><br>In this version of Pokémon Crystal Version, you also have the opportunity to encounter the mythical Pokémon Celebi in an event after completing the game. In the original Pokémon Crystal Version, Celebi could only be obtained with a special accessory.`,
        logoPokemon: './logos/crystal.webp',
        trailer: './videos/crystal.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemoncrystalversion_en/3DSVC_PokemonCrystalVersion_Opening_EN_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemoncrystalversion_en/3DSVC_PokemonCrystalVersion_VsRival2_EN_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemoncrystalversion_en/3DSVC_PokemonCrystalVersion_WhatIsYourName_EN_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemoncrystalversion_en/3DSVC_PokemonCrystalVersion_RuinsOfAlph_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemoncrystalversion_en/3DSVC_PokemonCrystalVersion_RuinsOfAlphFight_EN_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Crystal+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Crystal-Version-266065.html',
    },
    // Pokemon Gold Version
    {
        id: 34,
        capasPokemon: './capas/gold.jpg',
        descricao: `Pokémon Gold Version and Pokémon Silver Version are now available on the Nintendo 3DS! These games, originally released as Game Boy Color titles in Japan, have been recreated in the Virtual Console versions so that the screens appear just as they did on the Game Boy Color.<br><br>You will start the game as a beginner Trainer and explore the Johto region, embarking on an adventure to catch as many Pokémon as possible. There are many Pokémon in the game, including the Legendary trio composed of Raikou, Entei, and Suicune. These games also introduced new types of Pokémon to accompany you on your adventures: Steel-type and Dark-type Pokémon.`,
        logoPokemon: './logos/gold.webp',
        trailer: './videos/gold.mp4',
        galeryPhotos: [
            'https://s2-techtudo.glbimg.com/o8lncUMqghrI2PmiCxrfGV6c0BA=/0x0:695x391/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/3/Q/1cmtwmTNmmVJPHDucUYw/2016-02-22-capa.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_03_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_02_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Gold+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Gold-Version-266076.html',
    },
    // Pokemon Silver Version
    {
        id: 35,
        capasPokemon: './capas/silver.png',
        descricao: `When it debuted on the Game Boy Color, Pokémon Crystal Version introduced many new elements to the Pokémon series. This game, an expanded version of Pokémon Gold Version and Pokémon Silver Version, was the first to allow players to choose a male or female character. It was also the first game to feature animations during Pokémon battles.<br><br>In this version of Pokémon Crystal Version, you also have the opportunity to encounter the mythical Pokémon Celebi in an event after completing the game. In the original Pokémon Crystal Version, Celebi could only be obtained with a special accessory.`,
        logoPokemon: './logos/silverVersion.webp',
        trailer: './videos/gold.mp4',
        galeryPhotos: [
            'https://i.ytimg.com/vi/aLuK0vbsq5Y/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGDQgWShyMA8=&rs=AOn4CLCjSoiaecHjtUgREZWU-uvNJ_BLEw',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_03_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/game_boy_color_2/gbc_pokemonsilverversion/GBC_PokemonSilverVersion_02_TM_Standard.jpg', 
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Silver+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Silver-Version-266120.html',
    },
    // Pokemon Red Version
    {
        id: 36,
        capasPokemon: './capas/red.jpg',
        descricao: `Pokémon Red Version and Pokémon Blue Version feature the Kanto region, home to creatures such as Charmander, Pikachu, and Mewtwo. Through exciting battles and trades, Trainers have the opportunity to access 150 Pokémon.<br><br>You begin your adventure in Pallet Town as a young Trainer. After a dangerous encounter with wild Pokémon, Professor Oak teaches you how to catch Pokémon and introduces you to the world of Trainers. During your journey in Kanto, you must catch Pokémon to record their data in your Pokédex, as well as to become a better Trainer by competing in Gyms across the region. After proving your worth as a Pokémon Trainer, it’s time to face the Elite Four: a group of Trainers who will put your skills to the ultimate test.`,
        logoPokemon: './logos/red.webp',
        trailer: './videos/red.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonredandblue/3DSVC_PokemonRedAndBlue_03_enGB.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonredandblue/3DSVC_PokemonRedAndBlue_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonredandblue/3DSVC_PokemonRedAndBlue_01_TM_Standard.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_red_blue/EN_PinsirTrade.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_red_blue/EN_BattleScreen.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Red+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Red-Version-266109.html',
    },
    // Pokemon Blue Version
    {
        id: 37,
        capasPokemon: './capas/blue.jpg',
        descricao: `Pokémon Red Version and Pokémon Blue Version feature the Kanto region, home to creatures such as Charmander, Pikachu, and Mewtwo. Through exciting battles and trades, Trainers have the opportunity to access 150 Pokémon.<br><br>You begin your adventure in Pallet Town as a young Trainer. After a dangerous encounter with wild Pokémon, Professor Oak teaches you how to catch Pokémon and introduces you to the world of Trainers. During your journey in Kanto, you must catch Pokémon to record their data in your Pokédex, as well as to become a better Trainer by competing in Gyms across the region. After proving your worth as a Pokémon Trainer, it’s time to face the Elite Four: a group of Trainers who will put your skills to the ultimate test.`,
        logoPokemon: './logos/blue.webp',
        trailer: './videos/blue.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonredandblue/3DSVC_PokemonRedAndBlue_03_enGB.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonredandblue/3DSVC_PokemonRedAndBlue_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonredandblue/3DSVC_PokemonRedAndBlue_01_TM_Standard.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_red_blue/EN_PinsirTrade.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_red_blue/EN_BattleScreen.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Blue+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Blue-Version-266054.html',
    },
    // Pokemon Green Version
    {
        id: 38,
        capasPokemon: './capas/green.jpg',
        descricao: `Pokémon Green Version takes players on an exciting journey through the Kanto region, where Trainers can catch, train, and battle a variety of Pokémon. Alongside familiar favorites like Bulbasaur, Charmander, and Squirtle, players can encounter many unique Pokémon exclusive to this version.<br><br>As a new Trainer starting your adventure in Pallet Town, you’ll explore towns, forests, and caves while challenging Gym Leaders to earn badges and prove your skills. Your ultimate goal is to complete the Pokédex by capturing as many Pokémon as possible and to face the Elite Four, testing your abilities against the strongest Trainers in Kanto. Pokémon Green Version offers a classic RPG experience full of strategy, discovery, and adventure for both new players and longtime fans of the series.`,
        logoPokemon: './logos/green.png',
        trailer: './videos/green.mp4',
        galeryPhotos: [
            'https://img.itch.zone/aW1hZ2UvMTAyNzM2OC81ODYwMTUyLnBuZw==/347x500/gTtAJ1.png',    
            'https://img.itch.zone/aW1hZ2UvMTAyNzM2OC81ODYwMjA0LnBuZw==/original/N0hzdJ.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4vcCLNBNcH5_aEBQyaEsYb3XTciBcRfUBJvvlnoq03mWw7iqzFFHcbpbKsum0ujN1kQ&usqp=CAU',
            'https://classic.mariogames.be/gb/2003/pokemon-brown-2014.png',
            'https://img.itch.zone/aW1hZ2UvMTAyNzM2OC81ODYwMTgzLnBuZw==/original/FnLk6w.png',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Green+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Pesquisar/Pesquisa-299117.html?q=Pokemon%20Green%20Version&f=147394-86',
    },
    // Pokemon Yellow Version
    {
        id: 39,
        capasPokemon: './capas/yellow.png',
        descricao: `After the huge success of Pokémon Red Version and Pokémon Blue Version came Pokémon Yellow Version: Special Pikachu Edition. In this game, Trainers return to Kanto for more fun and adventures… with Pikachu by their side!<br><br>The graphics of Pokémon Yellow were slightly redesigned compared to Pokémon Red and Pokémon Blue. Pokémon Yellow introduces battle modes that let you compete in exciting new ways and also offers fun minigames such as Surfing Pikachu.`,
        logoPokemon: './logos/yellow.png',
        trailer: './videos/yellow.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonyellow/3DSVC_PokemonYellow_03_enGB_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonyellow/3DSVC_PokemonYellow_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonyellow/3DSVC_PokemonYellow_01_TM_Standard.jpg',
            'https://infinityretro.com/wp-content/uploads/2014/06/Pokemon-Yellow-Version-screenshot-1.png',
            'https://s2-techtudo.glbimg.com/pMlUYJi84j9py7Sz4DmndAsGEY8=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2016/01/19/pokemonblue.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Yellow+Version",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Yellow-Version-Special-Pikachu-Edition-266142.html',
    },
]

// Array com os dados dos jogos spin-off de pokemon
const dadosJogosPokemonSpinOff = [
    // Pokemon Friends
    {
        id: 0,
        capasPokemon: './capas/friends.jpg',
        descricao: `Relax with puzzles in Pokémon™ Friends! Solve sets of three randomly selected puzzles to unwind your mind, then place the yarn you’ve collected into the Plush-O-Matic: a special machine that creates Pokémon plush in the game! As you try to make them all, keep track of every plush you’ve already created with the catalog. You can also follow your progress by marking a stamp in your calendar for each day you played, and later go back to practice the puzzles you played on those days.`,
        logoPokemon: './logos/friends.webp',
        trailer: './videos/friends.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000102052/c5f2e3f5a5432679d3618afed006a4e146ca8a38ccc795e6253a6fa722e77d17', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000102052/5e0a2a6a8e82dffd394cd484c499971c21a7ea85a0ad7a539d6c84a8e59a412c', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000102052/735ab154dc06396a16e97e2d8e8896e81f5464782eedca3a6f3223f82bdb3088',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000102052/0466f05b9a1877fda9c708b50da8434ae1a398082d72bcbdf9bba9d2c4ba7191',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000102052/e367caabe898a5eff7e7800d30b19431c2806cd124d227a0f9ec56eb02e51607'
        ],
        linkGoogle: 'https://www.google.com/search?&q=Pokemon+Friends',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-friends-switch/?srsltid=AfmBOorXv0hkgXrLG5UjBwKb_Ss3hmFiJKRwNPGNl11wTbLeM9vtDbRg',
    },
    // Pokemon Detective Pikachu Returns
    {
        id: 1,
        capasPokemon: './capas/detectivePikachuReturns.webp',
        descricao: `Unravel a series of mysteries in Ryme City with a talkative, coffee-loving Pikachu and his human partner, Tim Goodman. When a jewelry theft occurs, the case sets this dynamic detective duo on a path full of mystery. Why did Tim’s father, Harry, disappear? What’s causing the Pokémon-related incidents in Ryme City? Answer these and other questions by searching for clues, investigating scenes, and using your notebook to draw your conclusions.`,
        logoPokemon: './logos/detectivePikachuReturn.png',
        trailer: './videos/detectivePikachuReturn.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000068693/96c03211ef6317f41f9dd48c191c522594e5a120567993a2e44d32594e53bef6', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000068693/22fbff592842f429909d2fab9ce2461b4fe8000aea29156bc3a9af60483344ce', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000068693/77dac747b4e85df28a484838ba93625715a5b1e3e62c75c33873e6be106f965e',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000068693/babbba586f6d80c82a4b167bd766b7c0a0827c7b22283bd568164130aba5de47',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000068693/94c9eb36723273f13cab11a1c0fc582705b64fa0724d2c62dd1a6f372c256ba4'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Detective+Pikachu+Returns',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/detective-pikachu-returns-switch/?srsltid=AfmBOoowE1Czkud3SzzVd4DL_Xo1QTu-I4lapZRg59dQ4DTFM4qoYJwT',
    },
    // Pokemon Camp
    {
        id: 2,
        capasPokemon: './capas/camp.jpg',
        descricao: `Pokémon Camp is an interactive space where Trainers can relax and bond with their Pokémon. Play, feed, cook, and strengthen your friendship to make your team happier and more ready for battles. Explore different environments, discover each Pokémon’s unique reactions, and make your journey even more fun and immersive!`,
        logoPokemon: './logos/camp.webp',
        trailer: './videos/camp.mp4',
        galeryPhotos: [
            'https://t2.tudocdn.net/168354?w=1920',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e882a30a-012e-476b-be99-5af57eaba6bd/dg7oajj-468a5b80-51fb-4515-85d4-d661a4413187.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ODJhMzBhLTAxMmUtNDc2Yi1iZTk5LTVhZjU3ZWFiYTZiZFwvZGc3b2Fqai00NjhhNWI4MC01MWZiLTQ1MTUtODVkNC1kNjYxYTQ0MTMxODcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.76DIjeH-PuGVLg2StuFW6fOGP_vwaJuX_ERePMhiqxI',
            'https://s2-techtudo.glbimg.com/3D37xao_kQ7eOcudSJTecXVTA2Y=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/10/24/camp-pokemon-2.jpeg', 
            'https://s2-techtudo.glbimg.com/Uuyg8DmzkkSmrmMbN8zHVE_7XWk=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/10/24/camp-pokemon-4.jpeg', 
            'https://s2-techtudo.glbimg.com/PlGzv9EvEG--m3RUEBnsF1BYa7E=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/10/24/camp-pokemon-1.jpeg',
        ],
        linkGoogle: 'https://www.google.com/search?q=Pokemon+Camp',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOool_SXvXsNQhG-ifX2CM8MmTSujQcqlPpgaxnToDpPz9gzN7yFz&slug=detective-pikachu-returns-switch#q=Pokemon+Camp&p=1&cat=all&sort=df',
    },
    // Pokemon Smile
    {
        id: 3,
        capasPokemon: './capas/smile.jpg',
        descricao: `Pokémon Smile is a mobile spin-off game from the Pokémon franchise. The game uses an augmented reality system to teach children how to brush their teeth. It was released in June 2020 by The Pokémon Company and is available as a free app for Android and iOS devices.`,
        logoPokemon: './logos/smile.png',
        trailer: './videos/smile.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/pokemon-smile/pokemon-smile-169.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_smile/screenshots/01.jpg',
            'https://play-lh.googleusercontent.com/8iEke2yzF8FYzoMIw_VLdjwb0JC0x3fyuPqEXMfu4R6dZ5keyroJtCHgWSrV0rVXww=w526-h296-rw', 
            'https://play-lh.googleusercontent.com/lZ7xzAl9JINIEUHvauWTcHhVBnf4vpO5Eb9b5i_kNLkkiGbUl4gT_d0vesM-r2BV2_w=w526-h296-rw', 
            'https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2020/06/pokemon-smile-pick-pokemon-brush-faster-062220.png',
        ],
        linkGoogle: 'https://www.google.com/search?q=Pokemon+Smile',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOool_SXvXsNQhG-ifX2CM8MmTSujQcqlPpgaxnToDpPz9gzN7yFz&slug=detective-pikachu-returns-switch#q=Pokemon+Smile&p=1&cat=all&sort=df',
    },
    // Pokemon Sleep
    {
        id: 4,
        capasPokemon: './capas/sleep.webp',
        descricao: `Pokémon Sleep is a mobile game for Android and iOS that rewards players with Pokémon based on the quality of their sleep.`,
        logoPokemon: './logos/sleep.webp',
        trailer: './videos/sleep.mp4',
        galeryPhotos: [
            'https://i.scdn.co/image/ab67616d0000b273aa3a06503e00761a045fa062', 
            'https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/24772876/Pokemon_Sleep_Styles_EN.jpg?q=50&fit=crop&w=825&dpr=1.5',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_sleep/inline/01.png',
            'https://play-lh.googleusercontent.com/brVSYX5NpKY_mJSp_O8cmQX0Ki1dUcm79LTD5z4qc7_3zlBcPN0_z5TQRdsC2g3PKA=w526-h296-rw', 
            'https://www.nightwater.email/content/images/2024/01/https-3a-2f-2fsubstack-post-media-s3-amazonaws-com-2fpublic-2fimages-2fba2ded7f-ab0f-4186-b3b8-88ecb6610a91_3510x2532-jpeg.jpg',
        ],
        linkGoogle: 'https://www.google.com/search?q=Pokemon+Sleep',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOopUosLiKqq0CjNlaxBjXVxuBrRJR9gNiqOasU7ul6KcW7fepq0F#q=Pokemon+Sleep&p=1&cat=all&sort=df',
    },
    // Pokemon Master
    {
        id: 5,
        capasPokemon: './capas/master.webp',
        descricao: `Pokémon Masters EX is a free mobile game for Android and iOS developed and published by DeNA. It is based on the Pokémon media franchise. Set on the artificial island of Pasio, the game allows players to battle and recruit various prominent Pokémon Trainers from the main series games.`,
        logoPokemon: './logos/master.webp',
        trailer: './videos/master.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_masters/pokemon-masters-ex-169.jpg', 
            'https://s2-techtudo.glbimg.com/2U4Q2tEF_J-eeWT7wH07DMeGMXA=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2019/09/02/captura-de-tela-2019-08-30-as-09.10.59.png',
            'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-masters/e/e1/Pokemon_masters_coop.jpg',
            'https://blog.uptodown.com/wp-content/uploads/pokemon-mastesr-screenshots-673x600.jpg', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRErpg2wLabTOnOIsOw2MtCPo2adZbjNVf-w&s',
        ],
        linkGoogle: 'https://www.google.com/search?q=Pokemon+Master',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOopUosLiKqq0CjNlaxBjXVxuBrRJR9gNiqOasU7ul6KcW7fepq0F#q=Pokemon+Master&p=1&cat=all&sort=df',
    },
    // Pokemon Duel
    {
        id: 6,
        capasPokemon: './capas/duel.jpg',
        descricao: `Pokémon Duel is a free digital board game developed by Heroz and published by The Pokémon Company. It was initially released for Android and iOS devices in Japan under the title Pokémon Comaster in April 2016. It was later released in other regions in January 2017.`,
        logoPokemon: './logos/duel.png',
        trailer: './videos/duel.mp4',
        galeryPhotos: [
            'https://mmos.com/wp-content/gallery/pokemon-duel-overview/pokemon-duel-blocking-entry.jpg', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfAZKmzQWlyGrcuyZORPJbQwvXFEAPv_0Hg&s', 
            'https://2.bp.blogspot.com/-6FJwyEmtM5U/WIrAXtuxRCI/AAAAAAAAFNo/iwwcqtuHp1wtc0nWWIxlGSvH047IXeaMACLcB/s1600/C3A0fhtUsAIqxKz.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8IAuBkFHuHmSAfAD95QlAvERr-jBeiaUbM3oGhdkeZ2YQkc22lZsvQAFpSLhczUr64gIi32xId6Kb_N6r23fv6n3I917Kl1i6kzWjxrYhxFASUAj_78ZYAdebpmpdJy1OwCkcPI3d7Tew/s2048/Pok%25C3%25A9mon+Duel+-+Moedas+e+Gemas.jpg',
            'https://preview.redd.it/what-game-is-this-v0-r6f68faknhic1.jpg?width=640&crop=smart&auto=webp&s=fd72202d9ba3f6ed38b7ca6d010cd37b30d0d9c7'
        ],
        linkGoogle: 'https://www.google.com/search?q=Pokemon+Duel',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Duel&p=1&cat=all&sort=df',
    },
    // Pokemon Magikarp Jump
    {
        id: 7,
        capasPokemon: './capas/jump.jpg',
        descricao: `Magikarp Jump is a free mobile game developed by Select Button and published by The Pokémon Company. It was released in May 2017 for iOS and Android platforms. Players train Magikarp to compete in jumping contests.`,
        logoPokemon: './logos/jump.png',
        trailer: './videos/magikarp.mp4',
        galeryPhotos: [
            'https://m.media-amazon.com/images/M/MV5BMDU4OGM4MDEtYTJkMS00NGNjLWI3ZGEtMjQyN2VjZTE5ZWZiXkEyXkFqcGc@._V1_.jpg', 
            'https://play-lh.googleusercontent.com/RlFmQFNsWmt1mtLNbJ84duIl5rJItltMYnpi_9MZ8THOvbix4S38_ZTcJuue0FClNCU', 
            'https://media.pocketgamer.com/artwork/na-mybpce/magikarp-jump-ios-2.png',
            'https://play-lh.googleusercontent.com/EUfn_AeXI2SZ4AmMXTPzOXmpnc2Y_1KVcVXfHSEGiGqmx7T4cdqHWMSinxY8YksBSg=w526-h296-rw',
            'https://upload.wikimedia.org/wikipedia/en/2/2c/Magikarp_Jump_Gameplay_Screenshot.jpg'
        ],
        linkGoogle: 'https://www.google.com/search?&q=Pokemon+Magikarp+Jump',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?q=Pokemon+Magikarp+Jump&p=1&cat=all&sort=df',
    },
    // Pokemon Go
    {
        id: 8,
        capasPokemon: './capas/go.jpg',
        descricao: `Pokémon GO is a free-to-play augmented reality mobile game. It is developed and published by Niantic, Inc., in collaboration with Nintendo and The Pokémon Company for iOS and Android platforms.`,
        logoPokemon: './logos/go.png',
        trailer: './videos/go.mp4',
        galeryPhotos: [
            'https://uploads.jovemnerd.com.br/wp-content/uploads/2016/07/Pokemon_pikachu.jpg', 
            'https://nexo-uploads-beta.s3.amazonaws.com/wp-content/uploads/images/2023/12/28002555/pokemon_binary_43564.jpg', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XWnkzQrCP2UjS1g2Ky3G8KLxXXD9hkVsgQ&s',
            'https://estaticos-cdn.prensaiberica.es/clip/3f8b4209-4d8f-4f24-b1af-52672dffc48c_portada-ep-libre-aspect-ratio_default_0.jpg',
            'https://pokemongohub.net/wp-content/uploads/2025/01/pokedex-update1a-1068x1132.jpg'
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Go",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Go&p=1&cat=all&sort=df',
    },
    // Pokemon TCG Pocket
    {
        id: 9,
        capasPokemon: './capas/pocket.webp',
        descricao: `Pokémon GO is a free-to-play augmented reality mobile game. It is developed and published by Niantic, Inc., in collaboration with Nintendo and The Pokémon Company for iOS and Android platforms.`,
        logoPokemon: './logos/pocket.png',
        trailer: './videos/pocket.mp4',
        galeryPhotos: [
            'https://storage.googleapis.com/dena-com-official-prod-gcp.appspot.com/upload/CnyrtA8tT93_rytF-YZHi.png', 
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/tcg-pocket/2025/10/13/pokemon-tcg-pocket-169-en.png', 
            'https://tcgpocket.pokemon.com/_images/announcement/cardspread_header.png',
            'https://assets-prd.ignimgs.com/2024/11/07/poke-swag-1730983015863.jpg',
            'https://www.pokemythology.net/wp-content/uploads/2024/08/charizard_video_fallback_en-2x.webp'
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+TCG+Pocket",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOopUosLiKqq0CjNlaxBjXVxuBrRJR9gNiqOasU7ul6KcW7fepq0F#q=Pokemon+TCG+Pocket&p=1&cat=all&sort=df',
    },
    // Pokemon TCG Live
    {
        id: 10,
        capasPokemon: './capas/live.jpg',
        descricao: `Pokémon TCG Live is the official digital version of the Pokémon Trading Card Game. Players can collect, trade, and battle with hundreds of Pokémon cards online. Build your decks, test strategies against opponents worldwide, and experience the excitement of the TCG in a dynamic digital format.`,
        logoPokemon: './logos/live.png',
        trailer: './videos/live.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms2-pt-br/img/video-games/video-games/pokemon_tcg_live/pokemon-tcg-live-169-br.png',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/tcgl/pokemon-tcg-live-169-us.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCj5kGAc3cOS_ec5k2Nn5D7nlPweDiBEURoA&s', 
            'https://i.ytimg.com/vi/JAf4yoKcgUk/maxresdefault.jpg', 
            'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/02/Pokemon-TCG-Live-Gameplay-Screenshot.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+TCG+Live",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOopUosLiKqq0CjNlaxBjXVxuBrRJR9gNiqOasU7ul6KcW7fepq0F#q=Pokemon+TCG+Live&p=1&cat=all&sort=df',
    },
    // Pokemon TCG Online
    {
        id: 11,
        capasPokemon: './capas/online.png',
        descricao: `Step into the world of Pokémon TCG Online, where you can build, customize, and battle with your own Pokémon Trading Card Decks! Play against friends or Trainers worldwide in fast-paced online matches, test your strategies, and climb the rankings.<br><br>Collect cards from across the Pokémon universe, unlock new booster packs, and expand your collection to create powerful decks. Whether you’re a beginner learning the rules or a veteran mastering complex strategies, Pokémon TCG Online offers endless hours of competitive and casual gameplay for every Pokémon fan.`,
        logoPokemon: './logos/online.png',
        trailer: './videos/online.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/tcgo/generic/tcgo-generic-169-en.jpg', 
            'https://i0.wp.com/www.pokemythology.net/wp-content/uploads/2017/10/pokemon_tcg_online.jpg?fit=1200%2C675&ssl=1',
            'https://img.utdstc.com/screen/ae4/eb3/ae4eb3487409becb27302f16badbbd23134ddd8284cba3ae8d09c79b7f302ba9:600',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJRubjY9FvQqL62TX1IOuuWFamd9cHECzeILlCxGC53sapP_C5NhA_KhYVNwSnAmk4eRJdWC6R8xBHMBrGw19DTgUP5bnXJX10T7qKCRmCMs87F9RoEWsslldHLzwlcYyXVbgbYTimh1ErwCV5jICgTknzzr_sizHyZWVCTQatb5VBN1yYy4d99Ns1/s776/pokemon-tcg-online-jogo.jpg', 
            'https://img.tapimg.net/market/images/b86ab1f89e265438b487bfb4c8e6bffe.jpg?imageView2/2/w/1080/h/1080/q/80/format/jpg/interlace/1/ignore-error/1&t=1',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokémon+TCG+Online",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+TCG+Online&p=1&cat=all&sort=df',
    },
    // Pokemon Rumble Rush
    {
        id: 12,
        capasPokemon: './capas/rush.webp',
        descricao: `Pokémon Rumble Rush is a free-to-play mobile game formerly active, developed by Ambrella and published by The Pokémon Company. It is the fifth entry in the Pokémon Rumble series. The game was available from its release in the spring of 2019 until its shutdown on July 22, 2020.`,
        logoPokemon: './logos/rumbleRush.png',
        trailer: './videos/rush.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8irXucOqvcwbcXh4RsXprixXx2lIhlzYE4w&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNLwwHPLao9sZRjUc5qTPfTP6Pb5e4qspPA&s',
            'https://images.nintendolife.com/screenshots/96495/large.jpg', 
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisiA-rdWmWHE5IgqSOXv6mYOfP7kuU7TdZ-lFP06EKDAWS4_PTcnEjyiZeMbsSq0XrAIur-b_uFwdqGSaxoGkKL1iBEpqXk2z8Ldp4cy_xnV6M9WFqrf5GZIqt5_riG5dcxzfyeB7dTSw/s1271/pokemon-Rumble-Rush.png', 
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Rumble+Rush",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Rumble+Rush&p=1&cat=all&sort=df',
    },
    // Pokemon Shuffle Mobile
    {
        id: 13,
        capasPokemon: './capas/mobile.png',
        descricao: `Pokémon Shuffle is a freemium puzzle video game developed by Genius Sonority and published by Nintendo and The Pokémon Company for the Nintendo 3DS. The game is a spin-off of the Pokémon series and features gameplay similar to Pokémon Battle Trozei.`,
        logoPokemon: './logos/shuffleMobile.png',
        trailer: './videos/mobile.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-shuffle/pokemon-shuffle-mobile-launch-169.jpg',
            'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/81/95/40/8195401a-b8eb-2f3c-9015-721c09a5dde9/9ae81442-fb41-4e5b-8c92-cc3aa4145540_en__U30bf_U30a4_U30c8_U30eb__U30d0_U30ca_U30fc_U6d88_U3057.png/300x0w.jpg', 
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_shuffle_mobile/top-slider-2.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_shuffle_mobile/top-slider-1.jpg', 
            'https://mobilemarketingreads.com/wp-content/uploads/2021/12/pokemon-shuffle-mobile.png',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Shuffle+Mobile",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Shuffle+Mobile&p=1&cat=all&sort=df',
    },
    // Pokemon Tretta
    {
        id: 14,
        capasPokemon: './capas/tretta.webp',
        descricao: `Pokémon Tretta is a Japanese arcade game that evolved from Pokémon Battrio. Players use collectible Tretta tiles to summon Pokémon and battle in 3-on-3 matches. Each tile stores data like type, strength, and capture status, allowing players to build and customize their teams. The game also lets players catch Pokémon during battles and receive new Tretta tiles as rewards. With colorful visuals and interactive gameplay, Pokémon Tretta became a popular arcade experience for both kids and collectors.`,
        logoPokemon: './logos/tretta.webp',
        trailer: './videos/tretta.mp4',
        galeryPhotos: [
            'https://i.ebayimg.com/images/g/NSEAAOSwanVjBag2/s-l400.jpg',
            'https://media.karousell.com/media/photos/products/2022/12/10/pokemon_tettra_1670658316_ba8238f8_progressive.jpg',
            'https://media.karousell.com/media/photos/products/2021/6/19/pokemon_tretta_1624094397_0de8f5c3_progressive.jpg', 
            'https://u-mercari-images.mercdn.net/photos/m67950341220_1.jpg?width=2560&quality=75&_=1751067180', 
            'https://http2.mlstatic.com/D_NQ_NP_872314-MLM84308516775_052025-O.webp',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Tretta",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Tretta&p=1&cat=all&sort=df',
    },
    // Pokemon Battrio
    {
        id: 15,
        capasPokemon: './capas/Battrio.jpeg',
        descricao: `Pokémon Battrio is a Japan-exclusive arcade game developed by Takara Tomy and AQ Interactive. Players use physical discs called Battrio pucks to summon Pokémon for 3-on-3 battles on a touch-sensitive table. Each puck has unique stats like type, power, and speed, encouraging collection and strategy. The game’s fast-paced and tactical system inspired later arcade titles such as Pokémon Tretta and Pokémon Ga-Olé.`,
        logoPokemon: './logos/battrio.png',
        trailer: './videos/battrio.mp4',
        galeryPhotos: [
            'https://images.gog.com/635e624a998942ebf206c5a2b7b837f8a3acee11c8c367b72fd1474cfcf717ad_glx_vertical_cover.webp?namespace=gamesdb',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ERRQvV1HzxnKgR3gY_bLJ7MbSejeDjlbhg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7_e8g5vr_sd3UF0Fv4YX7ywp9R48QP6Ocw&s', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa81b6gCXHASy96ANlM8IvNtM-Ts15mI0ak4bOtx1sKvyfvc45rqMAWB3Wra54UJk1vVc&usqp=CAU', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1P1yZTWFT6DLnwGyE68JbQ9Oj-99BVGQDFA&s',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Battrio",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Battrio&p=1&cat=all&sort=df',
    },
    // Pokemon Champions
    {
        id: 16,
        capasPokemon: './capas/champions.jpeg',
        descricao: `Battle with Pokémon, including Mega-Evolved forms like Mega Dragonite, against other players in Pokémon™ Champions. Starting in 2026, Pokémon Champions will be the official game of the Pokémon World Championships! Engage in single and double battles using familiar mechanics such as Pokémon types, Abilities, and moves to create diverse strategies. Compete in Ranked Matches worldwide, enjoy Casual Battles, or play Private Battles with friends and family.<br><br>Recruit and train Pokémon to strengthen your team, improve stats like Attack and Defense, and customize Abilities and moves for varied strategies. Pokémon Champions is compatible with Pokémon HOME, allowing you to bring select Pokémon from past games and Pokémon GO into your team for even more battle options.`,
        logoPokemon: './logos/champions.png',
        trailer: './videos/champions.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch/70010000004519/f43ebd5cdac98ed79b9e15c399b87e2c0d354757906f90eb3bd02aa01edc01e8',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_champions/screenshots/01.png',
            'https://champions.pokemon.com/_images/global/battle-gallery/en/gallery-1.jpg', 
            'https://champions.pokemon.com/_images/global/trailer/wcs_trailer_thumbnail.png', 
            'https://pclabs.com.br/wp-content/uploads/2025/07/pokemon-champions-lancamento-2026.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Champions",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-champions-switch/',
    },
    // Pokemon Unite
    {
        id: 17,
        capasPokemon: './capas/unite.png',
        descricao: `Pokémon UNITE is a free-to-play online multiplayer battle game developed by TiMi Studios and published by The Pokémon Company. Announced during Pokémon Presents in 2020 and released in 2021, the game allows players to team up in strategic 5-on-5 battles, using their favorite Pokémon to score points, defeat opponents, and dominate the battlefield in fast-paced, action-packed matches.`,
        logoPokemon: './logos/unite.png',
        trailer: './videos/unite.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000043292/a4d0a9eb884cacb780324d953f7da1835d69669c602b71f99ca948dcbbba7cfb',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000043292/b9bf0b6fa28685bce9818d75e57ac0a90398441dfd36430cec617e5169412fb4',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000043292/2416e42ddd1194f05dce43fe6a525a6b61c6549cb2fe0c182e98a940d9581b6d', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000043292/2a47b51e68f2d3f038663f3fce26db3c91a9e7fa2863f671bf753573f14689ec', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000043292/94e5214877b2f50ba6cb708be712fcf393f4fc7fb0aa1ee9d28a62c4f389237b',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Unite",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-unite-switch/',
    },
    // Pokemon Café Mix
    {
        id: 18,
        capasPokemon: './capas/cafe.jpg',
        descricao: `Match Pokémon icons to complete puzzles as you work to build your very own café in Pokémon Café ReMix, a free-to-start game on the Nintendo Switch™ system! Recruit Pokémon to help out at the café (in their stylish uniforms) by making friends as you expand your café options and menu through puzzle completion. Each Pokémon team member has a unique Café Skill that will come in handy for solving puzzles!`,
        logoPokemon: './logos/cafeMix.png',
        trailer: './videos/cafeMix.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000032445/4fd9c495f123422954f281cd089241647af1ee54048323df50a5e8e319e91595', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000032445/df73bd3583e155dbb8eec027d460450637362cddaa33324b5257d9c50ebc8985', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000032445/2e5bba93208a811359c212e77c1827904fab6d00f545812c39fba3647e0f307e',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000032445/89bcc2c3182a386dced41c0858350d63a0aab55dbe5c36611683dd9927005ba9',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000032445/43082d4fc8985f46c82ad5fa26bc9d1e233fe218e24775bdd6f130cad77f4905'
        ],
        linkGoogle: 'https://www.google.com/search?&q=Pokemon+Café+Mix',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-cafe-remix-switch/?srsltid=AfmBOoqsM8CHrKi-GHeuQIgopCPyShA92z8xaPQ1Lwyh3d_Sc0ds2_hX',
    },
    // Pokemon New Snap
    {
        id: 19,
        capasPokemon: './capas/snap.webp',
        descricao: `Search for and photograph Pokémon in their natural habitats in New Pokémon Snap™, available exclusively for the Nintendo Switch™ system! Take pictures with the NEO-ONE as you encounter and observe wild, energetic Pokémon. You might even witness unexpected expressions or behaviors—Pokémon patrolling their territory, playing, or hiding in remote spots.<br><br>Travel to the islands that make up the Lental region. In this region, certain Pokémon and vegetation appear to give off a special glow. Investigate these Pokémon alongside Professor Mirror as you explore dense jungles, vast deserts, and more! Your observations of Pokémon thriving in the wild may help uncover the truth behind the Illumina phenomenon. The Pokémon photos you take will be used to build your very own Pokémon Photodex!`,
        logoPokemon: './logos/newSnap.png',
        trailer: './videos/newSnap.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000037989/cc288ea752072c29ecd340ad04650694099b08dac54daab8030058c0f121a0a2', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000037989/5baa1a8ba0ad2db72621d47a41a624ca6a931f34e5d65dad0f2c2279e8dc425f', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000037989/ced662ab03109d109e21a9152fb220a62d8d32696a48a5ef89acb3a41f46cfcd',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000037989/8dc1622bb206a7f210d5cf2e4fe306b775318f84f2aefb17e7b07867f98d1a93',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000037989/4d22eb84b6ce76c74e848281fbe1b4e1e582707084e6fd9cabc80fddd3b61e56'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+New+Snap',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/new-pokemon-snap-switch/?srsltid=AfmBOooafyTi4gqPTAPs8DZE8efHQoPXrT5yUn2SG-3jA4DOx7zGf1Ka',
    },
    // Pokemon Mystery Dungeon Rescue Team DX
    {
        id: 20,
        capasPokemon: './capas/mysteryDungeon.webp',
        descricao: `What if one day you woke up and found yourself transformed into a Pokémon? In this dungeon-filled adventure, you’ll be able to encounter and recruit over 400 Pokémon within their own world! Form a rescue team to take on mysterious dungeons that are constantly changing, and strategically plan your moves to make the Pokémon world a safer place… while discovering your true purpose along the way.`,
        logoPokemon: './logos/mysteryRescue.png',
        trailer: './videos/mysteryRescue.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000012523/c3d117ccf5c4096819c29083656390b229d5ea12ec8811a42e6398eb63b72069',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000012523/32c7b6ab2ad434413279729b630a3a217c0ed34d3a909d3b59cd5031c83d356a',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000012523/da768598fb334d58681cbfba532cfd90cae908af0c39dc4b002db8b3c758e0bc',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000012523/de1b6b9cdbc429aefc3607bc9acbc3037bafd9eafd53462bef012df9409f5a97',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000012523/cfa3188e39ab2b9485c70cd94a7af0bfd9694047d9d721fe553a51f5359e7116'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Rescue+Team+DX",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-mystery-dungeon-rescue-team-dx-switch/?srsltid=AfmBOoqp3Wns4jvffNlGaYKsR7rWSlK0L3cswVVLc3j2GpSHHPGSnLgo',
    },
    // Pokemon Quest
    {
        id: 21,
        capasPokemon: './capas/quest.webp',
        descricao: `Begin an adventure in Pokémon™ Quest. Head out with your Pokémon friends on expeditions across Tumblecube Island and search for reward items in this free-to-start action-adventure game for the Nintendo Switch™ system. Customize your Pokémon friends with discovered Power Stones to build the best expedition team.<br><br>With cube-shaped designs, Pokémon™ Quest is unlike any Pokémon game you’ve seen before. Thanks to its simple gameplay, it’s easy to set out on expeditions and start exploring Tumblecube Island with the help of your Pokémon friends. Then, return to your base camp to use the items you’ve found on your adventure and befriend even more Pokémon. Attract a variety of Pokémon from the Kanto region to your base camp by cooking up dishes with the ingredients you’ve gathered! You can even decorate your base camp with fun items that grant useful bonuses, making your expeditions even more rewarding.`,
        logoPokemon: './logos/quest.webp',
        trailer: './videos/quest.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000003482/e62c4a80418c1e5848a344ddf919ce75211ea5e425c6d5d6c2cca83bb53e5957', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000003482/d5f60a7fad8be04b9d0ff7bdc2050e831d21124c6df646641dab3c6bb8fe6510', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000003482/9e3daa7b84342c9d6def89aea815f090f0159bb29757e5b7630d3bf0b1d71242',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000003482/679f18a348bb6d113d310e8fc9e1667df7c07db05656dda9b03b6b272a7d9a57',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000003482/11e8e36a20332a0c0c468bd64eae79a0f6676f2ce0b3edf3e6acae491827a6d5'
        ],
        linkGoogle: 'https://www.google.com/search?&q=Pokemon+Quest',
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-quest-switch/?srsltid=AfmBOoorCvjPXBP4YrU1KylbCEyFDPfGLQSJ9Ok0_pTLlpkj7prD-mVt',
    },
    // Pokemon Home
    {
        id: 22,
        capasPokemon: './capas/home.jpeg',
        descricao: `Pokémon Home is a free mobile and Nintendo Switch application developed by ILCA and published by The Pokémon Company, part of the Pokémon series, released in February 2020. Its primary function is to provide cloud-based storage for Pokémon, allowing Trainers to safely store, manage, and transfer their Pokémon across compatible games with ease.`,
        logoPokemon: './logos/home.png',
        trailer: './videos/home.mp4',
        galeryPhotos: [
            'https://s2.glbimg.com/RyWd50E46bdRaZMlKb5R9UvUSFg=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Q/p/KtKnCfSnKdEabEmkhgFw/2020-01-31-captura-de-tela-2020-01-31-as-15.08.57-1.png',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000028523/4ebfd3fbe35e4ae3aad74128f854821cd96fe8fa77f34eb82ccaae6576540b88',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000028523/7ff8980fb4ef3cc4b6354011994b89930d75773800c7ed4fce73e7c98f2e39e7',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000028523/04be250477ae850375d045461109cbf21c999c8a2c3ea4786188ab86eab66fae', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000028523/c2ac0ced5cd938469107ffe55ae64444e84cd07bebca749323031250a1406bb8', 
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Home",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokemon-home-switch/',
    },
    // Pokemon Tournament DX
    {
        id: 23,
        capasPokemon: './capas/dx.webp',
        descricao: `Introducing the first Pokémon title for the Nintendo Switch! Control one of 21 award-winning Pokémon fighters and take on other Pokémon in intense arena battles. Summon support Pokémon to aid you in combat, then unleash your fighter’s special attacks to climb the rankings. With all-new modes and fresh ways to battle friends, this is your chance to become the champion of the Ferrum Region!`,
        logoPokemon: './logos/dx.png',
        trailer: './videos/dx.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001132/99ea536904d37f1660c2f7f27c945db223a7579630fdf0c578a220deb6abc03d',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001132/939b1e60805ea2a95aa51e3faad99b0ec8af0408b39f4af40abe25d3d1c3ee1d',
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001132/bb6899542024907f8fe6abb113b82a27412034c74bb63ac42e08fd71876e166f', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001132/8324b602b4541c74702430e1602149c2211cda006f9d381a36da93f4dfa18061', 
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001132/a1a292120816697625b637275682e6fb59a333ef8975532f20c6b98c41bcd323',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokkén+Tournament+DX",
        linkNintendo: 'https://www.nintendo.com/pt-br/store/products/pokken-tournament-dx-switch/',
    },
    // Pokemon Tournament
    {
        id: 24,
        capasPokemon: './capas/tournament.webp',
        descricao: `Developed in collaboration with The Pokémon Company and BANDAI NAMCO Entertainment, the studio behind the legendary TEKKEN fighting series, Pokkén Tournament delivers high-definition gameplay and impressive control in thrilling, never-before-seen Pokémon battles. Its intuitive controls make it accessible to all kinds of players, even those new to fighting or action games.<br><br>Pokkén Tournament’s battles reach a whole new level with a diverse cast of Pokémon characters. Use Pikachu’s electric power and quick movements to outsmart your opponents, crush enemies in close combat with Machamp’s brute strength, or scorch rivals with Charizard’s blazing attacks.`,
        logoPokemon: './logos/tournament.webp',
        trailer: './videos/tournament.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wiiu_7/wiiu_pokkentournament_engb/WiiU_PokkenTournament_enGB_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wiiu_7/wiiu_pokkentournament_engb/WiiU_PokkenTournament_enGB_06_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wiiu_7/wiiu_pokkentournament_engb/WiiU_PokkenTournament_enGB_17_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wiiu_7/wiiu_pokkentournament_engb/WiiU_PokkenTournament_enGB_20.jpg', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wiiu_7/wiiu_pokkentournament_engb/WiiU_PokkenTournament_enGB_12.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokkén+Tournament",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Wii-U/Pokken-Tournament-1086374.html',
    },
    // Pokemon Rumble U
    {
        id: 25,
        capasPokemon: './capas/rumbleU.jpg',
        descricao: `Pokémon Rumble U tells the story of the greatest adventure of the Toy Pokémon: after an accident at the Toy Pokémon Shop, some Pokémon Capsules are carried away by the river’s current and end up on a strange shore. As our heroes set out to find their way back to the Toy Pokémon Shop, they realize that something is wrong. Can you help them discover why the Toy Pokémon are fighting each other and what the enemy Pokémon are plotting?<br><br>You and up to three friends can take part in multiplayer battles, with the chance to cooperate and defeat the strongest enemies through teamwork.`,
        logoPokemon: './logos/rumbleU.png',
        trailer: './videos/rumbleU.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_u_download_software/wiiuds_pokemonrumbleu/wiiuds_pokemonrumbleu_engb/WiiUDS_PokemonRumbleU_enGB_09_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_u_download_software/wiiuds_pokemonrumbleu/wiiuds_pokemonrumbleu_engb/WiiUDS_PokemonRumbleU_enGB_08_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_u_download_software/wiiuds_pokemonrumbleu/wiiuds_pokemonrumbleu_engb/WiiUDS_PokemonRumbleU_enGB_07_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_u_download_software/wiiuds_pokemonrumbleu/wiiuds_pokemonrumbleu_engb/WiiUDS_PokemonRumbleU_enGB_06_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_u_download_software/wiiuds_pokemonrumbleu/wiiuds_pokemonrumbleu_engb/WiiUDS_PokemonRumbleU_enGB_02_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Rumble+U",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Aplicacoes-de-download-da-Wii-U/Pokemon-Rumble-U-790523.html?srsltid=AfmBOorCinWWe7xbyzixwlhvgybaOzmTTMoJeKjUtEsYmdsXphMeJDVl',
    },
    // Pokemon Super Mystery Dungeon
    {
        id: 26,
        capasPokemon: './capas/superMystery.jpg',
        descricao: `Choose from 20 different Pokémon and set off on an adventure to encounter nearly every known Pokémon, including Legendary and Mythical ones. With the help of your partner Pokémon, uncover the cause behind the mysterious incidents turning Pokémon into stone and put an end to this crisis!<br><br>As a Pokémon yourself, your home is in the peaceful Serene Village. However, before long, you and your partner set out to join the Expedition Society—a team dedicated to exploring and charting the world—leading you into dungeons filled with countless Pokémon and new discoveries.`,
        logoPokemon: './logos/superMystery.png',
        trailer: './videos/superMystery.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonsupermysterydungeon/3DS_PokemonSuperMysteryDungeon_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonsupermysterydungeon/3DS_PokemonSuperMysteryDungeon_08_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonsupermysterydungeon/3DS_PokemonSuperMysteryDungeon_07_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonsupermysterydungeon/3DS_PokemonSuperMysteryDungeon_10_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonsupermysterydungeon/3DS_PokemonSuperMysteryDungeon_03_TM_Standard.png',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Super+Mystery+Dungeon",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Super-Mystery-Dungeon-1021842.html',
    },
    // Pokemon Picross
    {
        id: 27,
        capasPokemon: './capas/picross.jpg',
        descricao: `Pokémon Picross is a freemium puzzle video game featuring Pokémon characters, developed by Jupiter Corporation and published by Nintendo and The Pokémon Company for the Nintendo 3DS.<br><br>The Pokémon you collect can help you solve puzzles through a variety of abilities. For example, Eevee’s Rising Reveal ability reveals squares vertically, centered around an activation square, while Lucario’s Hyper Scan ability scans the grid and corrects incorrect squares. Squirtle’s Blue Force changes the color of the numbers next to the rows with squares you can actually fill, turning them blue. When certain Pokémon use their ability, even just once, they run out of energy after you finish the level. However, they will recover their energy over time. In total, there are 12 abilities, each with different effects.`,
        logoPokemon: './logos/picross.webp',
        trailer: './videos/picross.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonpicross_engb/3DSDS_PokemonPicross_10_enGB_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonpicross_engb/3DSDS_PokemonPicross_02_enGB_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonpicross_engb/3DSDS_PokemonPicross_09_enGB_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonpicross_engb/3DSDS_PokemonPicross_08_enGB_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonpicross_engb/3DSDS_PokemonPicross_07_enGB_TM_Standard.png'
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Picross",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Aplicacoes-de-download-da-Nintendo-3DS/Pokemon-Picross-1074224.html?srsltid=AfmBOopUVlTIdB2J6HRO0e1-32X3LC9TJCXur1m2PSn33yjz6Z9HNOy-',
    },
    // Pokemon Detective Pikachu 3ds
    {
        id: 28,
        capasPokemon: './capas/detectivePikachu.jpg',
        descricao: `Detective Pikachu is an adventure game developed by Creatures Inc., published by The Pokémon Company, and distributed by Nintendo for the Nintendo 3DS family of systems. The game is a spin-off of the Pokémon franchise, in which the player teams up with a talking Pikachu to solve various mysteries.`,
        logoPokemon: './logos/detectivePikachu.png',
        trailer: './videos/detectivePikachu.mp4',
        galeryPhotos: [
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/software/switch/70010000068693/babbba586f6d80c82a4b167bd766b7c0a0827c7b22283bd568164130aba5de47', 
            'https://cdn.wccftech.com/wp-content/uploads/2018/04/DP1.jpg', 
            'https://rihappy.vtexassets.com/arquivos/ids/7053542/17319632884403.jpg?v=638682640943500000',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVe3UbduaNw_HrYyA-wOczbDvcpi9JXCt3wmJDY3PpVqRMMuo17hDg-AvE3CjTf3d_YMFzELU-tFtYKghC3mdnhLdjHqRoS-WNSCK0R71ZFY69Wx5OcQgqjehcwLaHlKibC6AZ59lrv60/s1600/CZ1pVVL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVAxjigUO2ZYqkY_HfgaejKf3GTbCWkIvyg&s'
        ],
        linkGoogle: 'https://www.google.com/search?tbm=shop&q=Pokemon+Detective+Pikachu+3ds',
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOool_SXvXsNQhG-ifX2CM8MmTSujQcqlPpgaxnToDpPz9gzN7yFz&slug=detective-pikachu-returns-switch#q=Pokemon+Detective+Pikachu&p=1&cat=gme&sort=df',
    },
    // Pokemon Rumble World
    {
        id: 29,
        capasPokemon: './capas/rumbleWorld.jpg',
        descricao: `The governor of the Toy Kingdom has entrusted you with the mission of finding as many Toy Pokémon as possible. Ride hot-air balloons to different areas to discover all kinds of Toy Pokémon, including Pokémon from Pokémon Red and Pokémon Blue or from Pokémon Omega Ruby and Pokémon Alpha Sapphire – some even capable of Mega Evolving. Where you land depends on the type of hot-air balloon you use, though you’ll never know exactly where in the territory you’ll touch down.<br><br>When you land, you’ll face hordes of wild Toy Pokémon in real-time battles, using toys from your own collection, and at the end of each stage you’ll encounter giant bosses you shouldn’t underestimate! Attacking is as simple as pressing a button, and each Toy Pokémon can have up to two moves. You can switch between any Toy Pokémon in your collection at any time, so make sure to use those with a type advantage over your opponents to defeat them.`,
        logoPokemon: './logos/rumbleWord.webp',
        trailer: './videos/rumbleWorld.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonrumbleworld/3DSDS_PokemonRumbleWorld_04_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonrumbleworld/3DSDS_PokemonRumbleWorld_03_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonrumbleworld/3DSDS_PokemonRumbleWorld_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonrumbleworld/3DSDS_PokemonRumbleWorld_01_TM_Standard.png',
            'https://sm.ign.com/t/ign_pt/articlepage/p/pokemon-ru/pokemon-rumble-world-shows-up-on-australian-classi_jast.1280.jpg'
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Rumble+World",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Rumble-World-982053.html?srsltid=AfmBOorngXYrPKMbqrKyX_qQSENtOMBsMsZpHqmAWBK-rZt1OHx3fZYA',
    },
    // Pokemon Shuffle
    {
        id: 30,
        capasPokemon: './capas/shuffle.jpg',
        descricao: `Pokémon Shuffle is a freemium puzzle video game developed by Genius Sonority and published by Nintendo and The Pokémon Company for the Nintendo 3DS. The game is a spin-off of the Pokémon series and features gameplay similar to Pokémon Battle Trozei.`,
        logoPokemon: './logos/shuffle.png',
        trailer: './videos/shuffle.mp4',
        galeryPhotos: [
            'https://emikothewriter.wordpress.com/wp-content/uploads/2018/12/48425551_374312746446449_2505082363071954944_n.png',
            'https://play-lh.googleusercontent.com/W5NuXSDgmxVuJipI4BKSGhqzDDyqD04LMWgXeXZxDaw1P4ysjhsLyXgIb3ZZiy8kGDar=w526-h296-rw',
            'https://archives.bulbagarden.net/media/upload/9/9a/Shuffle_Mega_Evolution.png',
            'https://www.destructoid.com/wp-content/uploads/2020/12/309157-Header.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr15ctUNuuZ5XBJkm8YJNWoSvZ3_oDPL-mVg&s'    
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Shuffle",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Shuffle&p=1&cat=all&sort=df',
    },
    // Pokemon The Thieves & 1000 Pokemon
    {
        id: 31,
        capasPokemon: './capas/1000.jpg',
        descricao: `Pokémon: The Thieves and the 1000 Pokémon is a special downloadable Nintendo 3DS game released to celebrate the movie Pokémon the Movie: Diancie and the Cocoon of Destruction. In this fast-paced adventure, you play as a thief on a mission to collect as many Pokémon as possible using the 3DS’s motion controls to sneak, gather treasures, and avoid capture. The more Pokémon you collect, the stronger your team becomes, and you can even use StreetPass to borrow Pokémon from other players. With its quick action and unique connection to the Pokémon movie, this game offers an exciting and fresh Pokémon experience.`,
        logoPokemon: './logos/1000.png',
        trailer: './videos/1000.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUXtc-bMsvXG8RY0UOemsbJrApMrWeFjW2A&s',
            'https://www.serebii.net/bandofthieves/7.jpg',
            'https://www.serebii.net/bandofthieves/18.jpg', 
            'https://www.serebii.net/bandofthieves/stages/4.jpg', 
            'https://www.nintenderos.com/wp-content/uploads/2014/05/The-Band-of-Thieves-and-1000-Pokemon4-300x177.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+The+Thieves+and+1000+Pokemons",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+The+Thieves+%26+1000+Pokemons&p=1&cat=all&sort=df',
    },
    // Pokemon Art Academy
    {
        id: 32,
        capasPokemon: './capas/art.jpg',
        descricao: `The Art Academy series debuted on the Nintendo DS in 2009, offering a comprehensive fine arts studio with a variety of drawing and painting tools. In the two titles released so far, aspiring artists can create true works of art, with the stylus on the Touch Screen acting as a pencil or paintbrush. With its step-by-step guidance, led by a friendly instructor, seemingly complex images are broken down into easy-to-follow lessons.<br><br>While previous Art Academy titles focused on traditional drawing and painting techniques, Pokémon Art Academy lets you take your first steps into illustration. Here, Professor Andy teaches you how to draw and refine your skills, starting with beginner Pokémon and working your way up to creating legendary masterpieces.`,
        logoPokemon: './logos/art.webp',
        trailer: './videos/art.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonartacademy_engb/3DS_PokemonArtAcademy_enGB_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonartacademy_engb/3DS_PokemonArtAcademy_enGB_05_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonartacademy_engb/3DS_PokemonArtAcademy_enGB_07_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonartacademy_engb/3DS_PokemonArtAcadamy_enGB_03_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonartacademy_engb/3DS_PokemonArtAcadamy_enGB_02_TM_Standard.png',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Art+Academy",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Art-Academy-881830.html',
    },
    // Pokemon Link Battle
    {
        id: 33,
        capasPokemon: './capas/linkBattle.webp',
        descricao: `In Pokémon Link: Battle! you must make matches of the same Pokémon from among all the many Pokémon that fill your Link Box – the large field of Pokémon on the lower screen. The Pokémon that appears on the top screen is the wild Pokémon that you are facing in battle. Line up three Pokémon in a row to clear your Pokémon from the box, and to attack and reduce the HP of the wild Pokémon that you face. When its HP reaches zero, you will be able to Link that Pokémon!<br><br>As time passes, the wild Pokémon will also lash out to attack you in return. When you’re attacked by a wild Pokémon, the Link Box will lose some of its energy. The wild Pokémon you face may even try to get in your way! If the Link Box’s energy reaches zero, it’s game over.`,
        logoPokemon: './logos/linkBattle.png',
        trailer: './videos/linkBattle.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonlinkbattle_engb/3DSDS_PokemonLinkBattle_enGB_03_TM_Standard.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2-4PEyxsxvgIrC4gnOjDnqZYw4T2AeTBMQ&s',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonlinkbattle_engb/3DSDS_PokemonLinkBattle_enGB_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsds_pokemonlinkbattle_engb/3DSDS_PokemonLinkBattle_enGB_04_TM_Standard.png',
            'https://assetsio.gnwcdn.com/139456282908.png?width=414&quality=70&format=jpg&auto=webp'    
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Link+Battle",
        linkNintendo: 'https://www.nintendo.com/en-gb/Games/Nintendo-3DS-download-software/Pokemon-Link-Battle--861968.html?srsltid=AfmBOor44pJ8oy-2lMKHZisO-furWJFeBt8DyPZ_GjVnBCsgKj5HFwul',
    },
    // Pokemon Bank / Poke Transporter
    {
        id: 34,
        capasPokemon: './capas/bank.jpg',
        descricao: `Store, manage, and transfer your Pokémon like never before with Pokémon Bank for Nintendo 3DS! This online cloud service lets you safely deposit and organize up to 3,000 Pokémon across multiple boxes, making it the perfect tool for dedicated Trainers who want to keep their collection secure and accessible.<br><br>Easily transfer your Pokémon from Pokémon X, Pokémon Y, Omega Ruby, Alpha Sapphire, and even from previous generations through Poké Transporter. Move your Pokémon between compatible titles and bring your old partners along for new adventures!`,
        logoPokemon: './logos/bank.png',
        trailer: './videos/bank.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_PokemonBank_enGB_image1600w.jpg',
            'https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/video-games/pokemon_bank/pokemon-bank-diagram-ultra-sun-ultra-moon-en.jpg',
            'https://u-mercari-images.mercdn.net/photos/m61337527656_1.jpg', 
            'https://s2-techtudo.glbimg.com/XWCJaISbbUZyq_K6R-VrKCITJ_8=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/C/k/XF7MLWRzAzNJcW87iLmg/2017-01-26-pokemon-sun-moon-bank-4.jpg', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27Bo1Nc61HIyQOl2deSCH7278YtHupqkWlA&s',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Bank",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Bank&p=1&cat=all&sort=df',
    },
    // Pokemon Tretta Lab
    {
        id: 35,
        capasPokemon: './capas/lab.webp',
        descricao: `Experience the excitement of Pokémon Tretta Lab for Nintendo 3DS, where the world of arcade Pokémon battles comes to life in your hands! Use the special Tretta Scanner accessory to read real Tretta discs and bring your Pokémon into the game in stunning 3D detail.<br><br>Analyze your Tretta Pokémon, check their battle types, compare strengths, and even watch them face off in thrilling automated battles! Each scan reveals a new layer of strategy, letting you build your ideal Pokémon team and study their stats like a real Pokémon Professor.`,
        logoPokemon: './logos/lab.webp',
        trailer: './videos/trettaLab.mp4',
        galeryPhotos: [
            'https://i.ytimg.com/vi/8DITWF44DCs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNhNQqBwLZeQFPsYlLamNQmwkzgw', 
            'https://i.ytimg.com/vi/ge2uNMIZKqM/maxresdefault.jpg',
            'https://cdns.app/kTz9GfxgqW1d/assets/image/big/080274ee4c23c7383b2b0cd3dbf159f5_1721877521.jpg',
            'https://cdns.app/kTz9GfxgqW1d/assets/image/big/d308764f2324087b2caa9d4ca278c6c3_1721877521.jpg', 
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgfswBUYsomUruewJPdRj45tqbfhAJZho9AtqbuVeEkCSaXhKebYs3ZQd13s63N8dQdtIvp3n7H8Wn0wrSzscmAjfbZCOOztMPhN5vIdy-xb7IljELX2cuprHJ6D9We1FbSRJSIHuxFy0/s1600/Pok%C3%A9mon+Tretta.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Tretta+Lab",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Tretta+Lab&p=1&cat=all&sort=df',
    },
    // Pokemon Mystery Dungeon Gates to Infinity
    {
        id: 36,
        capasPokemon: './capas/infinity.png',
        descricao: `Explore over 20 thrilling dungeons, each filled with all kinds of Pokémon, treasures, and surprises! Every dungeon has its own unique characteristics when it comes to the Pokémon you encounter, the type of terrain, and the number of floors. However, their layout changes every time you enter, meaning the number of dungeons to explore is infinite! Moreover, the items and treasures found within each dungeon can help you progress through the game, as well as some of the Pokémon you battle, since you can recruit them to join you on your mission.<br><br>In addition to the dungeons from the main story of Pokémon Mystery Dungeon: Gates to Infinity, you can also discover the Magnagates—gateways to a special type of dungeon accessible through the outer cameras of your Nintendo 3DS. With these, you can "scan" any round object you find in the real world, which will open a new entrance to a unique place where no Pokémon has ever been before!`,
        logoPokemon: './logos/infinity.webp',
        trailer: './videos/infinity.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonmysterydungeongti_engb/3DS_PokemonMysteryDungeonGTI_enGB_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonmysterydungeongti_engb/3DS_PokemonMysteryDungeonGTI_enGB_07_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonmysterydungeongti_engb/3DS_PokemonMysteryDungeonGTI_enGB_12_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonmysterydungeongti_engb/3DS_PokemonMysteryDungeonGTI_enGB_22_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_7/3ds_pokemonmysterydungeongti_engb/3DS_PokemonMysteryDungeonGTI_enGB_54_TM_Standard.png',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Gates+To+Infinity",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Mystery-Dungeon-Gates-to-Infinity-729310.html',
    },
    // Pokemon Pokedex 3D pro
    {
        id: 37,
        capasPokemon: './capas/3dpro.webp',
        descricao: `Become the ultimate Pokémon Trainer! Learn everything about Pokémon with the new Pokédex 3D Pro for the Nintendo 3DS and Nintendo 3DS XL consoles. It’s the perfect companion for Pokémon Black Version 2 and Pokémon White Version 2, and it’s quick and easy to download from the Nintendo eShop.<br><br>This enhanced version includes detailed statistics and information on over 640 Pokémon from throughout the series’ history. With this tool, you can check each Pokémon’s evolutions, access a list of moves each Pokémon can learn, and gain knowledge you can take with you wherever you go! The Pokémon Challenge also lets you test your newly acquired Pokémon knowledge to see if you’re already a Pokémon expert!`,
        logoPokemon: './logos/3d.webp',
        trailer: './videos/3dpro.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_Pokedex3DPro_image1600w.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_3ds_15/3dsdownloadsoftware_pokedex3dpro_eses/P05_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_3ds_15/3dsdownloadsoftware_pokedex3dpro_eses/P05_03_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_3ds_15/3dsdownloadsoftware_pokedex3dpro_eses/P05_05_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_3ds_15/3dsdownloadsoftware_pokedex3dpro_eses/P05_06_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokédex+3D+Pro",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Aplicacoes-de-download-da-Nintendo-3DS/Pokedex-3D-Pro-523668.html',
    },
    // Pokemon Dream Radar
    {
        id: 38,
        capasPokemon: './capas/radar.webp',
        descricao: `The game invites you to take on the role of an assistant working for Professor Burnet, a scientist studying the Interdream Zone. Move your Nintendo 3DS in all directions in this action game controlled by the player’s movements, and try to hit the Dream Clouds with your light beam to earn rewards!<br><br>Fun and accessible for everyone, this game is the perfect fact-filled companion for Pokémon Black Version 2 and Pokémon White Version 2. Any Pokémon or items caught in Pokémon Dream Radar can be transferred to Pokémon Black Version 2 and Pokémon White Version 2, which is especially useful since the Pokémon you catch may have hidden abilities not available in those games, as well as items you wouldn’t normally find. Try to complete your Pokédex!`,
        logoPokemon: './logos/radar.webp',
        trailer: './videos/radar.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsdownloadsoftware_pokemon_dream_radar/1DreamCloudFloatSceneCenter_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsdownloadsoftware_pokemon_dream_radar/1DreamCloudFloatSceneLeft_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsdownloadsoftware_pokemon_dream_radar/1DreamCloudFloatSceneRight_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsdownloadsoftware_pokemon_dream_radar/2DreamCloudShootingScene_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/nintendo_3ds_download_software_2/3dsdownloadsoftware_pokemon_dream_radar/4ThundurusShootingScene_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Dream+Radar",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Aplicacoes-de-download-da-Nintendo-3DS/Pokemon-Dream-Radar-523679.html',
    },
    // Pokemon Pokedex 3D
    {
        id: 39,
        capasPokemon: './capas/3d.jpg',
        descricao: `Pokédex 3D lets you uncover information about all the new Pokémon from Pokémon Black Version and Pokémon White Version, without needing to own a copy of either game. Pokédex 3D is the most detailed and comprehensive Pokédex ever seen in a video game, bringing Pokémon to life by allowing you to view them from any angle, in various poses, and with fun animations — all in 3D.`,
        logoPokemon: './logos/pokedex.webp',
        trailer: './videos/3d.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_Pokedex3D_image1600w.jpg',
            'https://www.nintendoworldreport.com/media/26459/1/9.jpg',
            'https://www.serebii.net/pokedex3d/photosticker.jpg', 
            'https://img.pokemondb.net/images/pokedex3d/hydreigon.jpg', 
            'https://media.pocketgamer.com/artwork/na-qzt/pokedex_3d_pro1.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokédex+3D",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Noticias/2011/Pokedex-3D-gratis-os-Pokemon-ganham-vida-em-3D--252920.html',
    },
    // Pokemon Rumble Blast
    {
        id: 40,
        capasPokemon: './capas/rumbleBlast.png',
        descricao: `Pokémon Rumble Blast, known in Europe and Australia as Super Pokémon Rumble, and in Japan as Super Pokémon Scramble, is a Pokémon video game for the Nintendo 3DS.`,
        logoPokemon: './logos/rumbleBlast.webp',
        trailer: './videos/rumbleBlast.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms/img/video-games/pokemonrumbleblast/screenshots/prb_ss01.jpg',
            'https://cdn.mobygames.com/promos/2062610-pokemon-rumble-blast-screenshot.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStakMaQvUcHzIroDticwX45orGgRufQwnhJg&s',
            'https://images.tcdn.com.br/img/editor/up/621461/actiongamepoke120619img3.jpg',
            'https://dsmedia.ign.com/ds/image/article/121/1210598/pokemon-rumble-blast-20111024042042038-000.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Rumble+Blast",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOoqpVf5UUjzR5me_OT1nPGyd_-YsUygTkFA30cYn14_dGZU1_Qmx#q=Pokemon+Rumble+Blast&p=1&cat=all&sort=df',
    },
    // Pokemon PokePark 2 Wonders Beyond
    {
        id: 41,
        capasPokemon: './capas/pokepark2.jpg',
        descricao: `In PokéPark 2: Wonders Beyond, you control one of four Pokémon characters: Pikachu and the Unova starter Pokémon—Oshawott, Snivy, and Tepig. Each of them has unique abilities that are essential for rescuing lost Pokémon. Pikachu’s electric moves can help activate devices along the way; Oshawott can move through water; Snivy moves quickly and can jump higher than any other Pokémon; and Tepig can destroy obstacles.<br><br>This wide variety of abilities allows Pikachu and his companions to adapt to almost any environment or situation, with easy-to-use controls that make PokéPark 2: Wonders Beyond enjoyable for both Pokémon beginners and fans, as well as veteran PokéPark players.`,
        logoPokemon: './logos/pokePark2.webp',
        trailer: './videos/pokePark2.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokepark2_30012012_engb/EN_V2_P6_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokepark2_30012012_engb/EN_V2_P9_06_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokepark2_30012012_engb/EN_V2_P3_03_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokepark2_30012012_engb/EN_V2_P10_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokepark2_30012012_engb/EN_V1_P3_01_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+PokePark+2+Wonders+Beyond",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Wii/PokePark-2-Wonders-Beyond-282640.html?srsltid=AfmBOopeuHt3n2nvbo9ki_btkfaFT5Bp1Q6dwLyru4PZB4IL1rQ-i-Pz',
    },
    // Pokemon Mystery Dungeon Let's Go Tempest Adventure Squad!
    {
        id: 42,
        capasPokemon: './capas/tempest.jpg',
        descricao: `Pokémon Mystery Dungeon: Let’s Go! Light Adventure Squad! takes you on an exciting journey through mysterious dungeons filled with wild Pokémon and hidden treasures. Team up with friends, explore ever-changing environments, and complete missions to help Pokémon in need. Solve puzzles, battle foes, and strengthen your bonds as you uncover the secrets of the Pokémon world in this thrilling adventure!`,
        logoPokemon: './logos/tempest.png',
        trailer: './videos/tempest.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDJLwrNr1oYXAh5NTql0arx6sw4MtawCPYQ&s',
            'https://images.igdb.com/igdb/image/upload/t_720p/sc8af8.jpg',
            'https://images.igdb.com/igdb/image/upload/t_1080p_2x/sc8af1.webp', 
            'https://www.siliconera.com/wp-content/uploads/2020/05/wiiware-pmd.jpg?fit=710%2C400', 
            'https://images.gog.com/fa309ec902791f3f3ce0ce90dc96d0128e32b2473c1c70c3ae4e7a535ab5fd1a.webp?namespace=gamesdb',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Mystery+Dungeon+Lets+Go+Tempest+Adventure+Squad",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Mystery+Dungeon+Lets+Go+Tempest+Adventure+Squad&p=1&cat=all&sort=df',
    },
    // Pokemon Mystery Dungeon Let´s Go! Radiant Adventure Squad!
    {
        id: 43,
        capasPokemon: './capas/radiant.jpg',
        descricao: `Pokémon Mystery Dungeon: Let’s Go! Light Adventure Squad! takes you on an exciting journey through mysterious dungeons filled with wild Pokémon and hidden treasures. Team up with friends, explore ever-changing environments, and complete missions to help Pokémon in need. Solve puzzles, battle foes, and strengthen your bonds as you uncover the secrets of the Pokémon world in this thrilling adventure!`,
        logoPokemon: './logos/radiant.png',
        trailer: './videos/radiant.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFoevEHTHnHConsl1AIQCkiKy54iiATouBw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXMLOXSAPaNnlcEt7II3ddDK5qwtIZNqc1g&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57V09ml2x1OsZ9TKBcbI2Blv7qHmX13_7yg&s', 
            'https://cdn.gamebezz.com/games/games/screenshot/pokemon-mystery-dungeon-go-for-it-radiant-adventure-squad/pokemon-mystery-dungeon-go-for-it-radiant-adventure-squad-screenshots-386723-gamebezz-com.jpg', 
            'https://cdn.gamebezz.com/games/games/screenshot/pokemon-mystery-dungeon-go-for-it-radiant-adventure-squad/pokemon-mystery-dungeon-go-for-it-radiant-adventure-squad-screenshots-386730-gamebezz-com.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Mystery+Dungeon+Go+For+It+Radiant+Adventure+Squad",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Mystery+Dungeon+Go+For+It+Radiant+Adventure+Squad&p=1&cat=all&sort=df',
    },
    // Pokemon Mystery Dungeon Keep Going! Wildfire Adventure Squad!
    {
        id: 44,
        capasPokemon: './capas/blazing.png',
        descricao: `Pokémon Mystery Dungeon: Keep Going! Wildfire Adventure Squad takes you on an exciting journey through dangerous dungeons filled with wild Pokémon and unexpected challenges. Assemble your team, explore ever-changing environments, and complete missions to help Pokémon in need. With strategic battles, evolving friendships, and thrilling adventures at every turn, it’s up to you and your squad to face the heat and overcome the wildfires threatening the Pokémon world!`,
        logoPokemon: './logos/wildFire.png',
        trailer: './videos/wildfire.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiFSyr7I9v6mmmTGQE-7byG6wCMilqctyoA&s',
            'https://images.igdb.com/igdb/image/upload/t_1080p_2x/sc8aep.webp',
            'https://images.igdb.com/igdb/image/upload/t_1080p_2x/sc8aeq.webp', 
            'https://images.igdb.com/igdb/image/upload/t_1080p_2x/sc8aen.webp', 
            'https://images.igdb.com/igdb/image/upload/t_1080p_2x/sc8aes.webp',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Mystery+Dungeon+Keep+Going+Wildfire+Adventure+Squad",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon++Mystery+Dungeon+Keep+Going%21+Blazing+Adventure+Squad%21&p=1&cat=all&sort=df',
    },
    // PokePark Pikachu
    {
        id: 45,
        capasPokemon: './capas/pokepark.jpg',
        descricao: `In PokéPark Wii: Pikachu’s Adventure, it’s up to you to protect the PokéPark from danger by collecting pieces of the precious Sky Prism and ensuring the park’s safety. But the Sky Prism pieces are scattered across all kinds of environments, and you’ll only be able to obtain them by completing challenging tasks… Saving the day won’t be easy!<br><br>The adventure begins when Pikachu and some Pokémon friends are drawn into a mysterious tunnel that turns out to be an entrance to a place known as PokéPark. This world features vast beaches, snowy landscapes, underground mines, and — above all — an endless variety of fun games to enjoy!`,
        logoPokemon: './logos/pokepark.png',
        trailer: './videos/pokepark.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_7/wii_pokeparkwiipikachusadventure/Wii_PokeParkWiiPikachusAdventure_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_7/wii_pokeparkwiipikachusadventure/Wii_PokeParkWiiPikachusAdventure_03_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_7/wii_pokeparkwiipikachusadventure/Wii_PokeParkWiiPikachusAdventure_04_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_7/wii_pokeparkwiipikachusadventure/Wii_PokeParkWiiPikachusAdventure_13_TM_Standard.png', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/wii_7/wii_pokeparkwiipikachusadventure/Wii_PokeParkWiiPikachusAdventure_16_TM_Standard.png',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=PokePark+Pikachu+Adventure",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Wii/PokePark-Wii-Pikachu-s-Adventure-282651.html',
    },
    // Pokemon Rumble
    {
        id: 46,
        capasPokemon: './capas/rumble.jpg',
        descricao: `Discover a new type of Pokémon challenge – exclusive to WiiWare! Pokémon Rumble is an action game where you control Toy Pokémon and fight waves of enemy Pokémon to become the victorious Pokémon!<br><br>Defeated Toy Pokémon can be added to your collection. Switch between collected Pokémon and use their abilities to defeat the strongest Pokémon, and even compete in the Battle Royale to test your skills against many Pokémon at once.`,
        logoPokemon: './logos/rumble.png',
        trailer: './videos/rumble.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonrumble_ukv/WPSP_UKV_TS_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonrumble_ukv/WPSP_UKV_SCR005_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonrumble_ukv/WPSP_UKV_SCR004_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonrumble_ukv/WPSP_UKV_SCR003_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonrumble_ukv/WPSP_UKV_SCR001_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Rumble+WiiWare",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/WiiWare/Pokemon-Rumble--286239.html?srsltid=AfmBOorrANlxEawoNxLi0JGA2Zlr6aPX2D55AiynpdC_iYzL3AWauCSm',
    },
    // Pokemon Ranch
    {
        id: 47,
        capasPokemon: './capas/ranch.webp',
        descricao: `The Pokémon phenomenon makes its debut on the WiiWare digital service with My Pokémon™ Ranch. Watch Pokémon and Mii characters interact with each other for the very first time! Enjoy the relaxing ranch life by watching your ranch and its Pokémon, or by taking photos and sending them to your friends. The more Pokémon and Mii characters you bring to your ranch, the more fun you’ll have!<br><br>My Pokémon™ Ranch can be connected to Pokémon Diamond and Pokémon Pearl Nintendo DS game cards, allowing you to bring the Pokémon you’ve caught in those games to your ranch! You can place up to 1,000 Pokémon from as many as eight different game cards! Liven up your ranch and have fun with your friends and family.`,
        logoPokemon: './logos/ranch.png',
        trailer: './videos/ranch.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonranch/WBMP_15_1_UKV_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonranch/WBMP_10_1_UKV_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonranch/WBMP_15_2_UKV_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonranch/WBMP_17_9_UKV_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wiiware_7/pokemonranch/WBMP_13_2_ukv_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+My+Ranch",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/WiiWare/My-Pokemon-Ranch-285986.html',
    },
    // Pokemon Battle Revolution
    {
        id: 48,
        capasPokemon: './capas/revolution.png',
        descricao: `Jump into action and prove that when it comes to training Pokémon, you’re a true world-class leader! Pokémon Battle Revolution lets you copy the Pokémon you’ve caught and raised in Pokémon Diamond and Pokémon Pearl on your Nintendo DS to the Wii for epic 3D battles against Trainers from all around the world!<br><br>Pokémon Battle Revolution begins as you enter Pokétopia, a theme park made up of ten different Colosseums built for Pokémon battles. As you explore Pokétopia, you’ll be able to customize your Trainer’s appearance, uncover secrets, and watch your favorite Pokémon battle in spectacular style against opponents from across the globe.`,
        logoPokemon: './logos/revolution.png',
        trailer: './videos/revolution.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokemon_battle_revolution_wii_en/pokemon_battle_revolution_wii_12_en_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokemon_battle_revolution_wii_en/pokemon_battle_revolution_wii_7_en_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokemon_battle_revolution_wii_en/pokemon_battle_revolution_wii_1_en_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokemon_battle_revolution_wii_en/pokemon_battle_revolution_wii_5_en_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/wii_13/pokemon_battle_revolution_wii_en/pokemon_battle_revolution_wii_10_en_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Battle+Revolution",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Wii/Pokemon-Battle-Revolution-282629.html',
    },
    // Pokemon TCG
    {
        id: 49,
        capasPokemon: './capas/tcg.png',
        descricao: `Pokémon Trading Card Game, or Pokémon Estampas Ilustradas in Brazil, is a collectible card game developed by Creatures Inc., based on the Japanese Pokémon franchise.`,
        logoPokemon: './logos/tradingCard.png',
        trailer: './videos/tcg.mp4',
        galeryPhotos: [
            'https://gonintendo.com/attachments/image/64563/file/medium-bc218b561d85620875395e735612a2dc.webp',
            'https://i.ebayimg.com/images/g/XfIAAOSwoeZoIDZW/s-l225.jpg',
            'https://http2.mlstatic.com/D_NQ_NP_875541-MLA89157790471_082025-O.webp',
            'https://assetsio.gnwcdn.com/White-Flare.webp?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',
            'https://totalcards.net/cdn/shop/articles/black-bolt-white-flare-englishFacebook_98ae1c11-308a-40ea-92e9-d190dd759962.png?v=1752832589&width=800'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Trading+Card+Game",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Trading+Card+Game&p=1&cat=all&sort=df',
    },
    // Pokemon Conquest
    {
        id: 50,
        capasPokemon: './capas/conquest.jpg',
        descricao: `In Pokémon Conquest, players take on the role of a young warlord who is paired with a Pokémon. Together, they set out on a journey to recruit warriors to defend their growing kingdom. Along the way, they encounter not only various Pokémon but also warriors and warlords inspired by figures from medieval Japan. The game features nearly 200 Pokémon, including many from the recently released Pokémon Black Version and Pokémon White Version.<br><br>On the battlefields of Pokémon Conquest, players must carefully choose the best Pokémon types to deal maximum damage to their opponents. During turn-based battles with two teams of six Pokémon each, players need to adapt their tactical decisions to circumstances that can change every turn. This keeps every battle exciting right up to the very last move.`,
        logoPokemon: './logos/conquest.png',
        trailer: './videos/conquest.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonconquest/WarriorSkillsAfter_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonconquest/WarriorSkillExample01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonconquest/TrainingGroundRecruit01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonconquest/Motonari_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonconquest/ThunderCatLuxray_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Conquest",
        linkNintendo: 'https://www.nintendo.com/nl-nl/Games/Nintendo-DS/Pokemon-Conquest-523602.html#Overzicht',
    },
    // Pokemon Typing Adventure
    {
        id: 51,
        capasPokemon: './capas/typing.webp',
        descricao: `Typing Adventure, known in Japan as Battle & Get! Pokémon Typing DS, is an educational typing video game and a Pokémon spin-off title.`,
        logoPokemon: './logos/typing.png',
        trailer: './videos/typing.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5PJnsPmVanM_JvP9EHEH0GSXrXFFUGynBg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_DP402FKTcJcbXGerRBBeBL9nNykUiLRJw&s',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/learnwithpokemontypingadventure_engb/PomemonTypingKidsEx3DS.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDJXN4lqooXKINth7LRK2Qyl3KtfiutV6iY1yAFvV9F9cBbFG_t9YlxEuEk3-A2MKh6e4P9HomNhhgn_7g1RRTO7D_Ww5kp7IX3c-ksJtvMPkoVB8BtxbEppzU2XA1tQDqjIUSnp-75HE/s1497/Pokemon-Typing-Adventure-Tutorial.jpg', 
            'https://i.ytimg.com/vi/AV49Kmhh7iw/maxresdefault.jpg', 
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Typing+Adventure",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Typing+Adventure&p=1&cat=all&sort=df',
    },
    // Pokemon Mystery Dungeon Explorers of Sky
    {
        id: 52,
        capasPokemon: './capas/mysterySky.jpg',
        descricao: `Become a Pokémon and experience the world in a completely different way. Embark on a spectacular adventure to save the Pokémon world!<br><br>Play as one of 19 different Pokémon. Discover which one you will become and interact with over 490 Pokémon on your journey!`,
        logoPokemon: './logos/mysterySky.webp',
        trailer: './videos/mysterySky.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonexplorersofsky/WiiUVC_PokemonMysteryDungeonExplorersOfSky_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonexplorersofsky/WiiUVC_PokemonMysteryDungeonExplorersOfSky_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonexplorersofsky/WiiUVC_PokemonMysteryDungeonExplorersOfSky_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonexplorersofsky/WiiUVC_PokemonMysteryDungeonExplorersOfSky_03_TM_Standard.jpg',
            'https://preview.redd.it/i-have-just-beaten-pok%C3%A9mon-mystery-dungeon-explorers-of-sky-v0-rvw24ptdzs191.jpg?auto=webp&s=191ebcd7ba5a1b8530563eb6925e982f2264373a'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Explorers+of+Sky",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Mystery-Dungeon-Explorers-of-Sky-272409.html?srsltid=AfmBOoqrRY_X3gWTyvy6c5m4HWhkqlyokvvVwZftHfAicuN60aqXhsLV',
    },
    // Pokemon Mystery Dungeon Explorers of Darkness
    {
        id: 53,
        capasPokemon: './capas/darkness.jpg',
        descricao: `When you wake up on a strange island and discover that you’ve turned into a Pokémon, many questions will cross your mind — questions that can only be answered once you set off on an epic journey of discovery. Along the way, you’ll embark on missions to recover lost items, chase down fugitives, and take part in the search for a precious artifact stolen by a time-traveling Pokémon!<br><br>Of course, for such a challenging adventure, you’ll need some help. Building a trustworthy Pokémon Exploration Team to travel alongside you through dangerous dungeons will be vital for your survival. And don’t forget to train your team before heading out on any mission — teach them the skills they’ll need to ensure victory in the many Pokémon battles that lie ahead!`,
        logoPokemon: './logos/darkness.png',
        trailer: './videos/timeDark.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon05_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon09_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon08_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon06_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon02_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Explorers+Of+Darkness",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Mystery-Dungeon-Explorers-Of-Darkness-272398.html',
    },
    // Pokemon Mystery Dungeon Explorers of Time
    {
        id: 54,
        capasPokemon: './capas/time.jpg',
        descricao: `When you wake up on a strange island and discover that you’ve turned into a Pokémon, many questions will cross your mind — questions that can only be answered once you set off on an epic journey of discovery. Along the way, you’ll embark on missions to recover lost items, chase down fugitives, and take part in the search for a precious artifact stolen by a time-traveling Pokémon!<br><br>Of course, for such a challenging adventure, you’ll need some help. Building a trustworthy Pokémon Exploration Team to travel alongside you through dangerous dungeons will be vital for your survival. And don’t forget to train your team before heading out on any mission — teach them the skills they’ll need to ensure victory in the many Pokémon battles that lie ahead!`,
        logoPokemon: './logos/time.webp',
        trailer: './videos/timeDark.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon05_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon04_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokemonmysterydungeon/pokemonmysterydungeon07_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Explorers+Of+Time",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Mystery-Dungeon-Explorers-Of-Time-272420.html',
    },
    // Pokemon Mystery Dungeon Blue Rescue Team
    {
        id: 55,
        capasPokemon: './capas/mysteryBlue.jpeg',
        descricao: `In Pokémon Mystery Dungeon: Blue Rescue Team, you wake up in a world entirely inhabited by Pokémon. What’s more, you yourself are a Pokémon, with no memory of how you got there or how to return to human form.<br><br>But perhaps there’s a reason for your arrival! Now that you understand the language of Pokémon, you discover that a series of natural disasters is threatening the community. Soon, you befriend another Pokémon, and together you form a rescue team to help Pokémon in need.`,
        logoPokemon: './logos/mysteryBlue.webp',
        trailer: './videos/mysteryBlue.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonbluerescueteam/WiiUVC_PokemonMysteryDungeonBlueRescueTeam_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonbluerescueteam/WiiUVC_PokemonMysteryDungeonBlueRescueTeam_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonbluerescueteam/WiiUVC_PokemonMysteryDungeonBlueRescueTeam_03_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonbluerescueteam/WiiUVC_PokemonMysteryDungeonBlueRescueTeam_04_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonbluerescueteam/WiiUVC_PokemonMysteryDungeonBlueRescueTeam_05_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Blue+Rescue+Team",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Mystery-Dungeon-Blue-Rescue-Team-272387.html',
    },
    // Pokemon Ranger Guardian
    {
        id: 56,
        capasPokemon: './capas/rangerGuardian.jpg',
        descricao: `Take on the role of a Pokémon Ranger tasked with protecting local people and wild Pokémon from the evil Pokémon Pinchers with the help of your partner, Ukulele Pichu. To save the land from the powers of darkness, join forces with the Legendary Pokémon and stop the Pokémon Pinchers from carrying out their evil plans!<br><br>Capture and befriend Pokémon by circling them with the Capture Styler on the Touch Screen. The Pokémon you befriend will support you on your adventure by using their abilities to remove obstacles in your path or by helping you capture even stronger Pokémon. For the first time in the series, you can call Pokémon to aid you by drawing the Ranger Sign on the Touch Screen. Many Pokémon are available to support you, including several Legendary Pokémon such as Raikou, Entei, and Suicune.`,
        logoPokemon: './logos/rangerGuardian.png',
        trailer: './videos/rangerGuardian.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangerguardiansigns/WiiUVC_PokemonRangerGuardianSigns_01_TM_Standard.jpg',
            'https://assets.nintendo.eu/video/private/w_900/uvaz3sfg1boiqgtiognu.jpg',    
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangerguardiansigns/WiiUVC_PokemonRangerGuardianSigns_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangerguardiansigns/WiiUVC_PokemonRangerGuardianSigns_03_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangerguardiansigns/WiiUVC_PokemonRangerGuardianSigns_02_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Ranger+Guardian",
        linkNintendo: 'https://www.nintendo.com/en-gb/Games/Nintendo-DS/Pokemon-Ranger-Guardian-Signs-272453.html?srsltid=AfmBOoq18BTh-mDbYDgK0jGdbNxu459dxmcEWYGB_d2D9GHJC_ifK6TX',
    },
    // Pokemon Ranger Shadows of Almia
    {
        id: 57,
        capasPokemon: './capas/rangerShadows.webp',
        descricao: `Become a Top Ranger and protect hundreds of different Pokémon species from a cruel organization in Pokémon Ranger: Shadows of Almia. This second game in the Pokémon Ranger series once again relies on you to capture Pokémon using the Touch Screen and then use their abilities to save the day. This time, however, you’ll encounter over 50 Pokémon that weren’t featured in the original game, including many from Pokémon Diamond and Pokémon Pearl.<br><br>As you begin your adventure at the Ranger School as a Ranger Apprentice, you’re filled with excitement at the prospect of one day becoming a Top Ranger and using your knowledge to protect Almia and its many Pokémon. What you don’t yet know is that shortly after completing your studies, you’ll put your skills to the test in an adventure that will determine the future of the region.`,
        logoPokemon: './logos/rangerShadows.webp',
        trailer: './videos/rangerShadows.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangershadowsofalmia/WiiUVC_PokemonRangerShadowsOfAlmia_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangershadowsofalmia/WiiUVC_PokemonRangerShadowsOfAlmia_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangershadowsofalmia/WiiUVC_PokemonRangerShadowsOfAlmia_03_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangershadowsofalmia/WiiUVC_PokemonRangerShadowsOfAlmia_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonrangershadowsofalmia/WiiUVC_PokemonRangerShadowsOfAlmia_05_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Ranger+Shadows+of+Almia",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Ranger-Shadows-of-Almia-272464.html?srsltid=AfmBOorWTCsA9wJZ-IElnZxVL-aj_WLRrbXK0RLvKietg0gD1YogB12K',
    },
    //Pokemon Ranger
    {
        id: 58,
        capasPokemon: './capas/ranger.png',
        descricao: `In Pokémon Ranger, instead of playing as a Pokémon Trainer, you play as a Ranger and are responsible for protecting wild Pokémon. Capturing Pokémon is also done in a completely different way: you have to use a Capture Styler and draw circles around the Pokémon with your stylus.`,
        logoPokemon: './logos/ranger.webp',
        trailer: './videos/ranger.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonranger/WiiUVC_PokemonRanger_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonranger/WiiUVC_PokemonRanger_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonranger/WiiUVC_PokemonRanger_03_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonranger/WiiUVC_PokemonRanger_04_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonranger/WiiUVC_PokemonRanger_05_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Ranger",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Ranger-272442.html',
    },
    // Pokemon Trozei
    {
        id: 59,
        capasPokemon: './capas/trozei.png',
        descricao: `Pokémon Trozei! is a puzzle game from the Pokémon series made for the Nintendo DS. Very similar to Pokémon Puzzle Challenge and Pokémon Puzzle League, it uses Pokémon lined up in columns, requiring you to match four in a row horizontally or vertically to clear them.`,
        logoPokemon: './logos/trozei.webp',
        trailer: './videos/trozei.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms/img/video-games/trozei/screenshots/trozei_ss2.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2kCJMvJ7qjzy3sSGJyAJ0nXWtZcp9eENhxXvOk7tCyqE1YygPytvgkhZL3NctxzQlEBwEPMv2jf7RelT5fcEkMD8YxT0fQYwkNdLqTgvDGgy867ufWRFm88S6crfH0MFBsAFo4hL9u4o/s1560/Pokemon-Trozei-Gameplay.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNppqnNu6SQ-90WwUrhG3iIQ2imLSbK0zeTw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQblZ7CogeCEdsrYmqwH46w5RHHgxQ1XHMDQ&s',
            'https://i.ebayimg.com/images/g/pawAAOSwQ55grvfS/s-l1200.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Trozei",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/?srsltid=AfmBOoqGiFcEPUWIhNNpbz2x-admGZeyO7WwckkZiXbSRrOv9puxBIyJ#q=Pokemon+Trozei&p=1&cat=all&sort=df',
    },
    // Pokemon Dash
    {
        id: 60,
        capasPokemon: './capas/dash.jpg',
        descricao: `Faster than a speeding Latios, here comes Pikachu! The Pokémon Dash Grand Prix is taking place across the Pokémon Islands, and there’s one yellow Pokémon determined to take the top prize! <br><br>In Pokémon Dash, you use the Touch Screen to propel your Pokémon toward the finish line. Simply use the stylus to rub the screen in the direction you want Pikachu to move. When you rub the screen more frantically, Pikachu will tear across the level with that much more zip.`,
        logoPokemon: './logos/dash.avif',
        trailer: './videos/dash.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_dash/pokmon_dash_3_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_dash/pokmon_dash_4_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_dash/pokmon_dash_2_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_dash/pokmon_dash_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/nintendo_ds_13/pokmon_dash/pokmon_dash_1_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Dash+Nintendo+Ds",
        linkNintendo: 'https://www.nintendo.com/en-za/Games/Nintendo-DS/Pokemon-Dash-272343.html?srsltid=AfmBOoq3muTMaR8WSgsTndYORY6bUUyXdXd1ZKk0jaROsaO_Cb_TP3fp',
    },
    // Pokemon XD
    {
        id: 61,
        capasPokemon: './capas/xd.png',
        descricao: `Embark on a brand-new and glorious Pokémon odyssey — in the Orre region! Uncover the mystery of Shadow Lugia in this full-length role-playing adventure for the GameCube.<br><br>Start with just an Eevee, but you’ll be able to capture more Pokémon as you explore various towns and locations, Snagging and Purifying the Shadow Pokémon of rival Trainers. An engaging storyline and stunning 3D graphics come together to create an adventure no Pokémon fan will want to miss.`,
        logoPokemon: './logos/xd.png',
        trailer: './videos/xd.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_xd_gale_of_darkness/pokmon_xd_gale_of_darkness_4_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_xd_gale_of_darkness/pokmon_xd_gale_of_darkness_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_xd_gale_of_darkness/pokmon_xd_gale_of_darkness_5_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_xd_gale_of_darkness/pokmon_xd_gale_of_darkness_1_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_xd_gale_of_darkness/pokmon_xd_gale_of_darkness_3_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+XD+Gales+Of+Darknes+Gamecube",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-GameCube/Pokemon-XD-Gale-of-Darkness-268588.html',
    },
    // Pokemon Box Ruby & Sapphire
    {
        id: 62,
        capasPokemon: './capas/box.jpg',
        descricao: `Pokémon Box: Ruby and Sapphire is one of the Pokémon games for the Nintendo GameCube. It was released in Japan on May 30, 2003, and in North America on July 11, 2004, but only through the New York Pokémon Center and its online store. However, it is no longer available at either location.`,
        logoPokemon: './logos/box.webp',
        trailer: './videos/box.mp4',
        galeryPhotos: [
            'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Pokemon-Box-Ruby-Sapphire-Trio.jpg',
            'https://cubemedia.ign.com/cube/image/article/533/533098/pokemon-box-ruby-saffire-20040723075252883-000.jpg?width=1280&height=720&fit=bounds&format=jpg&auto=webp&quality=80',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tXdFCNExV53v_6V91xkKBYn9hEmzIsqVeQ&s',
            'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Pokemon-Box-Ruby-Sapphire-Full-Pokedex.jpg?q=50&fit=crop&w=825&dpr=1.5',
            'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Pokemon-LeafGreen-Box-Golem-Transfer.jpg?q=50&fit=crop&w=825&dpr=1.5'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Box+Ruby+and+Sapphire",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Box+Ruby+%26+Sapphire&p=1&cat=all&sort=df',
    },
    // Pokemon Colosseum
    {
        id: 63,
        capasPokemon: './capas/colosseum.png',
        descricao: `The Stadium has been conquered, enter a new arena - Pokémon Colosseum. In this innovative game, players can upload Pokémon from their Game Boy Advance games Pokémon Ruby and Pokémon Sapphire, and battle against friends on their televisions through Nintendo GameCube. With a collection of arenas to choose from, players can enter their Pokémon in a tournament or battle it out in four-player multi-battles, making each experience unlike the last. Players also can join with a friend to combine strengths in new two-on-two battles and demonstrate their Pokémon prowess as a team. Features include: A follow-up to the highly popular Pokémon Stadium and Pokémon Stadium 2 games for Nintendo 64, Pokémon Colosseum continues the fun and excitement in collecting a whole new batch of Pokémon characters. Completely compatible with Pokémon Ruby and Pokémon Sapphire, players can battle with more than 200 Pokémon from the two games on their Nintendo GameCube. Players simply insert their Pokémon Ruby or Sapphire game into the Game Boy Advance, connect to a Nintendo GameCube via the Nintendo GameCube Game Boy Advance cable, and Pokémon appear in Pokémon Colosseum! Up to four players, each with a Game Boy Advance system, can connect to Nintendo GameCube and battle their Pokémon against each other. Pokémon Masters must overpower the competition in various tournaments to become the best Pokémon trainer ever.`,
        logoPokemon: './logos/colosseum.webp',
        trailer: './videos/colosseum.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVB3lyJVRZSCKNuOuXOTaqK36vSzNhdpDbw&s',
            'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Pok%C3%A9mon_Colosseum_gameplay.png/250px-Pok%C3%A9mon_Colosseum_gameplay.png',
            'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/09/Pokemon-Colosseum-Shadow-Misdreavus-Battle-Pyrite-Town.jpg?q=50&fit=crop&w=825&dpr=1.5',
            'https://media.retroachievements.org/Images/081382.png',
            'https://projectpokemon.org/home/uploads/monthly_2021_11/GC6E01_2021-11-04_04-57-39.png.a69fbe74d7d7b81962b87458b506a383.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Colosseum",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-GameCube/Pokemon-Colosseum-Mega-Pak-268577.html',
    },
    // Pokemon Channel
    {
        id: 64,
        capasPokemon: './capas/channel.webp',
        descricao: `Pokémon have taken over the airwaves! Players get to make great friends with Pikachu. Pokémon Channel is a highly innovative and diverse game that has enough substance to keep even the most avid Poké-maniac entertained for hours and hours.<br><br>In Pokémon Channel, the Pokémon television station has lost segments of their most popular show. Players must find and collect the clips and return them to the station. To aid them in their quest, players call upon the help of Pikachu. Once all the pieces are collected, the show will be restored and ready for broadcast.`,
        logoPokemon: './logos/channel.png',
        trailer: './videos/channel.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_channel/pokmon_channel_12_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_channel/pokmon_channel_2_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_channel/pokmon_channel_4_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_channel/pokmon_channel_9_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/migration/games_7/screenshots/gamecube_4/pokmon_channel/pokmon_channel_7_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Channel",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-GameCube/Pokemon-Channel-268555.html',
    },
    // Pokemon Play It
    {
        id: 65,
        capasPokemon: './capas/playIt.webp',
        descricao: `Pokémon Play It! is a Pokémon PC game that simulates the Pokémon Trading Card Game. It was released in 1999 in Europe and in February 2000 in North America. It was included in the 2-Player Starter Set CD-ROM.`,
        logoPokemon: './logos/playIt.webp',
        trailer: './videos/playIt.mp4',
        galeryPhotos: [
            'https://cdn.mobygames.com/72ba102c-abab-11ed-ac16-02420a000199.webp',
            'https://external-preview.redd.it/hJX3ZED76yDwJyg8fIxikxx-lqVu3xh7cnRDjakCjDk.png?width=640&crop=smart&auto=webp&s=35541a7d405dd2e5766286299e74987a22e9e423',
            'https://i.ytimg.com/vi/SyaE0Zfs6x0/sddefault.jpg',
            'https://images.launchbox-app.com/7fa11398-31cb-45a2-92b6-7a7466b082a0.jpg',
            'https://www.old-games.ru/games/pc/pokemon_play_it!_version_2/screenshots/7044_58e8daf2de2fe.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+Play+It!+Trading+Card+Game",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Play+It%21&p=1&cat=all&sort=df',
    },
    // Pokemon Hey You Pikachu
    {
        id: 66,
        capasPokemon: './capas/heyPikachu.jpg',
        descricao: `Hey You, Pikachu! is a Pokémon series game for the Nintendo 64. It is the first video game in history to use voice recognition through the Voice Recognition Unit, being one of only two N64 games to use this feature.`,
        logoPokemon: './logos/heyPikachu.webp',
        trailer: './videos/heyPikachu.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t5w_4Fk5Dtxru5gSA8r3BpAoWkL4T8o4ew&s',
            'https://infinityretro.com/wp-content/uploads/2021/02/Hey-You-Pikachu-screenshot-3.png',
            'https://assets.pokemon.com/assets/cms/img/video-games/heyyoupikachu/screenshots/heyyou_ss1.jpg',
            'https://preview.redd.it/ki76ar1kima31.jpg?width=640&crop=smart&auto=webp&s=d00d0ce6941d4aa12a06f83aa7f6292295a0d318',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIhP95CbYliQ2M4Eis1WpPC1vA0YvXOyZ-Q&s'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Hey+You+Pikachu",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Hey+You+Pikachu&p=1&cat=all&sort=df',
    },
    // Pokemon Puzzle League
    {
        id: 67,
        capasPokemon: './capas/league.jpg',
        descricao: `Test your Pokémon battling and puzzle-solving skills against the best Trainers in Puzzle League Village! To succeed, you’ll need quick thinking and fast fingers to clear puzzle pieces by matching blocks of the same color. The more pieces you clear at once, the more points you’ll score.<br><br>Create huge combos or chain reactions to launch powerful attacks against your opponent — whether it’s the computer or a friend — and earn badges from rival Trainers to become the Pokémon Puzzle Master!`,
        logoPokemon: './logos/league.png',
        trailer: './videos/league.mp4',
        galeryPhotos: [
            'https://bdjogos.com.br/capas/3944-Pokemon-Puzzle-League-Nintendo-64-capa-1.jpg',
            'https://http2.mlstatic.com/D_NQ_NP_761121-MLB82939493437_032025-O.webp',
            'https://www.cubed3.com/wp-content/uploads/2025/03/pokemon-puzzle-league-nintendo-64-art-banner.jpg', 
            'https://www.serebii.net/puzzleleague/1p/stage1.jpg', 
            'https://miro.medium.com/1*c0sNL-iJzxsSkuj10sPIAw.jpeg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Puzzle+League+Nintendo+64",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Consola-Virtual-Wii-/Pokemon-Puzzle-League-278579.html',
    },
    // Pokemon Stadium 2
    {
        id: 68,
        capasPokemon: './capas/stadium2.jpg',
        descricao: `Pokémon Stadium 2 is a Pokémon series game for the Nintendo 64. It features the 251 Pokémon available at the time and supported the use of the Mobile System in the Japanese version with Pokémon Crystal.`,
        logoPokemon: './logos/stadium2.webp',
        trailer: './videos/stadium2.mp4',
        galeryPhotos: [
            'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Pokemon_Stadium_2_Graveler_vs._Ekans.png/250px-Pokemon_Stadium_2_Graveler_vs._Ekans.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNLxszcPvy4lIR-yogrbp8r_Nbi3obfYFWg&s',
            'https://www.rpgamers.fr/images/rpgs/rpg2243/Pokemon_Stadium_2-003-10622115006.jpg',
            'https://images.launchbox-app.com//c26f1b78-cde4-446a-86c3-d7487b8cb2b2.png',
            'https://upload.wikimedia.org/wikipedia/ru/c/c4/Pokemon_Stadium_2_battle.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Stadium+2",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Stadium+2&p=1&cat=all&sort=df',
    },
    // Pokemon Stadium
    {
        id: 69,
        capasPokemon: './capas/pokémonStadium.jpg',
        descricao: `Pokémon Stadium is a strategy game in the Pokémon series for the Nintendo 64. It’s a Pokémon battle game where the player can fight against the CPU or other players using the Nintendo 64 Transfer Pak with Pokémon Red, Blue, & Yellow inserted.`,
        logoPokemon: './logos/stadium.png',
        trailer: './videos/stadium.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9WO9rwkqYOz82XNZV2RqRqF6lsZFgD0dDQ&s',
            'https://blogger.googleusercontent.com/img/a/AVvXsEg1sdRlnnaNpBM6lN4IoVlqlWQn1H5tjEgxFu27ODjRPpThv2pb9z5112E0fUeMOKdqkicGyCb8ZLz36lK8iFbxGPjD4SK8jDCceolIU_sGreXQUcfr_gqlZY94GrJYjkPkknPteFi2jDAvQeBrQ5wZQX9PGEbIp09Tc8ASKaW5veITDNxtH-eHWMgQ=s776-rw',
            'https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2023/07/pokemon-stadium-10-best-pokemon-ranked-1.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxoPM9gq9Fg_-7oW_ZApvwjDtj750Nw5ZxA&s',
            'https://tcrf.net/images/f/f3/Pkmn_stadium_Pikachu_Psychic_Surf.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Stadium",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Stadium&p=1&cat=all&sort=df',
    },
    // Pokemon Stadium JPN
    {
        id: 70,
        capasPokemon: './capas/stadiumJpn.png',
        descricao: `Pokémon Stadium (Japanese: ポケモンスタジアム, subtitled Pocket Monsters' Stadium) is the first game in the Pokémon Stadium series. It was released exclusively in Japan on August 1, 1998.`,
        logoPokemon: './logos/stadiumJpn.png',
        trailer: './videos/stadiumJpn.mp4',
        galeryPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnmXkTekPfm4hjbQ85mbUO6JftvnpckU9iw&s',
            'https://assets1.ignimgs.com/1998/11/14/pokemonst3-96598.jpg',
            'https://cdn.mobygames.com/promos/1777996-pokemon-stadium-screenshot.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAHeJvuP_VpSAMM3Oc7Lf6CeampmOvX0ghQ&s',
            'https://assets1.ignimgs.com/1998/11/14/pokemonst12-96592.jpg?crop=176%3A149&width=174&height=147&format=jpg&auto=webp&quality=80'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Stadium+Japan",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Stadium+Japan&p=1&cat=all&sort=df',
    },
    // Pokemon Snap
    {
        id: 71,
        capasPokemon: './capas/snap64.jpg',
        descricao: `Have you ever wondered what Pikachu looks like in its natural habitat? In the spectacular game Pokémon Snap, you can capture many Pokémon in the wild — not with a Poké Ball, but with a camera!<br><br>Some photos will be easy to take, like catching Pikachu relaxing on the beach. Others, however, will be much more challenging — for example, managing to photograph Pikachu riding on the back of a rare flying Pokémon! In Pokémon Snap, you’ll be working under the supervision of Professor Oak, the world-famous Pokémon professor. He needs various photos taken on Pokémon Island, where you’ll explore six fascinating regions in search of every Pokémon you can find.`,
        logoPokemon: './logos/snap.png',
        trailer: './videos/snap.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonsnap/WiiUVC_PokemonSnap_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonsnap/WiiUVC_PokemonSnap_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonsnap/WiiUVC_PokemonSnap_03_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonsnap/WiiUVC_PokemonSnap_05_TM_Standard.jpg', 
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonsnap/WiiUVC_PokemonSnap_07_TM_Standard.jpg',
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Snap+Nintendo+64",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-64/Pokemon-Snap-269668.html',
    },
    // Pokemon Mystery Dungeon Red Rescue Team
    {
        id: 72,
        capasPokemon: './capas/mysteryRed.jpeg',
        descricao: `In Pokémon Mystery Dungeon: Red Rescue Team, you wake up in a world entirely inhabited by Pokémon. What’s more, you yourself are a Pokémon, with no memory of how you got there or how to return to human form.<br><br>But perhaps there’s a reason for your arrival! Now that you understand the language of Pokémon, you discover that a series of natural disasters is threatening the community. Soon, you befriend another Pokémon, and together you form a rescue team to help Pokémon in need.`,
        logoPokemon: './logos/mysteryRed.webp',
        trailer: './videos/mysteryRed.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonredrescueteam/WiiUVC_PokemonMysteryDungeonRedRescueTeam_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonredrescueteam/WiiUVC_PokemonMysteryDungeonRedRescueTeam_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonredrescueteam/WiiUVC_PokemonMysteryDungeonRedRescueTeam_03_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonredrescueteam/WiiUVC_PokemonMysteryDungeonRedRescueTeam_05_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonmysterydungeonredrescueteam/WiiUVC_PokemonMysteryDungeonRedRescueTeam_07_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Mystery+Dungeon+Red+Rescue+Team",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Mystery-Dungeon-Red-Rescue-Team-267145.html',
    },
    // Pokemon Puzzle Challenge
    {
        id: 73,
        capasPokemon: './capas/puzzleChallenge.png',
        descricao: `Travel to Johto to face an innovative Pokémon challenge. Test your mental skills by competing against the great Gym Leaders! Classic Pokémon like Pikachu, Chikorita, Totodile, and Pichu will help you defeat opponents and rival Pokémon. Use your quick reflexes to clear pieces and create chains and combos to increase your score.<br><br>Choose from six exciting modes, including Marathon, Challenge, Time Zone, Line Clear, Puzzle, and the fascinating Garbage mode, as you try to achieve the highest score while pieces keep falling nonstop.`,
        logoPokemon: './logos/puzzle.png',
        trailer: './videos/puzzle.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonpuzzlechallenge/3DSVC_PokemonPuzzleChallenge_01_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonpuzzlechallenge/3DSVC_PokemonPuzzleChallenge_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonpuzzlechallenge/3DSVC_PokemonPuzzleChallenge_03_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemonpuzzlechallenge/3DSVC_PokemonPuzzleChallenge_04_TM_Standard.jpg',
            'https://images.nintendolife.com/screenshots/64548/300x.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Puzzle+Challenge",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Puzzle-Challenge-266098.html',
    },
    // Pokemon Pinball Ruby & Sapphire
    {
        id: 74,
        capasPokemon: './capas/pinballRuby.jpg',
        descricao: `Combine the craziness of pinball action with the thrill of catching Pokémon! In Pokémon Pinball: Ruby and Sapphire, control the flippers and hit the Poké Ball at themed targets on two challenging tables based on Pokémon Ruby and Pokémon Sapphire.<br><br>Rack up all the possible points while trying to catch over 200 Pokémon, including your favorite characters from the classic Hoenn Pokédex. You can also enjoy bonus levels and even get Pokémon to evolve. Pokémon Pinball is packed with references that will leave fans completely flipping out!`,
        logoPokemon: './logos/pinball.webp',
        trailer: './videos/pinball.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonpinballrubyandsapphire/WiiUVC_PokemonPinballRubyAndSapphire_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonpinballrubyandsapphire/WiiUVC_PokemonPinballRubyAndSapphire_02_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonpinballrubyandsapphire/WiiUVC_PokemonPinballRubyAndSapphire_04_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonpinballrubyandsapphire/WiiUVC_PokemonPinballRubyAndSapphire_05_TM_Standard.jpg',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_pokemonpinballrubyandsapphire/WiiUVC_PokemonPinballRubyAndSapphire_06_TM_Standard.jpg'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Pinball+Ruby+and+Sapphire",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Pinball-Ruby-Sapphire-267156.html',
    },
    // Pokemon Pinball
    {
        id: 75,
        capasPokemon: './capas/pinball.jpg',
        descricao: `Pokémon Pinball is a pinball game in the Pokémon series based on Pokémon Red & Blue. Released for the Game Boy Color, it is one of the handheld games that features a rumble function, where the cartridge vibrates according to the action.`,
        logoPokemon: './logos/pinball1.png',
        trailer: './videos/pinball1.mp4',
        galeryPhotos: [
            'https://www.pokemon.com/static-assets/content-assets/cms/img/video-games/pinball/screenshots/pinball_ss1.jpg',
            'https://preview.redd.it/pokemon-pinball-is-a-cumt-or-am-i-wrong-tips-welcome-v0-4dxrsc6tohod1.jpeg?auto=webp&s=582f746e655c96af0be562729b670cc4ab12221a',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQjPHPlUXtrgUbAn3vQM_Aa4LJzGe8GysfA&s',
            'https://www.lafautealamanette.org/blog/images/00706juin/pok%C3%A9mon%20pinball%202.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP7hk2bUvDyY_PPCPtTSKS12UW1ad4BhoPA&s'    
        ],
        linkGoogle: "https://www.google.com/search?tbm=shop&q=Pokemon+Pinball",
        linkNintendo: 'https://www.nintendo.com/pt-br/search/#q=Pokemon+Pinball&p=1&cat=all&sort=df',
    },
    // Pokemon Trading Card Game
    {
        id: 76,
        capasPokemon: './capas/tradingCard.png',
        descricao: `Based on the incredibly popular Pokémon Trading Card Game, this Game Boy Color version was a hit with both players and card collectors.<br><br>Explore the game world to face opponents and gather information. Learn to build and manage decks, win battles to earn expansion packs, and challenge the eight Club Masters. Your goal: impress the Great Masters so you can inherit their Legendary Pokémon Cards!<br><br>This game includes over 200 Pokémon Trading Cards based on the original decks, as well as new cards exclusive to this game.`,
        logoPokemon: './logos/tradingCard.png',
        trailer: './videos/trading.mp4',
        galeryPhotos: [
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemontradingcardgame/3DSVC_PokemonTradingCardGame_01_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemontradingcardgame/3DSVC_PokemonTradingCardGame_02_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemontradingcardgame/3DSVC_PokemonTradingCardGame_03_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemontradingcardgame/3DSVC_PokemonTradingCardGame_04_TM_Standard.png',
            'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_nintendo_3ds_4/3dsvc_pokemontradingcardgame/3DSVC_PokemonTradingCardGame_05_TM_Standard.png'    
        ],
        linkGoogle: "https://www.google.com/search?q=Pokemon+trading+Card+game",
        linkNintendo: 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Trading-Card-Game-266131.html',
    },
]

const addGame = () => {
    const games = document.querySelector('.games');
    const gamesSpinOff = document.querySelector('.gamesSpinOff');

    for (let i = 0; i < dadosJogosPokemon.length; i++) {    
        games.innerHTML += `
            <div class="center over gameImage animate-on-scroll opacity" data-animation="zoomInDown">
                <img id="${dadosJogosPokemon[i].id}" src="${dadosJogosPokemon[i].capasPokemon}" alt="Pokemon Image">
            </div>`
    }

    for (let x = 0; x < dadosJogosPokemonSpinOff.length; x++) {
        gamesSpinOff.innerHTML += `
        <div class="center over gameImage animate-on-scroll opacity spin-off" data-animation="zoomInDown">
            <img id="${dadosJogosPokemonSpinOff[x].id}" src="${dadosJogosPokemonSpinOff[x].capasPokemon}" draggable="false" alt="Pokemon Image">
        </div>`
    }
}

addGame()

const gameImage = document.querySelectorAll('.gameImage img');

gameImage.forEach((e) => {
    e.addEventListener('click', (element) => {
        let i = element.target.id;
        console.log(i);
        
        // Manda os dados desse jogo para o localStorage
        if(e.classList.contains('spin-off')) {
            console.log("pa");
            
            localStorage.setItem('dados', JSON.stringify(dadosJogosPokemonSpinOff[i]));
        }else {
            localStorage.setItem('dados', JSON.stringify(dadosJogosPokemon[i]));
        }
        window.location.href = "./base.html"
    })
})

history.pushState(null, "", location.href);
window.addEventListener('popstate', () => {
    history.pushState(null, "", location.href);
});