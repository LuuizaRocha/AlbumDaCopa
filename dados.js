// dados.js — fonte única de dados do álbum
const rawCountries = [
  // Grupo A
  { name: "México", group: "A", players: ["Luis Malagón","Johan Vásquez","Jorge Sánchez","César Montes","Jesús Gallardo","Israel Reyes","Diego Lainez","Carlos Rodríguez","Edson Álvarez","Orbelín Pineda","Marcel Ruiz","Érick Sánchez","Hirving Lozano","Santiago Giménez","Raúl Jiménez","Alexis Vega","Roberto Alvarado","César Huerta"] },
  { name: "África do Sul", group: "A", players: ["Ronwen Williams","Sipho Chaine","Aubrey Modiba","Samukele Kabini","Mbekezeli Mbokazi","Khulumani Ndamane","Siyabonga Ngezana","Khuliso Mudau","Nkosinathi Sibisi","Teboho Mokoena","Thalente Mbatha","Bathuisi Aubaas","Yaya Sithole","Sipho Mbule","Lyle Foster","Ioraam Rayners","Mohau Nkota","Oswin Appolis"] },
  { name: "Coreia do Sul", group: "A", players: ["Hyeon-woo Jo","Seung-Gyu Kim","Min-jae Kim","Yu-min Cho","Young-woo Seol","Han-beom Lee","Tae-seok Lee","Myung-jae Lee","Jae-sung Lee","In-beom Hwang","Kang-in Lee","Seung-ho Paik","Jens Castrop","Dong-gyeong Lee","Gue-sung Cho","Heung-min Son","Hee-chan Hwang","Hyeon-Gyu Oh"] },
  { name: "República Tcheca", group: "A", players: ["Matěj Kovář","Jindřich Staněk","Ladislav Krejčí","Vladimír Coufal","Jaroslav Zelený","Tomáš Holeš","David Zima","Michal Sadílek","Lukáš Provod","Lukáš Červ","Tomáš Souček","Pavel Šulc","Matěj Vydra","Vasil Kušej","Tomáš Chorý","Václav Černý","Adam Hložek","Patrik Schick"] },
  // Grupo B
  { name: "Canadá", group: "B", players: ["Dayne St. Clair","Alphonso Davies","Alistair Johnston","Samuel Adekugbe","Richie Laryea","Derek Cornelius","Moïse Bombito","Kamal Miller","Stephen Eustáquio","Ismaël Koné","Jonathan Osorio","Jacob Shaffelburg","Mathieu Choinière","Niko Sigur","Tajon Buchanan","Liam Millar","Cyle Larin","Jonathan David"] },
  { name: "Bósnia e Herzegovina", group: "B", players: ["Nikola Vasilj","Amar Dedić","Sead Kolašinac","Tarik Muharemović","Nihad Mujakić","Nikola Katić","Amir Hadžiahmetović","Benjamin Tahirović","Armin Gigović","Ivan Šunjić","Ivan Bašić","Dženis Burnić","Esmir Bajraktarević","Amar Memić","Ermedin Demirović","Edin Džeko","Samed Baždar","Haris Tabaković"] },
  { name: "Catar", group: "B", players: ["Meshaal Barsham","Sultan Albrake","Lucas Mendes","Homam Ahmed","Boualem Khoukhi","Pedro Miguel","Tarek Salman","Mohamed Al-Mannai","Karim Boudiaf","Assim Madibo","Ahmed Fatehi","Mohammed Waad","Abdulaziz Hatem","Hassan Al-Haydos","Edmilson Junior","Akram Hassan Afif","Ahmed Al Ganehi","Almoez Ali"] },
  { name: "Suíça", group: "B", players: ["Gregor Kobel","Yvon Mvogo","Manuel Akanji","Ricardo Rodriguez","Nico Elvedi","Aurèle Amenda","Silvan Widmer","Granit Xhaka","Denis Zakaria","Remo Freuler","Fabian Rieder","Ardon Jashari","Johan Manzambi","Michel Aebischer","Breel Embolo","Ruben Vargas","Dan Ndoye","Zeki Amdouni"] },
  // Grupo C
  { name: "Brasil", group: "C", players: ["Alisson","Bento","Marquinhos","Éder Militão","Gabriel Magalhães","Danilo","Wesley","Lucas Paquetá","Casemiro","Bruno Guimarães","Luiz Henrique","Vinícius Júnior","Rodrygo","João Pedro","Matheus Cunha","Gabriel Martinelli","Raphinha","Estêvão"] },
  { name: "Marrocos", group: "C", players: ["Yassine Bounou","Munir El Kajoui","Achraf Hakimi","Noussair Mazraoui","Nayef Aguerd","Romain Saïss","Jawad El Yamiq","Adam Masina","Sofyan Amrabat","Azzedine Ounahi","Eliesse Ben Seghir","Bilal El Khannouss","Ismael Saibari","Youssef En-Nesyri","Abde Ezzalzouli","Soufiane Rahimi","Brahim Díaz","Ayoub El Kaabi"] },
  { name: "Haiti", group: "C", players: ["Johny Placide","Carlens Arcus","Martin Expérience","Jean-Kevin Duverne","Ricardo Adé","Duke Lacroix","Garven Metusala","Hannes Delcroix","Leverton Pierre","Danley Jean Jacques","Jean-Ricner Bellegarde","Christopher Attys","Derrick Etienne Jr.","Josué Casimir","Ruben Providence","Duckens Nazon","Louicius Deedson","Frantzdy Pierrot"] },
  { name: "Escócia", group: "C", players: ["Angus Gunn","Jack Hendry","Kieran Tierney","Aaron Hickey","Andrew Robertson","Scott McKenna","John Souttar","Anthony Ralston","Grant Hanley","Scott McTominay","Billy Gilmour","Lewis Ferguson","Ryan Christie","Kenny McLean","John McGinn","Lyndon Dykes","Che Adams","Ben Gannon-Doak"] },
  // Grupo D
  { name: "Estados Unidos", group: "D", players: ["Matt Freese","Chris Richards","Tim Ream","Mark McKenzie","Alex Freeman","Antonee Robinson","Tyler Adams","Tanner Tessmann","Weston McKennie","Christian Roldan","Timothy Weah","Diego Luna","Malik Tillman","Christian Pulisic","Brenden Aaronson","Ricardo Pepi","Haji Wright","Folarin Balogun"] },
  { name: "Paraguai", group: "D", players: ["Roberto Fernández","Orlando Gill","Gustavo Gómez","Fabián Balbuena","Juan José Cáceres","Omar Alderete","Junior Alonso","Mathías Villasanti","Diego Gómez","Damián Bobadilla","Andrés Cubas","Matías Galarza Fonda","Julio Enciso","Gabriel Ávalos","Rodrigo Rojas","Alejandro Romero Gamarra","Ángel Cardozo","Iván Piris"] },
  { name: "Austrália", group: "D", players: ["Mathew Ryan","Joe Gauci","Harry Souttar","Alessandro Circati","Jordan Bos","Aziz Behich","Cameron Burgess","Lewis Miller","Milos Degenek","Jackson Irvine","Riley McGree","Aiden O'Neill","Connor Metcalfe","Patrick Yazbek","Craig Goodwin","Kusini Yengi","Nestory Irankunda","Mohamed Touré"] },
  { name: "Turquia", group: "D", players: ["Uğurcan Çakır","Mert Müldür","Zeki Çelik","Abdülkerim Bardakcı","Çağlar Söyüncü","Merih Demiral","Ferdi Kadıoğlu","Kaan Ayhan","İsmail Yüksek","Hakan Çalhanoğlu","Orkun Kökçü","Arda Güler","İrfan Can Kahveci","Yunus Akgün","Can Uzun","Barış Alper Yılmaz","Kerem Aktürkoğlu","Kenan Yıldız"] },
  // Grupo E
  { name: "Alemanha", group: "E", players: ["Marc-André ter Stegen","Jonathan Tah","David Raum","Nico Schlotterbeck","Antonio Rüdiger","Waldemar Anton","Ridle Baku","Maximilian Mittelstädt","Joshua Kimmich","Florian Wirtz","Felix Nmecha","Leon Goretzka","Jamal Musiala","Serge Gnabry","Kai Havertz","Leroy Sané","Karim Adeyemi","Nick Woltemade"] },
  { name: "Curaçao", group: "E", players: ["Eloy Room","Armando Obispo","Sherel Floranus","Jurien Gaari","Joshua Brenet","Roshon Van Eijma","Shurandy Sambo","Livano Comenencia","Godfried Roemeratoe","Juninho Bacuna","Leandro Bacuna","Tahith Chong","Kenji Gorré","Jearl Margaritha","Jurgen Locadia","Jeremy Antonisse","Gervane Kastaneer","Sontje Hansen"] },
  { name: "Costa do Marfim", group: "E", players: ["Yahia Fofana","Ghislain Konan","Wilfried Singo","Odilon Kossounou","Evan Ndicka","Willy Boly","Emmanuel Agbadou","Ousmane Diomande","Franck Kessié","Seko Fofana","Ibrahim Sangaré","Jean-Philippe Gbamin","Amad Diallo","Sébastien Haller","Simon Adingra","Yan Diomande","Evann Guessand","Oumar Diakité"] },
  { name: "Equador", group: "E", players: ["Hernán Galíndez","Gonzalo Valle","Piero Hincapié","Pervis Estupiñán","Willian Pacho","Ángelo Preciado","Joel Ordóñez","Moisés Caicedo","Alan Franco","Kendry Páez","Pedro Vite","John Yeboah","Leonardo Campana","Gonzalo Plata","Nilson Angulo","Alan Minda","Kevin Rodríguez","Enner Valencia"] },
  // Grupo F
  { name: "Holanda", group: "F", players: ["Bart Verbruggen","Virgil van Dijk","Micky van de Ven","Jurriën Timber","Denzel Dumfries","Nathan Aké","Jeremie Frimpong","Jan Paul van Hecke","Tijjani Reijnders","Ryan Gravenberch","Teun Koopmeiners","Frenkie de Jong","Xavi Simons","Justin Kluivert","Memphis Depay","Donyell Malen","Wout Weghorst","Cody Gakpo"] },
  { name: "Japão", group: "F", players: ["Zion Suzuki","Henry Hiroki Mochizuki","Ayumu Seko","Junnosuke Suzuki","Shogo Taniguchi","Tsuyoshi Watanabe","Kaishu Sano","Yuki Soma","Ao Tanaka","Daichi Kamada","Takefusa Kubo","Ritsu Doan","Keito Nakamura","Takumi Minamino","Shuto Machino","Junya Ito","Koki Ogawa","Ayase Ueda"] },
  { name: "Suécia", group: "F", players: ["Victor Johansson","Isak Hien","Gabriel Gudmundsson","Emil Holm","Victor Nilsson Lindelöf","Gustaf Lagerbielke","Lucas Bergvall","Hugo Larsson","Jesper Karlström","Yasin Ayari","Mattias Svanberg","Daniel Svensson","Ken Sema","Roony Bardghji","Dejan Kulusevski","Anthony Elanga","Alexander Isak","Viktor Gyökeres"] },
  { name: "Tunísia", group: "F", players: ["Bechir Ben Said","Aymen Dahmen","Van Valery","Montassar Talbi","Yassine Meriah","Ali Abdi","Dylan Bronn","Ellyes Skhiri","Aissa Laidouni","Ferjani Sassi","Mohamed Ali Ben Romdhane","Hannibal Mejbri","Elias Achouri","Elias Saad","Hazem Mastouri","Ismael Gharbi","Sayfallah Ltaief","Naim Sliti"] },
  // Grupo G
  { name: "Bélgica", group: "G", players: ["Thibaut Courtois","Arthur Theate","Timothy Castagne","Zeno Debast","Brandon Mechele","Maxim De Cuyper","Thomas Meunier","Youri Tielemans","Amadou Onana","Nicolas Raskin","Alexis Saelemaekers","Hans Vanaken","Kevin De Bruyne","Jérémy Doku","Charles De Ketelaere","Leandro Trossard","Loïs Openda","Romelu Lukaku"] },
  { name: "Egito", group: "G", players: ["Mohamed El Shenawy","Mohamed Hany","Mohamed Hamdy","Yasser Ibrahim","Khaled Sobhi","Ramy Rabia","Hossam Abdelmaguid","Ahmed Fatouh","Marwan Attia","Zizo","Hamdy Fathy","Mohamed Lasheen","Emam Ashour","Osama Faisal","Mohamed Salah","Mostafa Mohamed","Trezeguet","Omar Marmoush"] },
  { name: "Irã", group: "G", players: ["Alireza Beiranvand","Morteza Pouraliganji","Ehsan Hajsafi","Milad Mohammadi","Shoja Khalilzadeh","Ramin Rezaeian","Hossein Kanaani","Sadegh Moharrami","Saleh Hardani","Saeed Ezatolahi","Saman Ghoddos","Omid Noorafkan","Roozbeh Cheshmi","Mohammad Mohebi","Sardar Azmoun","Mehdi Taremi","Alireza Jahanbakhsh","Ali Gholizadeh"] },
  { name: "Nova Zelândia", group: "G", players: ["Max Crocombe-Payne","Alex Paulsen","Michael Boxall","Liberato Cacace","Tim Payne","Tyler Bindon","Francis de Vries","Finn Surman","Joe Bell","Sarpreet Singh","Ryan Thomas","Matthew Garbett","Marko Stamenić","Ben Old","Chris Wood","Elijah Just","Callum McCowatt","Kosta Barbarouses"] },
  // Grupo H
  { name: "Espanha", group: "H", players: ["Unai Simón","Robin Le Normand","Aymeric Laporte","Dean Huijsen","Pedro Porro","Dani Carvajal","Marc Cucurella","Martín Zubimendi","Rodri","Pedri","Fabián Ruiz","Mikel Merino","Lamine Yamal","Dani Olmo","Nico Williams","Ferran Torres","Álvaro Morata","Mikel Oyarzabal"] },
  { name: "Cabo Verde", group: "H", players: ["Vozinha","Logan Costa","Pico","Diney","Steven Moreira","Wagner Pina","João Paulo","Yannick Semedo","Kevin Pina","Patrick Andrade","Jamiro Monteiro","Deroy Duarte","Garry Rodrigues","Jovane Cabral","Ryan Mendes","Dailon Livramento","Willy Semedo","Bebé"] },
  { name: "Arábia Saudita", group: "H", players: ["Nawaf Alaqidi","Abdulrahman Al-Sanbi","Saud Abdulhamid","Nawaf Boushal","Jihad Thakri","Moteb Al-Harbi","Hassan Altambakti","Musab Aljuwayr","Ziyad Aljohani","Abdullah Alkhaibari","Nasser Aldawsari","Saleh Abu Alshamat","Marwan Alsahafi","Salem Aldawsari","Abdulrahman Al-Aboud","Feras Albrikan","Saleh Alshehri","Abdullah Al-Hamdan"] },
  { name: "Uruguai", group: "H", players: ["Sergio Rochet","Santiago Mele","Ronald Araujo","José María Giménez","Sebastian Caceres","Mathias Olivera","Guillermo Varela","Nahitan Nandez","Federico Valverde","Giorgian De Arrascaeta","Rodrigo Bentancur","Manuel Ugarte","Nicolás de la Cruz","Maxi Araujo","Darwin Núñez","Federico Viñas","Rodrigo Aguirre","Facundo Pellistri"] },
  // Grupo I
  { name: "França", group: "I", players: ["Mike Maignan","Theo Hernández","William Saliba","Jules Koundé","Ibrahima Konaté","Dayot Upamecano","Lucas Digne","Aurélien Tchouaméni","Eduardo Camavinga","Manu Koné","Adrien Rabiot","Michael Olise","Ousmane Dembélé","Bradley Barcola","Désiré Doué","Kingsley Coman","Hugo Ekitike","Kylian Mbappé"] },
  { name: "Senegal", group: "I", players: ["Eduardo Mendy","Yehvann Diouf","Moussa Niakhaté","Abdoulaye Seck","Ismail Jakobs","El Hadji Malick Diouf","Kalidou Koulibaly","Idrissa Gana Gueye","Pape Matar Sarr","Pape Gueye","Habib Diarra","Lamine Camara","Sadio Mané","Ismaïla Sarr","Boulaye Dia","Iliman Ndiaye","Nicolas Jackson","Krepin Diatta"] },
  { name: "Iraque", group: "I", players: ["Jalal Hassan","Rebin Sulaka","Hussein Ali","Akam Hashem","Merchas Doski","Zaid Tahseen","Manaf Younis","Zidane Iqbal","Amir Al-Ammari","Ibrahim Bayesh","Ali Jasim","Youssef Amyn","Aimar Sher","Marko Farji","Osama Rashid","Ali Al-Hamadi","Aymen Hussein","Mohanad Ali"] },
  { name: "Noruega", group: "I", players: ["Ørjan Nyland","Julian Ryerson","Leo Østigård","Kristoffer Ajer","Marcus Holmgren Pedersen","David Møller Wolfe","Torbjørn Heggem","Morten Thorsby","Martin Ødegaard","Sander Berge","Andreas Schjelderup","Patrick Berg","Erling Haaland","Alexander Sørloth","Aron Dønnum","Jørgen Strand Larsen","Antonio Nusa","Oscar Bobb"] },
  // Grupo J
  { name: "Argentina", group: "J", players: ["Emiliano Martínez","Nahuel Molina","Cristian Romero","Nicolás Otamendi","Nicolás Tagliafico","Leonardo Balerdi","Enzo Fernández","Alexis Mac Allister","Rodrigo De Paul","Exequiel Palacios","Leandro Paredes","Nico Paz","Franco Mastantuono","Nico González","Lionel Messi","Lautaro Martínez","Julián Álvarez","Giuliano Simeone"] },
  { name: "Argélia", group: "J", players: ["Alexis Guendouz","Ramy Bensebaini","Youcef Atal","Rayan Aït-Nouri","Mohamed Amine Tougai","Aïssa Mandi","Ismael Bennacer","Houssem Aouar","Hicham Boudaoui","Ramiz Zerrouki","Nabil Bentaleb","Farés Chaibi","Riyad Mahrez","Said Benrahma","Anis Hadj Moussa","Amine Gouiri","Baghdad Bounedjah","Mohammed Amoura"] },
  { name: "Áustria", group: "J", players: ["Alexander Schlager","Patrick Pentz","David Alaba","Kevin Danso","Philipp Lienhart","Stefan Posch","Phillipp Mwene","Alexander Prass","Xaver Schlager","Marcel Sabitzer","Konrad Laimer","Florian Grillitsch","Nicolas Seiwald","Romano Schmid","Patrick Wimmer","Christoph Baumgartner","Michael Gregoritsch","Marko Arnautović"] },
  { name: "Jordânia", group: "J", players: ["Yazeed Abulaila","Ihsan Haddad","Mohammad Abu Hashish","Yazan Al-Arab","Abdallah Nasib","Saleem Obaid","Mohammad Abualnadi","Ibrahim Saadeh","Nizar Al-Rashdan","Noor Al-Rawabdeh","Mohannad Abu Taha","Amer Jamous","Musa Al-Taamari","Yazan Al-Naimat","Mahmoud Al-Mardi","Ali Olwan","Mohammad Abu Zrayq","Ibrahim Sabra"] },
  // Grupo K
  { name: "Portugal", group: "K", players: ["Diogo Costa","José Sá","Rúben Dias","João Cancelo","Diogo Dalot","Nuno Mendes","Gonçalo Inácio","Bernardo Silva","Bruno Fernandes","Rúben Neves","Vitinha","João Neves","Cristiano Ronaldo","Francisco Trincão","João Félix","Gonçalo Ramos","Pedro Neto","Rafael Leão"] },
  { name: "RD Congo", group: "K", players: ["Lionel Mpasi","Aaron Wan-Bissaka","Axel Tuanzebe","Arthur Masuaku","Chancel Mbemba","Joris Kayembe","Charles Pickel","Ngal'ayel Mukau","Edo Kayembe","Samuel Moutoussamy","Noah Sadiki","Théo Bongonda","Meschack Elia","Yoane Wissa","Brian Cipenga","Fiston Mayele","Cédric Bakambu","Nathanaël Mbuku"] },
  { name: "Uzbequistão", group: "K", players: ["Utkir Yusupov","Farrukh Savfiev","Sherzod Nasrullaev","Umar Eshmurodov","Husniddin Aliqulov","Rustamjon Ashurmatov","Khojiakbar Alijonov","Abdukodir Khusanov","Odiljon Hamrobekov","Otabek Shukurov","Jamshid Iskanderov","Azizbek Turgunboev","Khojimat Erkinov","Eldor Shomurodov","Oston Urunov","Jaloliddin Masharipov","Igor Sergeev","Abbosbek Fayzullaev"] },
  { name: "Colômbia", group: "K", players: ["Camilo Vargas","David Ospina","Dávinson Sánchez","Yerry Mina","Daniel Muñoz","Johan Mojica","Jhon Lucumí","Santiago Arias","Jefferson Lerma","Kevin Castaño","Richard Ríos","James Rodríguez","Juan Fernando Quintero","Jorge Carrascal","Jhon Arias","Jhon Córdoba","Luis Suárez","Luis Díaz"] },
  // Grupo L
  { name: "Inglaterra", group: "L", players: ["Jordan Pickford","John Stones","Marc Guéhi","Ezri Konsa","Trent Alexander-Arnold","Reece James","Dan Burn","Jordan Henderson","Declan Rice","Jude Bellingham","Cole Palmer","Morgan Rogers","Anthony Gordon","Phil Foden","Bukayo Saka","Harry Kane","Marcus Rashford","Ollie Watkins"] },
  { name: "Croácia", group: "L", players: ["Dominik Livaković","Duje Ćaleta-Car","Joško Gvardiol","Josip Stanišić","Luka Vušković","Josip Šutalo","Kristijan Jakić","Luka Modrić","Mateo Kovačić","Martin Baturina","Lovro Majer","Mario Pašalić","Petar Sučić","Ivan Perišić","Marco Pašalić","Ante Budimir","Andrej Kramarić","Franjo Ivanović"] },
  { name: "Gana", group: "L", players: ["Lawrence Ati Zigi","Tariq Lamptey","Mohammed Salisu","Alidu Seidu","Alexander Djiku","Gideon Mensah","Caleb Yirenkyi","Abdul Fatawu Issahaku","Thomas Partey","Salis Abdul Samed","Kamaldeen Sulemana","Mohammed Kudus","Iñaki Williams","Jordan Ayew","André Ayew","Joseph Paintsil","Osman Bukari","Antoine Semenyo"] },
  { name: "Panamá", group: "L", players: ["Orlando Mosquera","Luis Mejía","Fidel Escobar","Andrés Andrade","Michael Amir Murillo","Eric Davis","José Córdoba","César Blackman","Cristian Martínez","Aníbal Godoy","Adalberto Carrasquilla","Édgar Bárcenas","Carlos Harvey","Ismael Díaz","José Fajardo","Cecilio Waterman","José Luis Rodríguez","Alberto Quintero"] },
  // Páginas especiais — FWC
  { name: "FWC", group: "FWC", special: true, slots: 19, players: [
    { name: "FWC 1",  code: "FWC1"  },
    { name: "FWC 2",  code: "FWC2"  },
    { name: "FWC 3",  code: "FWC3"  },
    { name: "FWC 4",  code: "FWC4"  },
    { name: "FWC 5",  code: "FWC5"  },
    { name: "FWC 6",  code: "FWC6"  },
    { name: "FWC 7",  code: "FWC7"  },
    { name: "FWC 8",  code: "FWC8"  },
    { name: "FWC 9",  code: "FWC9"  },
    { name: "FWC 10", code: "FWC10" },
    { name: "FWC 11", code: "FWC11" },
    { name: "FWC 12", code: "FWC12" },
    { name: "FWC 13", code: "FWC13" },
    { name: "FWC 14", code: "FWC14" },
    { name: "FWC 15", code: "FWC15" },
    { name: "FWC 16", code: "FWC16" },
    { name: "FWC 17", code: "FWC17" },
    { name: "FWC 18", code: "FWC18" },
    { name: "FWC 19", code: "FWC19" }
  ] },
  // Páginas especiais — Coca-Cola
  { name: "Coca-Cola", group: "CC", special: true, slots: 14, players: [
    { name: "Lamine Yamal",       code: "CC-LAM1"  },
    { name: "Joshua Kimmich",     code: "CC-LAM2"  },
    { name: "Harry Kane",         code: "CC-LAM3"  },
    { name: "Santiago Giménez",   code: "CC-LAM4"  },
    { name: "Josko Gvardiol",     code: "CC-LAM5"  },
    { name: "Federico Valverde",  code: "CC-LAM6"  },
    { name: "Jefferson Lerma",    code: "CC-LAM7"  },
    { name: "Enner Valencia",     code: "CC-LAM8"  },
    { name: "Gabriel Magalhães",  code: "CC-LAM9"  },
    { name: "Virgil van Dijk",    code: "CC-LAM10" },
    { name: "Alphonso Davies",    code: "CC-LAM11" },
    { name: "Emiliano Martinez",  code: "CC-LAM12" },
    { name: "Raúl Jiménez",       code: "CC-LAM13" },
    { name: "Lautaro Martínez",   code: "CC-LAM14" }
  ] }
];

const DEFAULT_SLOTS = 20; // escudo(1) + foto do time(1) + 18 jogadores
const SHIELD_SLOT = 0;
const TEAM_SLOT = 1;
const FIRST_PLAYER_SLOT = 2;

function getTotalStickers() {
  let total = 0;
  for (const page of rawCountries) total += page.slots || DEFAULT_SLOTS;
  return total;
}

function getStickerLabel(pageIdx, slotIdx) {
  const page = rawCountries[pageIdx];
  if (!page) return null;
  if (!page.special) {
    if (slotIdx === SHIELD_SLOT) return `Escudo ${page.name}`;
    if (slotIdx === TEAM_SLOT) return `Seleção ${page.name}`;
    const playerIdx = slotIdx - FIRST_PLAYER_SLOT;
    if (playerIdx < page.players.length) return page.players[playerIdx];
    return null;
  } else {
    const item = page.players[slotIdx];
    if (!item) return null;
    return typeof item === 'string' ? item : item.name;
  }
}

function getStickerNumber(pageIdx, slotIdx) {
  const page = rawCountries[pageIdx];
  if (!page) return '';
  if (!page.special) {
    // Slot 0 = nº 1 (escudo), Slot 1 = nº 2 (foto time), Slots 2-19 = nº 3-20
    return String(slotIdx + 1);
  } else {
    const item = page.players[slotIdx];
    if (!item) return '';
    return typeof item === 'string' ? String(slotIdx + 1) : item.code;
  }
}

// Função de busca para o álbum (adicionada)
function searchAllStickers(query) {
  const results = [];
  const q = query.toLowerCase().trim();
  if (q.length < 2) return results;

  for (let i = 0; i < rawCountries.length; i++) {
    const page = rawCountries[i];
    const slots = page.slots || DEFAULT_SLOTS;
    for (let s = 0; s < slots; s++) {
      const label = getStickerLabel(i, s);
      if (!label) continue;
      const number = getStickerNumber(i, s);
      if (
        label.toLowerCase().includes(q) ||
        page.name.toLowerCase().includes(q) ||
        number === q
      ) {
        results.push({
          countryIdx: i,
          slotIdx: s,
          label,
          number,
          country: page.name,
          group: page.group
        });
      }
    }
  }
  return results.slice(0, 30);
}