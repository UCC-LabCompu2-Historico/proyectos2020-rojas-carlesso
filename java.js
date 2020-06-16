function circulo(){
    var r=document.getElementById("runidad").value;
    var ru=document.getElementById("selectru").value;
    var a=document.getElementById("acunidad").value;
    var au=document.getElementById("selectacu").value;

    if (document.getElementById('ac').checked){
        if(r.includes(",")){
            r=Number(r.replace(",", "."));
        }
        r=metro(r,ru);
        a=Math.PI*r*r;
        a=unidad(a,au);
        document.getElementById("acunidad").value=a;
    }
    else if(document.getElementById('r').checked){
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        a=metro(a,au);
        r=Math.sqrt(a/Math.PI);
        r=unidad(r,ru);
        document.getElementById("runidad").value=r;
    }
    canvasc();
}

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
        l1=metro(l1,l1u);
        l2=metro(l2,l2u);
        a=l1*l2;
        a=unidad(a,au);
        document.getElementById("arunidad").value=a;
    }
    if(document.getElementById('l2').checked){
        if(l1.includes(",")){
            l1=Number(l1.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        l1=metro(l1,l1u);
        a=metro(a,au);
        l2=a/l1;
        l2=unidad(l2,l2u);
        document.getElementById("l2unidad").value=l2;
    }
    if(document.getElementById('l1').checked){
        if(l2.includes(",")){
            l2=Number(l2.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        l2=metro(l2,l2u);
        a=metro(a,au);
        l1=a/l2;
        l1=unidad(l1,l1u);
        document.getElementById("l1unidad").value=l1;
    }
    canvasr(l1,l2);
}

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
        b=metro(b,bu);
        h=metro(h,hu);
        a=(b*h)/2;
        a=unidad(a,au);
        document.getElementById("atunidad").value=a;
    }
    if(document.getElementById('h').checked){
        if(b.includes(",")){
            b=Number(b.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        b=metro(b,bu);
        a=metro(a,au);
        h=(a*2)/b;
        h=unidad(h,hu);
        document.getElementById("hunidad").value=h;
    }
    if(document.getElementById('b').checked){
        if(h.includes(",")){
            h=Number(h.replace(",", "."));
        }
        if(a.includes(",")){
            a=Number(a.replace(",", "."));
        }
        h=metro(h,hu);
        a=metro(a,au);
        b=(a*2)/h;
        b=unidad(b,bu);
        document.getElementById("bunidad").value=b;
    }
    canvast();
}

function metro(v, u){
    switch (u) {
        case "m":
            break
        case "mm":
            v=v/1000;
            break
        case "cm":
            v=v/100;
            break
        case "km":
            v=v*1000;
            break
        case "in":
            v=v*0.0254;
            break
        case "ft":
            v=v*0.3048;
            break
        case "yd":
            v=v*0.9144;
    }
    return v;
}

function unidad(v,u){
    switch (u) {
        case "m":
            break
        case "mm":
            v=v*1000;
            break
        case "cm":
            v=v*100;
            break
        case "km":
            v=v/1000;
            break
        case "in":
            v=v/0.0254;
            break
        case "ft":
            v=v/0.3048;
            break
        case "yd":
            v=v/0.9144;
    }
    return v;
}

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

function canvasr(l1,l2){
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

function canvast(){
    var canvas=document.getElementById("canvast");
    var ctx=canvas.getContext("2d");
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

function ccir(value){
    if(value=="radio"){
        document.getElementById("runidad").style.pointerEvents='none';
        document.getElementById("acunidad").style.pointerEvents='all';
    }else if(value=="area"){
        document.getElementById("runidad").style.pointerEvents='all';
        document.getElementById("acunidad").style.pointerEvents='none';
    }
}

function crec(value){
    if(value=="lado1"){
        document.getElementById("l1unidad").style.pointerEvents='none';
        document.getElementById("l2unidad").style.pointerEvents='all';
        document.getElementById("arunidad").style.pointerEvents='all';
    }else if(value=="lado2"){
        document.getElementById("l1unidad").style.pointerEvents='all';
        document.getElementById("l2unidad").style.pointerEvents='none';
        document.getElementById("arunidad").style.pointerEvents='all';
    }else if(value=="area"){
        document.getElementById("l1unidad").style.pointerEvents='all';
        document.getElementById("l2unidad").style.pointerEvents='all';
        document.getElementById("arunidad").style.pointerEvents='none';
    }
}

function ctri(value){
    if(value=="base"){
        document.getElementById("bunidad").style.pointerEvents='none';
        document.getElementById("hunidad").style.pointerEvents='all';
        document.getElementById("atunidad").style.pointerEvents='all';
    }else if(value=="altura"){
        document.getElementById("bunidad").style.pointerEvents='all';
        document.getElementById("hunidad").style.pointerEvents='none';
        document.getElementById("atunidad").style.pointerEvents='all';
    }else if(value=="area"){
        document.getElementById("bunidad").style.pointerEvents='all';
        document.getElementById("hunidad").style.pointerEvents='all';
        document.getElementById("atunidad").style.pointerEvents='none';
    }
}