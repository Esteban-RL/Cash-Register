let price = 19.5;
let cid = [
  ["PENNY", 1],
  ["NICKEL", 3],
  ["DIME", 0.8],
  ["QUARTER", 5],
  ["ONE", 10],
  ["FIVE", 15],
  ["TEN", 50],
  ["TWENTY", 60],
  ["ONE HUNDRED", 200]
];
//DEFINIMOS LAS CONSTANTES SACADAS DEL HTML
const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');



//ALCANZA?
const alcanza= ()=>{
  if(price > Number(cash.value)){
    alert("Customer does not have enough money to purchase the item");
    cash.value=""
    return
  }else if (price===Number(cash.value)){
    displayChangeDue.textContent="No change due - customer paid with exact cash"
    cash.value=""
    return
  }//hasta aca llega el if
  const cambio1=Number(cash.value)-price
  let cambio=Number(cash.value)-price
  let billetes=[0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  let resultado=["Status: OPEN "];
  let resultadoCerrado=["Status: CLOSED "];

  let vuelto=[]
for(let i=8; i >= 0; i--){
  if(cambio >= billetes[i] && cambio > 0){ 
    let total = cid[i][1];
    let cuenta=0


//mientras haya billetes y el cambio que hay que dar sea mas que el billete:
    while (total > 0 && cambio >= billetes[i]) {
      total -= billetes[i];
      cambio = parseFloat((cambio -= billetes[i]).toFixed(2));
      cuenta++
      console.log(cambio.toFixed(2)) 
    };//cierro el while

    if (cuenta > 0) {
      vuelto.push(`${cid[i][0]}: $${cuenta * billetes[i]}`);
    }
  };//cierro el if
};//cierro el for
    if (cambio > 0) {
      return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
    }
    const sum= cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);
    console.log(sum)
    console.log(cambio)
    if(sum === cambio1){
vuelto.forEach(elemento => resultadoCerrado.push(elemento));
  displayChangeDue.innerHTML=resultadoCerrado.join(" ")
  return
    }
  vuelto.forEach(elemento => resultado.push(elemento));
  displayChangeDue.innerHTML=resultado.join(" ")
};//cierro la función

//EVENTO AL APRETAR COMPRAR
purchaseBtn.addEventListener("click",()=>{

alcanza()
})

//PRECIO TOTAL DE LOS PRODUCTOS COMPRADOS
priceScreen.textContent = `Total: $${price}`;

//CAMBIO TOTAL EN LA CAJA
  cashDrawerDisplay.innerHTML = `<p><strong>Cambio en la caja:</strong></p>
  <p>${cid[0][0]}: $${cid[0][1]}</p>
  <p>${cid[1][0]}: $${cid[1][1]}</p>
  <p>${cid[2][0]}: $${cid[2][1]}</p>
  <p>${cid[3][0]}: $${cid[3][1]}</p>
  <p>${cid[4][0]}: $${cid[4][1]}</p>
  <p>${cid[5][0]}: $${cid[5][1]}</p>
  <p>${cid[6][0]}: $${cid[6][1]}</p>
  <p>${cid[7][0]}: $${cid[7][1]}</p>
  <p>${cid[8][0]}: $${cid[8][1]}</p>
  `;
