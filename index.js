const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);



const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {

    bancoDados.pets.forEach((pet) => {

        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    
        pet.servicos.forEach((servico) => {
            console.log(`${servico.data} - ${servico.nome}`);
        })
    })
}

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}

const campanhaVacina = () => {
    console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;

    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
        return pet;
    });
    console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

const adicionarPet = novoPet => {
        bancoDados.pets.push(novoPet);
        atualizarBanco();
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servicos) => {
    console.log(`Olá, ${pet.nome}`);
    servicos(pet);
    console.log('Tchau, até mais');
};

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {

    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let {nome} = pet;

    let nServicos = pet.servicos.length;
      
    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}

const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;
    return `Tutor: ${tutor}
    Contato: ${contato}
    Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });
    console.log(`Pets do tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`)
    })
}

const filtrarRaca = (nomeRaca) => {
    let petsRaca = bancoDados.pets.filter((pet) => {
        return pet.raca == nomeRaca;
    });
    console.log(`Pets da Raça ${nomeRaca}:`)
    petsRaca.forEach((pet) => {
        console.log(`${pet.raca} - ${pet.nome}`)
    })
}


filtrarRaca('Pastor Alemão');

//filtrarTutor('Lenildo');






// darBanhoPet(bancoDados.pets[0]);
//campanhaVacina();
// console.log("-----------")
 //listarPets();
 //atenderCliente();

/*adicionarPet({
    "nome": "Steve",
    "tipo": "cachorro",
    "idade": 2,
    "raca": "Pastor Alemão",
    "peso": 20,
    "tutor": "Lenildo",
    "contato": "(81) 99999-9999",
    "vacinado": true,
    "servicos": []
}); */

