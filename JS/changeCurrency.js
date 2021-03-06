//! Funcion para obtenr los datos del API

const getDataApi = async (event) => {
    try {
        const dataApi = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
        if(dataApi.ok) {
            const dataResponse = await dataApi.json();

            //! Codigo para convertir divisas

             //a Codigo para variables

            console.log(dataResponse) // Para testear se ve en consola el JSON
            const dollarApi = dataResponse.usd.usd;
            const libraApi = dataResponse.usd.gbp;
            const euroApi = dataResponse.usd.eur;

            const basicPrice = document.querySelector('#basicPrice');
            const proPrice = document.querySelector('#proPrice');
            const premiumPrice = document.querySelector('#premiumPrice');

            switch(event.target.value){

                case 'euro': 

                basicPrice.textContent = '€0'
                proPrice.textContent = '€' + Math.ceil(( 25 * dollarApi ) * euroApi);
                premiumPrice.textContent = '€' + Math.ceil((60 * dollarApi) * euroApi);

                
                break;

                case 'dollar':
                   
                    basicPrice.textContent = '$0'; 
                    proPrice.textContent = '$25';
                    premiumPrice.textContent = '$60';

                    break; 

                case 'libra' :

                    basicPrice.textContent = '£0'
                    proPrice.textContent = '£' + Math.ceil(libraApi * (25 * dollarApi));
                    premiumPrice.textContent =  '£' + Math.ceil(libraApi * (60 * dollarApi));
            }

    /*      // Primer codigo para prbar las funcionalidades y ver que funciona luego decido hacer switch   if(event.target.value == 'euro'){
               console.log(dataResponse.eur.eur);
               const dollarApi = dataResponse.eur.usd;
               const euroApi = dataResponse.eur.eur;
               const proPrice = document.querySelector('#proPrice');
               proPrice.textContent = '€' + (euroApi * (25 * dollarApi)).toPrecision(4); } */ //* Para permitir solo 4 digitos usamos la propueda toprecicios antes envolveos en parentesis lo que queremos podern con "precision"
            
           
        } //*Else sin if https://www.codecademy.com/forum_questions/526868e5548c352551000f60
        /* throw new Error('Failed to Request Currency API');  */
         //* throw new Error es para crear el constructor para el mensaje de error de un objeto para crear mensaje personalizadono de error https://www.educba.com/javascript-throw-exception/, en este caso se le pasa un parametro https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
    } catch (error) {
        console.log(error)
    }
}

//! Variabe para seleccionar la lista de opciones "select"

const listaOpciones = document.querySelector('#selectCurrencis');

const euroo = (event) =>{
    console.log(event.target.value); //Se ve el valor del objetico del evento
    getDataApi(event);

}


listaOpciones.addEventListener('input',euroo)



