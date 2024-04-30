document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        let numeroAleatorioDois = Math.random() * numeroMaximo;
        numeroAleatorioDois = Math.floor(numeroAleatorioDois + 1);

        let numeroAleatorioTres = Math.random() * numeroMaximo;
        numeroAleatorioTres = Math.floor(numeroAleatorioTres + 1);

        let numeroAleatorioQuatro = Math.random() * numeroMaximo;
        numeroAleatorioQuatro = Math.floor(numeroAleatorioQuatro + 1);

        let numeroAleatorioCinco = Math.random() * numeroMaximo;
        numeroAleatorioCinco = Math.floor(numeroAleatorioCinco + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.getElementById('resultado-valor-dois').innerText = numeroAleatorioDois;
        document.getElementById('resultado-valor-tres').innerText = numeroAleatorioTres;
        document.getElementById('resultado-valor-quatro').innerText = numeroAleatorioQuatro;
        document.getElementById('resultado-valor-cinco').innerText = numeroAleatorioCinco;
        document.querySelector('.resultado').style.display = 'block';
    })
})