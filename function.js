let url = "https://randomuser.me/api/";
fetch(url)
  .then((response) => response.json())
  .then((json) => mostrarData(json))
  .catch(error => console.log(error))

const mostrarData = (data) => {
   // console.log('data', data)
    console.log('data ', data.results)

    let cuerpo = '';
    for (let i = 0; i < data.results.length; i++) {

        cuerpo += `<br>
        <ul >  
        <li> Name: ${data.results[i].name.title + ' ' +data.results[i].name.first } </li>
        <li> Age: ${data.results[i].dob.age}  </li>
        <li> Location: ${data.results[i].location.country}  </li>
        <li> Experience: Training </li>
        </ul>`

    }
    document.getElementById('datosColumna1').innerHTML = cuerpo;
    //primera columna
    let firstcolum = '';
     for (let i = 0; i < data.results.length; i++) {
         
        firstcolum += `<ul>  
         <li> Name: ${data.results[i].name.first} </li>
         <li> City: ${data.results[i].location.city} </li>
         <li> State: ${data.results[i].location.state} </li>
         <li> Phone: ${data.results[i].phone} </li>
         <li> E-Mail: ${data.results[i].email} </li>
     </ul>`
 
     }
     document.getElementById('columna20').innerHTML = firstcolum;
     //segunda columna
     let secondColumn = '';
     for (let i = 0; i < data.results.length; i++) {
         
         secondColumn += `<ul>  
         <li> Lastname: ${data.results[i].name.last} </li>
         <li> Age: ${data.results[i].dob.age} </li>
         <li> Street: ${data.results[i].location.street.name + ' ' + data.results[i].location.street.number } </li>
         <li> Country: ${data.results[i].location.country} </li>
         <li> Genero: ${data.results[i].gender} </li>
     </ul>`
 
     }
     document.getElementById('columna21').innerHTML = secondColumn;

    //foto

    let foto = '';
     for (let i = 0; i < data.results.length; i++) {
         
        foto += `<img id src="${data.results[i].picture.large}" alt="Foto CV" width="200" height="250" >`
 
     }
     document.getElementById('foto').innerHTML = foto;


}

// Cambiar a mi cv
document.getElementById("miCV").addEventListener("click", function () {
    document.getElementById("body").innerHTML = `   
    <div class="text-center p-3" style="margin:0;
    padding:0; margin-top: 10px;">
        <h1> Proyecto Integrador Argentina Programa 4.0</h1>
        </div>
        <div  style="margin-left: 20px;" >   
            <div>
                      <h3><i class="fa fa-list"></i> <u>Mi Curriculum Vitae</u></h3>

                        <ul>   
                            <li> Nombre: Marcos Marcelo</li>
                            <li> Apellido: Puglisi  </li>
                            <li> Nacimiento: 25/06/1994 </li>
                            <li> Nacionalidad: Argentina </li>
                            <li> e-mail: profe.puglisi@gmail.com</li>
                            <li> Calle: Via Jucepi Verdi </li>
                            <li> Ciudad: Capital </li>
                            <li> Provincia: Cordoba </li>
                            <li> Phone: +549 351 6 111111 </li>
                        </ul>
            </div>
            <div>
                  <h5><i class="fa fa-briefcase"></i> <u> Experiencia </u></h5>

                    <ul>
                        <li> HTML </li>
                        <li> CSS </li>
                        <li> Javascritp </li>
                        <li> Bootstrap </li>
                        <li> fontawesome </li>
                        <li> Github </li>
                        <li> Git </li>
                        <li> SeProgramar  </li>
                        <li> ArgentinaPrograma 4.0 </li>
                        <li> Front end Academy - 2022  </li>
                    </ul>
            </div>
            <div>    
                  <h5><i class="fa fa-github"></i> <u> Proyectos </u></h5>


                     <button onclick="location.href='https://github.com/MarcosPuglisi/'" type="button" class="btn btn-secondary">Go to projects</button> 
            </div>
        </div>
    </div>

    `
})

// Cambiar de personas
document.getElementById("reload").addEventListener("click", function () {
    location.reload();
 })

//Cambiar de colores
let aleatorio1= Math.floor(Math.random() * (255+1-0) + 0);
let aleatorio2= Math.floor(Math.random() * (255+1-0) + 0);
let aleatorio3= Math.floor(Math.random() * (255+1-0) + 0);
let aleatorio4= Math.floor(Math.random() * (255+1-0) + 0);
document.getElementById("colores").addEventListener("click", function () {
    document.body.style.backgroundColor = `rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3}, ${aleatorio4})`;
    document.body.style.color = "black";
 })
 document.getElementById("colores2").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgray";
    document.body.style.color = "black";
 })