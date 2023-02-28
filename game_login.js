function addUser() {
  var player1Name= document.getElementById("player1NameInput").value;
  var player2Name= document.getElementById("player2NameInput").value;

  localStorage.setItem("player1Name",player1Name) //Salvo no armazenamento local

  localStorage.setItem("player2Name",player2Name) //Salvo no armazenamento local
  window.Location="game_page.html"
}
