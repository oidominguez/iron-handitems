var element = document.getElementById('cars');

var texto=""

var nomes = [

'Café', // Handitem 1 

'Suco',

'Cenoura',

'Sorvete de Baunilha',

'Água',

'Água',

'Água',

'Regular',

'Descafeinado',

'Achocolatado',

'Mocca',

'Café com Leite',

'Expresso',

'Café filtrado',

'Chocolate quente',

'Cappuccino',

'Xícara de Café',

'Água da torneira',

'Refri',

'Lata de refri',

'Drink invísivel',

'Drink invísivel',

'Drink invísivel',

'Vinho',

'Poção do Amor',

'Calippo',

'Chá',

'Saquê',

'Groselha',

'Líquido Radioativo',

'Capirinha de groselha',

'Batida de morango',

'Iron Refri',

'Peixe',

'Champanhe rosa',

'Pêra',

'Pêssego Suculento',

'Laranja',

'Abacaxi',

'Whiskey',

'Sumppi-kuppi',

'Suco de laranja',

'Suco natural',

'Energético Astrobar',

'Bala de laranja',

'Bala de limão',

'Bala de morango',

'Pirulito',

'Cup Noodle',

'Champanhe',

'Salgadinho',

'Cheetos',

'Café Expresso',

'Cereais',

'Pepsi',

'Cheetos',

'Refrigerante de Cereja',

'Sangue fresco',

'Saco de lixo',

'Castanhas',

'Garrafa amarela',

'Água Envenenada',

'Saco de pipocas',

'Limonada',

'Água',

'Suco de banana',

'Chiclete azul',

'Chiclete vermelho',

'Chiclete verde',

'Coxa de frango',

'Torrada',

'Garrafa azul',

'Chopp',

'Cálice Medieval',

'Sorvete de Morango',

'Sorvete de Anis',

'Sorvete de Chocolate',

'Água',

'Algodão doce rosa',

'Algodão doce azul',

'Cachorro quente',

'Telescópio',

'Maçã',

'Boneco de biscoito',

'Café americano',

'Frappuccino',

'Água benzida',

'Rum',

'Cupcake',

'Taça de champanhe',

'Xícara de chá',

'Chiclete azul',

'Chiclete rosa',

'Pirulito rosa',

'Pirulito verde',

'Fatia de bolo',

'Croissant',

'Tomate',

'Beringela',

'Repolho',

'Vinho Sauvignon',

'Energético',

'Banana',

'Abacate',

'Uvas',

'Vitamina de Morango',

'Caixa de Leite',

'Haltere',

'Hamburguer',

'Carta',

'Carangueijo',

'Pimenta Malagueta',

'Vitamina Cítrica',

'Vitamina Detox',

'Vitamina Framboesa',

'Limão siciliano',

'Cookie',

'Ramune Rosa',

'Ramune Azul',

'Raspadinha de Mirtilo',

'Raspadinha de Morango',

'Espetinho de carne',

'Sopa',

'Milkshake de Uva',

'Milkshake de Chocolate c/ hortelã',

'Milkshake de Açaí c/ morango',

'Sorvete de Casquinha',

'Sorvete de Açaí',

'Sorvete Napolitano',

'Queijo',

'Baguete',

'Camarão',

'Brócolis',

'Melancia',

'Donuts',

'Salsichas',

'Sorvete',

'Doritos aberto',

'Água',

'Água',

'Água',

'Água',

'Banana com Chocolate',

'Morango com Chocolate',

'Chroma Key',

'Café Barista',

'Fanta Laranja',

'Lupa',

'Rosa', // 1000

'Rosa negra',

'Girassol',

'Livro Vermelho',

'Livro Azul',

'Livro Verde',

'Copo de leite amarelo',

'Flor azul',

'Flor amarela',

'Flor rosa',

'Água',

'Fichário',

'Água',

'Pílulas',

'Seringa',

'Bolsa hospitalar',

'Água',

'Água',

'Água',

'Flor bolly',

'Água',

'Jacinto vermelho',

'Jacinto azul',

'Buquê de flor',

'Pudim',

'Bengala de açúcar',

'Presente',

'Vela',

'Tijela de Cereal',

'Bexiga dourada',

'HiPad',

'Tocha Olímpica',

'Astronauta',

'OVNI',

'Resto alienígena',

'Chave de boca',

'Pato infectado',

'Cobra',

'Pau',

'Mão decepada',

'Coração',

'Lula',

'Fezes',

'Verme',

'Rato morto',

'Dentadura',

'Caixa de remédio',

'Bola de boliche',

'Bandeira preta',

'Martelo',

'Ovo de páscoa',

'Pincel',

'Bandeira branca',

'Pato',

'Bexiga laranja',

'Bexiga verde',

'Bexiga azul',

'Bexiga rosa',

'Lampião',

'Papel higiênico',

'Spray',

'Flor laranja',

'Caveiras de doces rosa',

'Caveiras de doces verde',

'Caveiras de doces azul',

'Boneca Emília',

'Ursinho',

'Soldadinho',

'Manga',

'Quadrinho',

'Livro amarelo',

'HiPad dourado',

'Bússola',

'Ovo de dinossauro',

'Alossauro verde',

'Tricerátopo amarelo',

'Saurolofo roxo',

'Toalha',

'Lagartixa',

'Besouro Lucano',

'Besouro Rinoceronte',

'Regador',

'Bandeira do Orgulho',

'Abóbora de Halloween',

'Saco de Guloseimas',

'DVD Ação',

'DVD Terror',

'Caderno',

'Lápis',

'Doritos fechado',

'Vara de Pescar - peixe',

'Vara de Pescar - bota velha',

'Vara de Pescar - mensagem na garrafa',

'Bandeira amarela',

'Espada',

'Coração',

'Celular'

];

for(var i=1;i<2;i++)

texto+= '<option value="">'+"Nenhum"+'</option>'

for(var i=1;i<149;i++)

if (nomes[i]!=nomes[i-1])

texto+='<option value="'+i+'">'+i+' • '+nomes[i-1]+'</option>'

for(var i=1000;i<1097;i++)

if (nomes[i-851]!=nomes[i-852])

texto+='<option value="'+i+'">'+i+' • '+nomes[i-852]+'</option>'

element.innerHTML = texto

