// al hacer click
document.querySelector('.getFact').onclick = () => {
    // API consulta
    fetch('https://catfact.ninja/fact')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            let fact = document.createElement('div')
            fact.className = 'catFact'
            fact.innerHTML = data.fact;
            let el = document.getElementsByClassName('factContainer')[0];
            el.prepend(fact);

        })
}

// async function fetchCat () {
//     let response = await fetch("https://catfact.ninja/fact");
   

//     if (response.ok == false) {
//         throw new Error(response.status);
//     }

//     let cat = await response.json();

//     return cat;
// }

// fetchCat().then(cat => {
//     // Recién ahora tengo los datos
//     console.log(cat);

//     // Mostrar el nombre de la ciudad en el h2
//     gatos.innerHTML = cat.fact;
// });


