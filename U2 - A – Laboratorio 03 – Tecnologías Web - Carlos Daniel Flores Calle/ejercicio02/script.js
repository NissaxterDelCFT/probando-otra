function datos(){
    var nomb = document.getElementsByName("nombre")[0].value;
    var asig = document.getElementsByName("asignatura")[0].value;

    var uni1nota1 = document.getElementsByName("u1nota1")[0].value;
    var uni1nota2 = document.getElementsByName("u1nota2")[0].value;

    var uni2nota1 = document.getElementsByName("u2nota1")[0].value;
    var uni2nota2 = document.getElementsByName("u2nota2")[0].value;

    var uni3nota1 = document.getElementsByName("u3nota1")[0].value;
    var uni3nota2 = document.getElementsByName("u3nota2")[0].value;

    var rnomb = document.getElementById("r_nombre");
    var rasig = document.getElementById("r_asignatura");

    var uni1rnota1 = document.getElementById("u1r_nota1");
    var uni1rnota2 = document.getElementById("u1r_nota2");

    var uni2rnota1 = document.getElementById("u2r_nota1");
    var uni2rnota2 = document.getElementById("u2r_nota2");

    var uni3rnota1 = document.getElementById("u3r_nota1");
    var uni3rnota2 = document.getElementById("u3r_nota2");

    rnomb.innerHTML = "";
    rasig.innerHTML = "";

    uni1rnota1.innerHTML = "";
    uni1rnota2.innerHTML = "";

    uni2rnota1.innerHTML = "";
    uni2rnota2.innerHTML = "";
    
    uni3rnota1.innerHTML = "";
    uni3rnota2.innerHTML = "";

    ponderacion1= ((uni1nota1*0.12)+(uni1nota2*0.21));
    ponderacion2= ((uni2nota1*0.12)+(uni2nota2*0.21));
    ponderacion3= ((uni3nota1*0.13)+(uni3nota2*0.21));
    promedio= (ponderacion1+ponderacion2+ponderacion3);

    promedio_end=(promedio).toFixed(1);

    

        if (/^[]*$/.test(nomb) || !isNaN(nomb) || nomb.length>10){
            rnomb.innerHTML= "Nombre INVALIDO";
        }else if (asig === "nada"){
            rasig.innerHTML= "Seleccione Asignatura";

        }else if(/^[]*$/.test(uni1nota1) || 7.0<uni1nota1 || 0>uni1nota1 || isNaN (uni1nota1)){
            uni1rnota1.innerHTML= "NOTA 1. INVALIDO";
        }else if (/^[]*$/.test(uni1nota2) || 7.0<uni1nota2 || 0>uni1nota2 || isNaN (uni1nota2)){
            uni1rnota2.innerHTML= "NOTA 2. INVALIDO";

        }else if (/^[]*$/.test(uni2nota1) || 7.0<uni2nota1 || 0>uni2nota1 || isNaN (uni2nota1)){
            uni2rnota1.innerHTML= "NOTA 1 U2. INVALIDO";
        }else if (/^[]*$/.test(uni2nota2) || 7.0<uni2nota2 || 0>uni2nota2 || isNaN (uni2nota2)){
            uni2rnota2.innerHTML= "NOTA 2 U2. INVALIDO";

        }else if (/^[]*$/.test(uni3nota1) || 7.0<uni3nota1 || 0>uni3nota1 || isNaN (uni3nota1)){
            uni3rnota1.innerHTML= "NOTA 1 U3. INVALIDO";
        }else if (/^[]*$/.test(uni3nota2) || 7.0<uni3nota2 || 0>uni3nota2 || isNaN (uni3nota2)){
            uni3rnota2.innerHTML= "NOTA 2 U3. INVALIDO";

        }else if(promedio>=4.0){
            document.write("<!DOCTYPE html>"+
            "<html lang='en'>"+
            "<head>"+
                    "<meta charset='UTF-8'>"+
                    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
                    "<title>Document</title>"+
                    "<link rel='stylesheet' href='style.css'></link>"+
                "</head>"+
                "<body>"+
                "<header class='header1'>"+
                        "<img class='imagen2' src='assets/1666939008169.png' alt='' width='20%'>"+
                            "<nav class='redireccion'>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl' class='as'>INICIO</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/formacion-continua/' class='as'>FORMACIÓN CONTINUA</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/titulados/' class='as'>TITULADOS</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/higiene-y-seguridad/' class='as'>HIGIENE Y SEGURIDAD</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/documentos-oficiales/' class='as'>DOCUMENTOS OFICIALES</a></li>"+
                                "<li class='cta'><p><input type='text' class='inputs'><button class='boton'>Buscar</button></p></li>"+
                            "</nav>"+
                    "</div>"+
                "</header>"+
                "<div class='incio-presentacion2'>"+
                "<table class='presentacion2'>"+
                "<tr>"+
                    "<th><h1>Felicidades</h1></th>"+
                "</tr>"+
                "<tr>"+
                    "<th><h2>Has APROBADO!</h2></th>"+
                "</tr>"+
                "</table></div>"+
            "<section id= 'tabla-resultado'>"+
            "<div class= 'tabla-conteiner'>"+
            "<table class= 'tabla1'>"+
            "<tr>"+
                "<td colspan='3' class= 'td2'><h2>REGISTRO</h2></td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3' class= 'td1'><b>Nombre: </b>"+nomb+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3' class= 'td1'><b>Asignatura: </b>"+asig+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>UNIDAD 1</b></td>"+
                "<td class= 'td1'><b>UNIDAD 2</b></td>"+
                "<td class= 'td1'><b>UNIDAD 3</b></td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>Nota 1 (12%): </b>"+uni1nota1+"</td>"+
                "<td class= 'td1'><b>Nota 1 (12%): </b>"+uni2nota1+"</td>"+
                "<td class= 'td1'><b>Nota 1 (13%): </b>"+uni3nota1+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>Nota 2 (21%): </b>"+uni1nota2+"</td>"+
                "<td class= 'td1'><b>Nota 2 (21%): </b>"+uni2nota2+"</td>"+
                "<td class= 'td1'><b>Nota 2 (21%): </b>"+uni3nota2+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>Ponderacion: </b>"+ponderacion1+"</td>"+
                "<td class= 'td1'><b>Ponderacion: </b>"+ponderacion2+"</td>"+
                "<td class= 'td1'><b>Ponderacion: </b>"+ponderacion3+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3' class= 'td1'>Promedio:"+promedio_end+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3'><a href='index.html'><input type='submit' class='inputs2' value='Volver'></a></td>"+
            "</tr>"+
            
            "</table>"+
            "</div>"+
            "</section>"+
        "</body>"+
        "</html>"
                );
        }else if(promedio<4.0){
            document.write("<!DOCTYPE html>"+
            "<html lang='en'>"+
            "<head>"+
                    "<meta charset='UTF-8'>"+
                    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
                    "<title>Document</title>"+
                    "<link rel='stylesheet' href='style.css'></link>"+
                "</head>"+
                "<body>"+
                "<header class='header1'>"+
                        "<img class='imagen2' src='assets/1666939008169.png' alt='' width='20%'>"+
                            "<nav class='redireccion'>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl' class='as'>INICIO</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/formacion-continua/' class='as'>FORMACIÓN CONTINUA</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/titulados/' class='as'>TITULADOS</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/higiene-y-seguridad/' class='as'>HIGIENE Y SEGURIDAD</a></li>"+
                                "<li class='redireccion_'><a href='https://cftestatalaricayparinacota.cl/documentos-oficiales/' class='as'>DOCUMENTOS OFICIALES</a></li>"+
                                "<li class='cta'><p><input type='text' class='inputs'><button class='boton'>Buscar</button></p></li>"+
                            "</nav>"+
                    "</div>"+
                "</header>"+
                "<div class='incio-presentacion2'>"+
                "<table class='presentacion2'>"+
                "<tr>"+
                    "<th><h1>INTENTALO PARA LA PROXIMA</h1></th>"+
                "</tr>"+
                "<tr>"+
                    "<th><h2>Has REPROBADO!</h2></th>"+
                "</tr>"+
                "</table></div>"+
            "<section id= 'tabla-resultado'>"+
            "<div class= 'tabla-conteiner'>"+
            "<table class= 'tabla1'>"+
            "<tr>"+
                "<td colspan='3' class= 'td2'><h2>REGISTRO</h2></td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3' class= 'td1'><b>Nombre: </b>"+nomb+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3' class= 'td1'><b>Asignatura: </b>"+asig+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>UNIDAD 1</b></td>"+
                "<td class= 'td1'><b>UNIDAD 2</b></td>"+
                "<td class= 'td1'><b>UNIDAD 3</b></td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>Nota 1 (12%): </b>"+uni1nota1+"</td>"+
                "<td class= 'td1'><b>Nota 1 (12%): </b>"+uni2nota1+"</td>"+
                "<td class= 'td1'><b>Nota 1 (13%): </b>"+uni3nota1+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>Nota 2 (21%): </b>"+uni1nota2+"</td>"+
                "<td class= 'td1'><b>Nota 2 (21%): </b>"+uni2nota2+"</td>"+
                "<td class= 'td1'><b>Nota 2 (21%): </b>"+uni3nota2+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td class= 'td1'><b>Ponderacion: </b>"+ponderacion1+"</td>"+
                "<td class= 'td1'><b>Ponderacion: </b>"+ponderacion2+"</td>"+
                "<td class= 'td1'><b>Ponderacion: </b>"+ponderacion3+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3' class= 'td1'>Promedio:"+promedio_end+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td colspan='3'><a href='index.html'><input type='submit' class='inputs2' value='Volver'></a></td>"+
            "</tr>"+
            
            "</table>"+
            "</div>"+
            "</section>"+
        "</body>"+
        "</html>");
        }
}
