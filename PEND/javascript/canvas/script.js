const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

// DESENHA UMA LINHA 
contexto.beginPath();
contexto.moveTo(10,0);
contexto.lineTo(50,200);
contexto.moveTo(10,0);
contexto.lineTo(10,200);
contexto.stroke();

contexto.fillRect(220, 50, 150, 100);
contexto.strokeRect(50, 50, 150, 100);

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
// contexto.arc(250, 250, 50, 0, Math.PI); //Arco
// contexto.arc(250, 250, 50, 0, Math.PI, true); // Arco matematicamente correto (o circulo vem padrão false)
contexto.stroke();