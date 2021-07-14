let ListaProductos = document.getElementById("productos");
let NuevoPrice = document.getElementById("nuevoprecio");
let lista = ListaProductos.value;
let jabon=17;
let champu=20;
let arroz=12;
let Frijoles=18;
let Azucar=15;
let pollo=60;
let Pan=3;
let Cebolla=7;
let leche=16;
let huevos=6;
let chiltoma=12;
let CambioPrecio;
let AcumJa=0;
let AcumPr=0;
let AcumAr=0;
let AcumFr=0;
let AcumAz=0;
let AcumPo=0;
let AcumPa=0;
let AcumCe=0;
let Acumle=0;
let AcumHu=0;
let AcumCh=0;
let total=0;
function SelectProduct(){
    lista=ListaProductos.value;
    if(lista == "1"){
        document.getElementById("PrecioSelect").innerHTML=jabon;
    }
    else if(lista == "2"){
        document.getElementById("PrecioSelect").innerHTML=champu;
    }
    else if(lista == "3"){
        document.getElementById("PrecioSelect").innerHTML=arroz;
    }
    else if (lista == "4"){
        document.getElementById("PrecioSelect").innerHTML=Frijoles;
    }
    else if(lista=="5"){
     document.getElementById("PrecioSelect").innerHTML=Azucar;   
    }
    else if(lista=="6"){
    document.getElementById("PrecioSelect").innerHTML=pollo;    
    }
    else if(lista=="7") {
    document.getElementById("PrecioSelect").innerHTML=Pan;    
    }
    else if(lista=="8") {
    document.getElementById("PrecioSelect").innerHTML=Cebolla;    
    }
    else if(lista=="9") {
    document.getElementById("PrecioSelect").innerHTML=leche;    
    }
    else if(lista=="10") {
    document.getElementById("PrecioSelect").innerHTML=huevos;    
    }
    else if(lista=="11") {
    document.getElementById("PrecioSelect").innerHTML=chiltoma;    
    }
}

function AgregarProducto(){
    if(lista == "1"){
        document.getElementById("carrito").innerHTML += "Jabón ------- "+jabon + "<br>";
        AcumJa=(parseFloat(AcumJa)+parseFloat(jabon));
    }
    else if(lista == "2"){
        document.getElementById("carrito").innerHTML += "Champú ------- "+champu + "<br>";
        AcumPr=(parseFloat(AcumPr)+parseFloat(champu));
    }
    else if(lista == "3"){
        document.getElementById("carrito").innerHTML += "Arroz ------- "+arroz + "<br>";
        AcumAr=(parseFloat(AcumAr)+parseFloat(arroz));
    }
    else if(lista == "4"){
        document.getElementById("carrito").innerHTML += "Frijoles ------- "+Frijoles + "<br>";
        AcumFr=(parseFloat(AcumFr)+parseFloat(Frijoles));
    }
    else if(lista == "5"){
        document.getElementById("carrito").innerHTML += "Azucar ------- "+Azucar + "<br>";
        AcumAz=(parseFloat(AcumAz)+parseFloat(Azucar));
    }
    else if(lista == "6"){
        document.getElementById("carrito").innerHTML += "pollo ------- "+pollo + "<br>";
        AcumPo=(parseFloat(AcumPo)+parseFloat(pollo));
    }
    else if(lista == "7"){
        document.getElementById("carrito").innerHTML += "Pan ------- "+Pan + "<br>";
        AcumPa=(parseFloat(AcumPa)+parseFloat(Pan));
    }
    else if(lista == "8"){
        document.getElementById("carrito").innerHTML += "Cebolla ------- "+Cebolla + "<br>";
        AcumCe=(parseFloat(AcumCe)+parseFloat(Cebolla));
    }
    else if(lista == "9"){
        document.getElementById("carrito").innerHTML += "Leche ------- "+leche + "<br>";
        Acumle=(parseFloat(Acumle)+parseFloat(leche));
    }
    else if(lista == "10"){
        document.getElementById("carrito").innerHTML += "Huevos ------- "+huevos + "<br>";
        AcumHu=(parseFloat(AcumHu)+parseFloat(huevos));
    }
    else if(lista == "11"){
        document.getElementById("carrito").innerHTML += "Chiltoma ------- "+chiltoma + "<br>";
        AcumCh=(parseFloat(AcumCh)+parseFloat(chiltoma));
    }
    
    total=AcumJa+AcumPr+AcumAr+AcumFr+AcumAz+AcumPo+AcumPa+AcumCe+Acumle+AcumHu+AcumCh;
    document.getElementById("TotalSelect").innerHTML=total;
}

function NuevoPrecio(CambioPrecio){
    CambioPrecio = NuevoPrice.value;
    if(lista == "1"){
        document.getElementById("PrecioSelect").innerHTML=jabon=CambioPrecio;
    }
    else if(lista == "2"){
        document.getElementById("PrecioSelect").innerHTML=champu=CambioPrecio
    }
    else if(lista == "3"){
        document.getElementById("PrecioSelect").innerHTML=arroz=CambioPrecio;
    }
    else if(lista == "4"){
        document.getElementById("PrecioSelect").innerHTML=Frijoles=CambioPrecio
    }
    else if(lista == "5"){
        document.getElementById("PrecioSelect").innerHTML=Azucar=CambioPrecio;
    }
    else if(lista == "6"){
        document.getElementById("PrecioSelect").innerHTML=pollo=CambioPrecio
    }
    else if(lista == "7"){
        document.getElementById("PrecioSelect").innerHTML=Pan=CambioPrecio;
    }
    else if(lista == "8"){
        document.getElementById("PrecioSelect").innerHTML=Cebolla=CambioPrecio;
    }
    else if(lista == "9"){
        document.getElementById("PrecioSelect").innerHTML=leche=CambioPrecio
    }
    else if(lista == "10"){
        document.getElementById("PrecioSelect").innerHTML=huevos=CambioPrecio;
    }
    else if(lista == "11"){
        document.getElementById("PrecioSelect").innerHTML=chiltoma=CambioPrecio;
    }


}
let pago;
let vuelto;
function Pagar(){
    pago=document.getElementById("Pago").value;
    vuelto=pago-total;
    document.getElementById("vuelto").innerHTML=vuelto.toFixed(2)+ "C$ Cordobas";
}
function Desgloce(){
    // Indicamos todas las monedas posibles
    pago = document.getElementById("Pago").value;
    vuelto=pago-total;
    document.getElementById("parrafos").innerHTML+="<p>El cambio de la cantidad "+vuelto.toFixed(2)+"</p>";
    var monedas=Array(1000, 500, 200, 100, 50, 20, 10, 5, 1, 0.50, 0.25);
     
    // Creamos un arreglo con la misma cantidad de monedas.
    // Este arriglo contendra las monedas a devolver.
    var cambio=Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
     
    // Recorremos todas las monedas.
    for(var i=0; i<monedas.length; i++)
    {
        // Si el vuelto actual, es superior a la moneda.
        if(vuelto>=monedas[i])
        {
            // Obtenemos cantidad de monedas.
            cambio[i]=parseInt(vuelto/monedas[i]);
            // Actualizamos el valor del vuelto que nos queda por didivir.
            vuelto=(vuelto-(cambio[i]*monedas[i])).toFixed(2);
        }
    }
     
    // Bucle para mostrar el resultado.
    for(i=0; i<monedas.length; i++)
    {
        if(cambio[i]>0)
        {
            if(monedas[i]>=5){
                document.getElementById("parrafos").innerHTML+= cambio[i]+" billete(s) de: "+monedas[i]+" Córdobas <br>";
            }
            else{
                if(monedas[i]>=1){
                    document.getElementById("parrafos").innerHTML+=cambio[i]+" moneda(s) de: "+monedas[i]+" Córdoba <br>";
                }
                else{
                    document.getElementById("parrafos").innerHTML+=" moneda(s) de: "+monedas[i]+" Centavos de Córdoba <br>";
                }
            }
        }
    }
    
}
