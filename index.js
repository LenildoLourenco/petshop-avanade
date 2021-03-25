
const moment= require('moment')

const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
       nome: 'Dara',
       tipo: 'Cachorro',
       idade: 5,
       raca: 'Pastor Alemão',
       peso: 10,
       tutor: 'Dennis',
       contato: '81 9999-9999',
       vacinado: true,
       servicos: ['Banho']
    },
    {
        nome: 'Spyke',
        tipo: 'Cachorro',
        idade: 8,
        raca: 'Box Alemão',
        peso: 8,
        tutor: 'Lenildo',
        contato: '81 9888-9888',
        vacinado: false,
        servicos: ['Banho']
     },
     {
        nome: 'Pé de Ferro',
        tipo: 'Cachorro',
        idade: 3,
        raca: 'Pastor Alemão',
        peso: 6,
        tutor: 'Léo',
        contato: '81 9999-8888',
        vacinado: true,
        servicos: ['Banho']
     }
            
];

const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${pet.vacinado}`);
    }
}

const vacinarPet = (pet) => {
    if(pet.vacinado == true) {
        console.log(`${pet.nome}, já está vacinado!`); 
    }
    else(pet.vacinado == false)
    {
        console.log( `${pet.nome}, "Vacinado com Sucesso!!!"`
  
  )
    }
 
  
 }

 const campanhaVacina = () => {
    let cont = 0;
    for(let pet of pets)
    {
        if(pet.vacinado == false)
        {
            pet.vacinado = true;
            cont++;
        }
    }
    console.log(`${cont} pets foram vacinados nessa campanha!!!`)
}

const petNovo =()=>{
   
    let novoPet = {
        nome:'Hollywood',
        tipo: 'cachorro',
        idade: '4',
        raca: 'Box Alemão',
        peso: '5',
        tutor: 'Dennis',
        contato:'81 9988-7777',
        vacinado: true,
        servicos: ['banho']   
    }
    pets.push(novoPet);
   
 }

 const darBanhoPet = (serv) => {
    for (let pet of pets) {
        if (pet.nome === serv) {
            pet.servicos.push({
                'servicos':'banho',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`${pet.nome}, está de banho tomado !!`);                        
        }
    }
}
const tosarPet = (serv) => {
    for (let pet of pets) {
        if (pet.nome === serv) {
            pet.servicos.push({
                'servicos':'tosa',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`${pet.nome}, está com cabelinho na régua !!`);            
        }
    }
}
const apararUnhasPet = (serv) => {
    for (let pet of pets) {
        if (pet.nome === serv) {            
            pet.servicos.push({
                'servicos':'cortar unhas',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`${pet.nome}, está com as unhas aparadas !!`);            
        }
    }
}

darBanhoPet('Dara');
tosarPet('Spyke');
apararUnhasPet('Pé de Ferro');
//listarPets();


 
//petNovo();
//campanhaVacina();
//vacinarPet(pets[1]);
//console.log(pets);

