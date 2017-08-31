var progress = balance($("#category1").val(), $("#category2").val(), $("#category3").val(), $("#category4").val(), $("#totaal").val())

//20

progress = String(progress) + "%"

//"20%"

$(".progress").css("width", progress)



function balance(huur, gas, water, licht, totaal) {
    return ((huur + gas + water + licht)/totaal) * 100
}






function lef (budget, spent, purchase) {
return (budget- (spent + purchase)

}