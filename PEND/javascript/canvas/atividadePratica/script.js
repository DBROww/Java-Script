const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

function desenharLosango(contexto, x, y, largura, altura, cor) {
    contexto.beginPath();
    
  // 1. Move para o vértice do topo (centro X, topo Y)
  contexto.moveTo(x, y - altura / 2);
  
  // 2. Linha para o vértice da direita
  contexto.lineTo(x + largura / 2, y);
  
  // 3. Linha para o vértice de baixo
  contexto.lineTo(x, y + altura / 2);
  
  // 4. Linha para o vértice da esquerda
  contexto.lineTo(x - largura / 2, y);
  
  contexto.closePath(); // Fecha o caminho voltando para o topo automaticamente

  // Define a cor e preenche
  contexto.fillStyle = cor;
  contexto.fill();
};


// DESENHO STICKERMAN
contexto.lineWidth = 8;
contexto.lineCap = "round";
contexto.lineJoin = "round";

contexto.beginPath();

// CABEÇA
contexto.arc(208, 177, 23, 0, Math.PI * 2);

// TRONCO
contexto.moveTo(200, 200);
contexto.lineTo(200, 280);

// BRAÇO DIREITO
contexto.moveTo(200, 200);
contexto.lineTo(240, 240);
contexto.lineTo(280, 200);

//BRAÇO ESQUERDO
contexto.moveTo(200, 200);
contexto.lineTo(160, 240);
contexto.lineTo(210, 260);

// PERNA ESQUERDA
contexto.moveTo(200, 280);
contexto.lineTo(160, 320);
contexto.lineTo(160, 380);

// COXA DIREITA
contexto.moveTo(200, 280);
contexto.lineTo(240, 320);
contexto.lineTo(240, 380);
contexto.stroke();
contexto.closePath();

// DESENHO BANDEIRA BRASIL
contexto.beginPath();
contexto.lineWidth = 2;
contexto.fillStyle = "#009440" // Verde Brasil

// Retângulo
contexto.fillRect(125, 25, 150, 100);
contexto.strokeRect(125, 25, 150, 100);

// Losângo
desenharLosango(contexto, 200, 75, 150, 100, "#FFCB00");// Amarelo Brasil
contexto.stroke()

// Circulo
contexto.beginPath();
contexto.fillStyle = "#302681";
contexto.arc(200, 75, 25, 0, Math.PI * 2);
contexto.fill();
contexto.stroke();

contexto.beginPath();
contexto.moveTo(177, 75); 
contexto.lineTo(223, 75);
contexto.lineWidth = 6; // Espessura da faixa branca
contexto.strokeStyle = "#FFFFFF"; // Cor branca
contexto.stroke();
