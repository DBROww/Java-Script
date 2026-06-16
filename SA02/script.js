function relogio() {
            const agora = new Date();
            
            // Formatando a Data (Ex: Terça-feira, 16 de junho de 2026)
            const opcoesData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
            
            // Formatando a Hora (Ex: 15:08:30)
            const horaFormatada = agora.toLocaleTimeString('pt-BR');

            // Exibindo no HTML
            document.getElementById('data-relogio').textContent = dataFormatada;
            document.getElementById('tempo-relogio').textContent = horaFormatada;
        }

        // Atualiza a cada 1000 milissegundos (1 segundo)
        setInterval(relogio, 1000);

        relogio();