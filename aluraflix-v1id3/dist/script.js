// var filmes1 = "Perfume de Mulher";
// var filmes2 = "Encontro Marcado";
// var filmes3 = "O amor não tira férias";
// var filmes4 = "Mother!";

// document.write("<p>" + filmes1 + "</p>");
// document.write("<p>" + filmes2 + "</p>");
// document.write("<p>" + filmes3 + "</p>");
// document.write("<p>" + filmes4 + "</p>");

// ---var listaFilmes = ["Perfume de Mulher", "Encontro Marcado","O amor não tira férias", "Mother !"];

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2]+ "</p>");
// document.write("<p>" + listaFilmes[3]+ "</p>");

// ---for(var indice = 0; indice <= listaFilmes.length; indice++){
//   document.write("<p>" + listaFilmes[indice] + "</p>");
// }

var listaFilmes = [
  "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/04/One-Piece-Film-Red-poster-1.jpg?resize=1280%2C1720&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVRgMGrd3i7zdK9v_zBQ9pjgnuAidUysnFA&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/pt/8/8c/DBZ_BT3.jpg",
  "https://static.wixstatic.com/media/f242b4_4c444a38bfe74ce8b376afb6d51c993c~mv2.jpg/v1/fit/w_763%2Ch_1000%2Cal_c%2Cq_80/file.jpg"
];
for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}