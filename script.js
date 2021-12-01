function menosRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;

    for(i = 1; i<=10; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(150, 230) * 0.97;
        let voltaJuca = random(120, 260) * 0.95;
        let voltaEdna = random(180, 220) * 0.99;

        console.log(`Carro do Pedro ${voltaPedro}`);
        console.log(`Carro do Juca ${voltaJuca}`);
        console.log(`Carro da Edna ${voltaEdna}`);

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            console.log("Pedro Ganhou");
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            console.log("Juca Ganhou");
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            console.log("Edna Ganhou");
            totalEdna = totalEdna + 1;
        }


        if(i == 10){

            console.log("TESTE")
            if(totalPedro > totalJuca && totalPedro > totalEdna){
                console.log("PEDRO GANHOU");
                texto.innerHTML = "Ninguém segura o PEDRO";
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                console.log("JUCA GANHOU");
                texto.innerHTML = "Isso é mamão com açucar para o JUCA";
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                console.log("EDNA GANHOU")
                texto.innerHTML = "EDNA está botando pra quebrar";
            }
        }
    }
}


function mediaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;

    for(i = 1; i<=70; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(150, 230) * 0.97;
        let voltaJuca = random(120, 260) * 0.95;
        let voltaEdna = random(180, 220) * 0.99;

        console.log(`Carro do Pedro ${voltaPedro}`);
        console.log(`Carro do Juca ${voltaJuca}`);
        console.log(`Carro da Edna ${voltaEdna}`);

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            console.log("Pedro Ganhou");
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            console.log("Juca Ganhou");
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            console.log("Edna Ganhou");
            totalEdna = totalEdna + 1;
        }


        if(i == 70){

            console.log("TESTE")
            if(totalPedro > totalJuca && totalPedro > totalEdna){
                console.log("PEDRO GANHOU");
                texto.innerHTML = "Pedro não está para brincadeira";
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                console.log("JUCA GANHOU");
                texto.innerHTML = "Para o JUCA, vencer é uma obrigação";
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                console.log("EDNA GANHOU")
                texto.innerHTML = "EDNA se tornou lendária";
            }
        }
    }
}


function maximaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;

    for(i = 1; i<=160; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(150, 230) * 0.97;
        let voltaJuca = random(120, 260) * 0.95;
        let voltaEdna = random(180, 220) * 0.99;

        console.log(`Carro do Pedro ${voltaPedro}`);
        console.log(`Carro do Juca ${voltaJuca}`);
        console.log(`Carro da Edna ${voltaEdna}`);

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            console.log("Pedro Ganhou");
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            console.log("Juca Ganhou");
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            console.log("Edna Ganhou");
            totalEdna = totalEdna + 1;
        }

        if(i == 160){

            console.log("TESTE")
            if(totalPedro > totalJuca && totalPedro > totalEdna){
                console.log("PEDRO GANHOU");
                texto.innerHTML = "Se tiver PEDRO como adversario, desista";
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                console.log("JUCA GANHOU");
                texto.innerHTML = "JUCA está viciado na linha de chegada";
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                console.log("EDNA GANHOU")
                texto.innerHTML = "É o superman? O batman? A não, é a EDNA";
            }
        }
    }
}