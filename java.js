/**
 * Verifica los valores ingresados, realiza el calculo en base a los inputs y luego llama a la funcion para graficar.
 * @method circulo
 * @return
 */

function circulo(){ // funcion circulo
    var r=document.getElementById("runidad").value; // forma sencilla de encontrar elementos en el archivo html.
    var ru=document.getElementById("selectru").value;// forma sencilla de encontrar elementos en el archivo html.
    var a=document.getElementById("acunidad").value;// forma sencilla de encontrar elementos en el archivo html.
    var au=document.getElementById("selectacu").value;// forma sencilla de encontrar elementos en el archivo html.

    if (document.getElementById('ac').checked){ //usar la "," y el "." como separador.

        if(r.includes(",")){
            r=Number(r.replace(",", "."));
        }

        if(isNaN(r)){
            alert("Ingrese un valor válido");
            document.getElementById("runidad").value="";
            return;
        }
        r=metro(r,ru); // conversion a metro
        a=Math.PI*r*r; // area de circulo
        a=unidad(a,au); // conversion a metro
        a=a.toFixed(2); //mejora muestra dos decimales despues de la coma
        document.getElementById("acunidad").value=a;
    }
    else if(document.getElementById('r').checked){
        if(isNaN(a)){
            alert("Ingrese un valor válido");
            document.getElementById("acunidad").value="";
            return;
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        a=metro(a,au);//unidad a m
        r=Math.sqrt(a/Math.PI);
        r=unidad(r,ru);// lo pasa a la unidad
        r=r.toFixed(2); // mejora solicitada 
        document.getElementById("runidad").value=r;
    }
    canvasc();
}

/**
 * Verifica los valores ingresados, realiza el calculo en base a los inputs y luego llama a la funcion para graficar.
 * @method cuadrado
 * @return
 */

function cuadrado(){
    var l1=document.getElementById("l1unidad").value;
    var l1u=document.getElementById("selectl1u").value;
    var l2=document.getElementById("l2unidad").value;
    var l2u=document.getElementById("selectl2u").value;
    var a=document.getElementById("arunidad").value;
    var au=document.getElementById("selectaru").value;

    if(document.getElementById('ar').checked){

        if(l1.includes(",")){
            l1=Number(l1.replace(",", "."));
        }
        if(l2.includes(",")){
            l2=Number(l2.replace(",", "."));
        }

        if(isNaN(l1) || isNaN(l2)){
            alert("Ingrese un valor válido");
            document.getElementById("l1unidad").value="";
            document.getElementById("l2unidad").value="";
            return;

        }
        l1=metro(l1,l1u);//conversion
        l2=metro(l2,l2u); //conversion
        a=l1*l2; 
        a=unidad(a,au);// conversion
        a=a.toFixed(2); //mejora muestra 2 decimales despues de la coma
        document.getElementById("arunidad").value=a;
    }else if(document.getElementById('l2').checked){

        if(l1.includes(",")){
            l1=Number(l1.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        if(isNaN(l1) || isNaN(a)){
            alert("Ingrese un valor válido");
            document.getElementById("l1unidad").value="";
            document.getElementById("arunidad").value="";
            return;
        }
        l1=metro(l1,l1u);
        a=metro(a,au);
        l2=a/l1;
        l2=unidad(l2,l2u);
        l2=l2.toFixed(2); //mejora muestra 2 decimales despues de la coma
        document.getElementById("l2unidad").value=l2;
    }else if(document.getElementById('l1').checked){

        if(l2.includes(",")){
            l2=Number(l2.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        if(isNaN(l2) || isNaN(a)){
            alert("Ingrese un valor válido");
            document.getElementById("l2unidad").value="";
            document.getElementById("arunidad").value="";
            return;
        }
        l2=metro(l2,l2u);
        a=metro(a,au);
        l1=a/l2;
        l1=unidad(l1,l1u);
        l2=l1.toFixed(2); //mejora muestra 2 decimales despues de la coma
        document.getElementById("l1unidad").value=l1;
    }
    canvasr();
}

/**
 * Verifica los valores ingresados, realiza el calculo en base a los inputs y luego llama a la funcion para graficar.
 * @method triangulo
 * @return
 */

function triangulo(){
    var b=document.getElementById("bunidad").value;
    var bu=document.getElementById("selectbu").value;
    var h=document.getElementById("hunidad").value;
    var hu=document.getElementById("selecthu").value;
    var a=document.getElementById("atunidad").value;
    var au=document.getElementById("selectatu").value;

    if(document.getElementById('at').checked){

        if(b.includes(",")){
            b=Number(b.replace(",", "."));
        }
        if(h.includes(",")){
            h=Number(h.replace(",", "."));
        }
        if(isNaN(b) || isNaN(h)){
            alert("Ingrese un valor válido");
            document.getElementById("bunidad").value="";
            document.getElementById("hunidad").value="";
            return;
        }
        b=metro(b,bu);
        h=metro(h,hu);
        a=(b*h)/2;
        a=unidad(a,au);
        a=a.toFixed(2); //mejora muestra 2 decimales despues de la coma

        document.getElementById("atunidad").value=a;
    }else if(document.getElementById('h').checked){

        if(b.includes(",")){
            b=Number(b.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        if(isNaN(b) || isNaN(a)){
            alert("Ingrese un valor válido");
            document.getElementById("bunidad").value="";
            document.getElementById("atunidad").value="";
            return;
        }
        b=metro(b,bu);
        a=metro(a,au);
        h=(a*2)/b;
        h=unidad(h,hu);
        h=h.toFixed(2); //mejora muestra 2 decimales despues de la coma
        document.getElementById("hunidad").value=h;
    }else if(document.getElementById('b').checked){

        if(h.includes(",")){
            h=Number(h.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        if(isNaN(h) || isNaN(a)){
            alert("Ingrese un valor válido");
            document.getElementById("hunidad").value="";
            document.getElementById("atunidad").value="";
            return;
        }
        h=metro(h,hu);
        a=metro(a,au);
        b=(a*2)/h;
        b=unidad(b,bu);
        b=b.toFixed(2);
        document.getElementById("bunidad").value=b;
    }
    canvast();
}

/**
 * Convierte un valor en una unidad cualquiera a metro.
 * @method metro
 * @param {number} v - Valor.
 * @param {string} u - Unidad del valor.
 * @return el valor convertido a metros.
 */

function metro(v, u){
    switch (u) {
        case "m":
            break;
        case "mm":
            v=v*0.001;
            break;
        case "cm":
            v=v*0.01;
            break;
        case "km":
            v=v*1000;
            break;
        case "in":
            v=v*0.0254;
            break;
        case "ft":
            v=v*0.3048;
            break;
        case "yd":
            v=v*0.9144;
    }
    return v;
}

/**
 * Convierte un valor en metro a cualquiera de las otras unidades.
 * @method unidad
 * @param {number} v - Valor.
 * @param {string} u - Unidad a convertir.
 * @return el valor convertido a otra unidad.
 */

function unidad(v,u){
    switch (u) {
        case "m":
            break;
        case "mm":
            v=v*1000*1000;
            break;
        case "cm":
            v=v*100*100;
            break;
        case "km":
            v=v*0.001*0.001;
            break;
        case "in":
            v=v*39.3701*39.3701;
            break;
        case "ft":
            v=v*3.28084*3.28084;
            break;
        case "yd":
            v=v*1.09361*1.09361;
    }
    return v;
}

/**
 * Dibuja el canvas para el circulo.
 * @method canvasc
 * @return
 */

function canvasc(){
    var canvas=document.getElementById("canvasc");
    var ctx=canvas.getContext("2d");
    var x=canvas.width/2;
    var y=canvas.height/2;
    canvas.width=canvas.width;
    ctx.fillStyle = "rgb(22,255,0)";
    ctx.arc(x,y,130,0,2*Math.PI);
    ctx.fill();
}

/**
 * Dibuja el canvas para el rectangulo.
 * @method canvasc
 * @return
 */

function canvasr(){
    var canvas=document.getElementById("canvasr");
    var ctx=canvas.getContext("2d");
    var x=document.getElementById("l1unidad").value;
    var y=document.getElementById("l2unidad").value;
    canvas.width=canvas.width;
    ctx.fillStyle = "rgb(22,255,0)";
    ctx.fill();
    if(x==y){
        ctx.fillRect(5,5, 145*2,145)
    }else if(x>y){
        var r=y/x;
        ctx.fillRect(5,5, 145*2,r*145)
    }else if(x<y){
        var r=x/y;
        ctx.fillRect(5,5, r*145*2,145)
    }
    ctx.fill();
}

/**
 * Dibuja el canvas para el triangulo.
 * @method canvasc
 * @return
 */

function canvast(){
    var canvas=document.getElementById("canvast");
    var ctx=canvas.getContext("2d");
    canvas.width=canvas.width;
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(22,255,0)";
    ctx.fillStyle = "rgb(22,255,0)";
    ctx.moveTo(5, 5);
    ctx.lineTo(5, 145);
    ctx.lineTo(290, 145);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

/**
 * No permite ingresar valores en los inputs que tienen la checkbox marcada.
 * @method ccir
 * @param {string} value - Valor de la checkbox marcada.
 * @return void
 */

function ccir(value){ 
    if(value==="radio"){
        document.getElementById("runidad").style.pointerEvents='none';
        document.getElementById("acunidad").style.pointerEvents='all';
    }else if(value==="area"){
        document.getElementById("runidad").style.pointerEvents='all';
        document.getElementById("acunidad").style.pointerEvents='none';
    }
}

/**
 * No permite ingresar valores en los inputs que tienen la checkbox marcada.
 * @method crec
 * @param {string} value - Valor de la checkbox marcada.
 * @return void
 */

function crec(value){
    if(value==="lado1"){
        document.getElementById("l1unidad").style.pointerEvents='none';
        document.getElementById("l2unidad").style.pointerEvents='all';
        document.getElementById("arunidad").style.pointerEvents='all';
    }else if(value==="lado2"){
        document.getElementById("l1unidad").style.pointerEvents='all';
        document.getElementById("l2unidad").style.pointerEvents='none';
        document.getElementById("arunidad").style.pointerEvents='all';
    }else if(value==="area"){
        document.getElementById("l1unidad").style.pointerEvents='all';
        document.getElementById("l2unidad").style.pointerEvents='all';
        document.getElementById("arunidad").style.pointerEvents='none';
    }
}

/**
 * No permite ingresar valores en los inputs que tienen la checkbox marcada.
 * @method ctri
 * @param {string} value - Valor de la checkbox marcada.
 * @return void
 */

function ctri(value){
    if(value==="base"){
        document.getElementById("bunidad").style.pointerEvents='none';
        document.getElementById("hunidad").style.pointerEvents='all';
        document.getElementById("atunidad").style.pointerEvents='all';
    }else if(value==="altura"){
        document.getElementById("bunidad").style.pointerEvents='all';
        document.getElementById("hunidad").style.pointerEvents='none';
        document.getElementById("atunidad").style.pointerEvents='all';
    }else if(value==="area"){
        document.getElementById("bunidad").style.pointerEvents='all';
        document.getElementById("hunidad").style.pointerEvents='all';
        document.getElementById("atunidad").style.pointerEvents='none';
    }
}