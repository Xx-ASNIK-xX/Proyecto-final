function getRand() {
	fetch("https://catfact.ninja/fact?max_length=512")
		.then((response) => {
			if (!response.ok)
				return (document.getElementById("cat-fact").innerHTML =
					"hooo hay un error.");
			return response.json();
		})
		.then(
			(data) => (document.getElementById("cat-fact").innerHTML = data.fact)
		);
        
}

function getImg() {
	fetch("https://api.thecatapi.com/v1/images/search")
		.then((response) => {
			if (!response.ok)
				return document
					.getElementById("cat-img")
			return response.json();
		})
		.then((data) => {
			if (data[0].height > 600) {
				return getImg();
			}
			document
				.getElementById("cat-img")
				.setAttribute("src", data[0].url.toString());

			getRand();
		});

	document.getElementById("getBtn").disabled = true;
	setTimeout(function () {
		document.getElementById("getBtn").disabled = false;
	}, 1000);
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


