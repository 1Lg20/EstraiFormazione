console.log(
	"%c%s",
	"color: #ff7514; font-size:20px; font-weight:bold",
	"<---Created by Lg20--->"
)

let NPortieri=1, NDifensori=0, NCentrocampisti=0, NAttaccanti=0, Controllo=false, Stampato=false

const Formazione=()=>{
	let valore=document.querySelector("#Formazione").value
	console.log("La select ha valore="+valore)
	if (valore!="NONE") {
		console.log("Valore Valido")
		Controllo=true
		fetch(ModuliJson)
		.then(dati=>dati.json())
		.then(dati=>{
			for (let i = 0; i < dati.length; i++) {
				if (dati[i].id==valore) {
					NDifensori=dati[i].Difensori
					NCentrocampisti=dati[i].Centrocampisti
					NAttaccanti=dati[i].Attaccanti
				}
			}

			if (NDifensori==0 || NCentrocampisti==0 || NAttaccanti==0) {
				Swal.fire({
					icon: 'error',
					title: 'Errore',
					text: 'Il calcolo dei giocatori è andato storto',
					footer: ''
				  })
			}else{
				console.log("Portieri="+NPortieri+"-Difensori="+NDifensori+"+Centrocampisti="+NCentrocampisti+"Attaccanti="+NAttaccanti)
			}
			Genera()
		})
	}else{
		console.log("Nessun valore inserito")
		Controllo=false
	}
}

const Genera=()=>{
	if (Controllo==true) {
		console.log("Entro in Genera()")
		if (Stampato==true) {
			Cancella()
		}
		console.log("genero le Blankcard")
		// Blankcard per portiere 
		let Padre=document.querySelector("#Portieri")
		let Figlio=document.createElement("div")
		let Figlio2=document.createElement("img")
		Figlio2.setAttribute("src","./Img/Blankcard.png")
		Figlio2.setAttribute("class","card")
		Figlio2.setAttribute("id","Portire-"+0)
		Figlio.setAttribute("class","col-3 d-flex justify-content-center align-items-center")
		Figlio.appendChild(Figlio2)
		Padre.appendChild(Figlio)

		// Blankcard per Difensori 
		Padre=document.querySelector("#Difensori")
		for (let i = 0; i < NDifensori; i++) {
		Figlio=document.createElement("div")
		Figlio2=document.createElement("img")
		Figlio2.setAttribute("src","./Img/Blankcard.png")
		Figlio2.setAttribute("class","card")
		Figlio2.setAttribute("id","Difensore-"+i)
		Figlio.setAttribute("class","col-2 d-flex justify-content-center align-items-center")
		Figlio.appendChild(Figlio2)
		Padre.appendChild(Figlio)
		}

		// Blankcard per Centrocampisti 
		Padre=document.querySelector("#Centrocampisti")
		for (let i = 0; i < NCentrocampisti; i++) {
		Figlio=document.createElement("div")
		Figlio2=document.createElement("img")
		Figlio2.setAttribute("src","./Img/Blankcard.png")
		Figlio2.setAttribute("class","card")
		Figlio2.setAttribute("id","Centrocampista-"+i)
		Figlio.setAttribute("class","col-2 d-flex justify-content-center align-items-center")
		Figlio.appendChild(Figlio2)
		Padre.appendChild(Figlio)
		}

		// Blankcard per Attaccanti
		Padre=document.querySelector("#Attaccanti")
		for (let i = 0; i < NAttaccanti; i++) {
		Figlio=document.createElement("div")
		Figlio2=document.createElement("img")
		Figlio2.setAttribute("src","./Img/Blankcard.png")
		Figlio2.setAttribute("class","card")
		Figlio2.setAttribute("id","Attaccanti-"+i)
		Figlio.setAttribute("class","col-2 d-flex justify-content-center align-items-center")
		Figlio.appendChild(Figlio2)
		Padre.appendChild(Figlio)
		}
		Stampato=true

	}else{
		Swal.fire(
			'Modulo non Inserito',
			'Inserire il modulo',
			'question'
		)
	}


}

const Cancella=()=>{
	console.log("Entro in cancella()")
	document.querySelector("#Campo").innerHTML=
	'<!-- Portieri -->'+
	'<div class="col-12 d-flex justify-content-center align-items-center mt-2">'+
		'<div class="row justify-content-center align-items-center" id="Portieri"></div>'+
	'</div>'+
	'<!-- Difensori -->'+
	'<div class="col-12 d-flex justify-content-center align-items-center mt-2">'+
		'<div class="row justify-content-center align-items-center" id="Difensori"></div>'+
	'</div>'+
	'<!-- Centrocampisti -->'+
	'<div class="col-12 d-flex justify-content-center align-items-center mt-2">'+
		'<div class="row justify-content-center align-items-center" id="Centrocampisti"></div>'+
	'</div>'+
	'<!-- Attaccanti -->'+
	'<div class="col-12 d-flex justify-content-center align-items-center mt-2">'+
		'<div class="row justify-content-center align-items-center" id="Attaccanti"></div>'+
	'</div>'+
	'<div style="height: 10px;"></div>'
	
}

const Giocatori=()=>{
	Swal.fire('Presto Disponibile!')
}