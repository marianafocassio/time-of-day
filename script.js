function carregar() {
   var msg = document.getElementById('msg');
   var img = document.getElementById('imagem');

   var data = new Date();
   var hora = data.getHours();

   msg.innerHTML = `Agora são ${hora} horas.`;

   if(hora >= 0 && hora < 12) {
      //Bom dia!
      img.src = './images/nascer-do-sol.jpg';
      document.body.style.background = 'linear-gradient(135deg, #f8c8a3 0%, #c3cfe2 100%)';
   } else if(hora >= 12 && hora < 18) {
      //Boa tarde!
      img.src = './images/por-do-sol.jpg';
      document.body.style.background = 'linear-gradient(135deg, #bf6e60 0%, #c3cfe2 100%)';
   } else {
      //Boa noite!
      img.src = './images/noite.jpg';
      document.body.style.background = 'linear-gradient(135deg, #21363e 0%, #c3cfe2 100%)';
   }
}

