// Memory event handling 
document.getElementById('8gb-memory-button').addEventListener('click', function(){
    updatePrice('memory',0);
    calculateTotal();
})
document.getElementById('16gb-memory-button').addEventListener('click', function(){
    updatePrice('memory',180);
    calculateTotal();
})
// ssd event handling
document.getElementById('256gb-ssd-button').addEventListener('click', function(){
    updatePrice('storage',0);
    calculateTotal();
})
document.getElementById('512gb-ssd-button').addEventListener('click', function(){
    updatePrice('storage',100);
    calculateTotal();
})
document.getElementById('1tb-ssd-button').addEventListener('click', function(){
    updatePrice('storage',180);
    calculateTotal();
})
// delivery event handling
document.getElementById('free-delivery-button').addEventListener('click', function(){
    updatePrice('delivery',0);
    calculateTotal();
})

document.getElementById('paid-delivery-button').addEventListener('click', function(){
    updatePrice('delivery',20);
    calculateTotal();
})

//update cost function
function updatePrice(costId,cost){
    document.getElementById(costId+'-cost').innerText=cost;
}
// calculate total
function calculateTotal(){
    const bestPrice=parseInt(document.getElementById('best-price').innerText);
    const memoryCost=parseInt(document.getElementById('memory-cost').innerText);
    const storageCost=parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost=parseInt(document.getElementById('delivery-cost').innerText);
    const total=bestPrice+memoryCost+storageCost+deliveryCost;
    document.getElementById('total').innerText=total;
    document.getElementById('final-total').innerText=total;
}
// update final total after using promo

document.getElementById('promo-button').addEventListener('click',function(){
    const promoCode='stevekaku';
    const insertedPromo=document.getElementById('promo-input').value;
    if(insertedPromo===promoCode){
        let latestTotal=document.getElementById('final-total').innerText;
        latestTotal=latestTotal-(latestTotal*0.2);
        document.getElementById('final-total').innerText=latestTotal;
        document.getElementById('promo-input').value='';
        document.getElementById('promo-input').setAttribute('disabled', true);
        document.getElementById('promo-button').setAttribute('disabled', true);
        document.getElementById('promo-message').innerText="Promo Applied Successfully!!";
        document.getElementById('promo-message').style.color='green';
    }
    else{
        document.getElementById('promo-input').value='';
    }
})