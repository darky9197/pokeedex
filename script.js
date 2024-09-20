
async function fetchdata(){
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Data not found");
        }
        const data = await response.json();


        const imgSprite = document.getElementById('pokemonSprite');
        imgSprite.src =  data.sprites.front_default;
        imgSprite.style.display = 'block';

        document.getElementById('pokemonDetails').innerHTML = `1. Name : ${data.species.name}<br>2. Id : ${data.id}<br>3. Height : ${data.height}<br>4. Type : ${data.types[0].type.name}<br>`;

        console.log(data);
    }
    catch(err){
        console.error(err);
        alert("Data not found")
    }

}