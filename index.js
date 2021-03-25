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
       servicos: 'Banho'
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
        servicos: ['Banho', 'Tosa']
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
        servicos: 'Banho'
     }
            
];

const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${pet.vacinado}`);
    }
}

const vacinarPet = (pet) => {
    if(pet.vacinado == false) {
        pet.vacinado = true
    }
 
  console.log( `${pet.nome}, "Vacinado com Sucesso!!!"`
  
  )
 }

 vacinarPet(pets[1]);

//console.log(pets);

//listarPets();