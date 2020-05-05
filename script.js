function realizaPeticion(url) {
    //acceso a la etiqueta p del html
    const encabezado = document.getElementById('encabezado');

    //arrays que almacenan los datos
    const temperatura = [], viento = [], descripcion = [], nubes = [], icono = [], dia = [];

    //creación del objeto XMLHttpREsquest
    const objeto = new XMLHttpRequest();

    //abre la petición
    objeto.open("GET", url, true);

    //envia la petición
    objeto.send(null);

    //estado de la petición
    objeto.onreadystatechange = () => {
        if (objeto.readyState == 4 && objeto.status == 200) {
            const datos = JSON.parse(objeto.responseText);

            //pinta el nombre de la localidad
            encabezado.textContent = `Datos del tiempo en ${datos.city.name}`;
            encabezado.classList.add('verde');

            //Bucle que obtiene los datos del JSON y los almacena en los array
            for (let i = 0; i < datos.list.length; i++) {
                if (datos.list[i].dt_txt.substring(11, 13) == '00') {
                    encabezado.classList.remove('rojo'); //quita la clase rojo

                    //almacena los datos en los arrays
                    temperatura.push(datos.list[i].main.temp.toFixed(1));
                    viento.push(datos.list[i].wind.speed);
                    nubes.push(datos.list[i].clouds.all);
                    descripcion.push(datos.list[i].weather[0].description);
                    icono.push(datos.list[i].weather[0].icon);
                    dia.push(datos.list[i].dt_txt.slice(0, 10));
                }
            }

            //define el patrón de la fecha
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            //bucle que mete los datos en los td de la tabla  
            for (let i = 0; i <= 2; i++) {
                let td = document.getElementById(i); //acceso a los td de la tabla
                let fecha = new Date(dia[i]);
                td.textContent = `${fecha.toLocaleDateString("es-ES", options)} ${temperatura.slice(0, 3)[i]} ºC ${viento.slice(0, 3)[i]} 
                                  ${nubes.slice(0, 3)[i]} % ${descripcion.slice(0, 3)[i]}`;

                //crea la etiqueta img
                let img = document.createElement('img');
                img.setAttribute('src', `https://openweathermap.org/img/wn/${icono.slice(0, 3)[i]}.png`);

                //añade la etiqueta img a la tabla
                td.appendChild(img);
            }

        }//fin el if
        else {
            //evento que indica que la petición no ha podido llegar al servidor y muestra un error
            objeto.addEventListener("error", function () {
                encabezado.textContent = 'Error de red, imposible conectar con el servidor';
                encabezado.classList.add('rojo'); //pone el texto en rojo

                //borra los datos que hubiera en los td al producirse el error
                for (let i = 0; i <= 2; i++) {
                    let td = document.getElementById(i);
                    td.textContent = "";
                }
            });

        } //fin el else
    }
}

//LLAMADAS AL MÉTODO QUE REALIZA LA PETICIÓN AL SERVIDOR
//al pulsar sobre la localidad el pedroso en el mapa se lanzara el error por que he borrado letras de la url para que no conecte al servidor y se vea el error
const pedroso = () => realizaPeticion("https://api.openweathermap/data/2.5/forecast?q=el pedroso&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const constantina = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=constantina&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const guillena = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=guillena&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const loraRio = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=lora del rio&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const alcalaRio = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=alcala del rio&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const ecija = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=ecija&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const carmona = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=carmona&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const viso = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=viso&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const mairenaAlcor = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=mairena del alcor&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const marchena = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=marchena&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const osuna = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=osuna&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const estepa = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=estepa&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const moron = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=moron&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const utrera = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=utrera&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const dosHermanas = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=dos hermanas&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const camas = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=camas&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const pilas = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=pilas&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const aznalcazar = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=aznalcazar&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const islaMayor = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=isla mayor&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const lebrija = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=lebrija&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");
const sevilla = () => realizaPeticion("https://api.openweathermap.org/data/2.5/forecast?q=sevilla&lang=es&units=metric&APPID=c8ef30a7467712d12064c4a343218094");