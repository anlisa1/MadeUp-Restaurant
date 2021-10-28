let point=0;
let totalCost = 0;
$(".redeem").hide();


$(".add").click(function(){
    let foodChoice = $(".food").val();
    if ((foodChoice === "Peking Duck")||(foodChoice === "Honey Sesame Chicken")||(foodChoice === "Sweet And Sour Pork")||(foodChoice === "Dumplings")||(foodChoice === "Gong Bao Chicken")||(foodChoice === "Chow Mein")||(foodChoice === "Fried Rice")||(foodChoice === "Spring Rolls")||(foodChoice === "Ma Po Tofu")||(foodChoice === "Congee")||(foodChoice === "Hong Shao Shi Zi Tou")||(foodChoice === "Wontons")||(foodChoice === "Sichuan Boiled Fish")||(foodChoice === "Dim Sum")||(foodChoice === "Mooncake")||(foodChoice === "Char Siu Pork"))
    {
    	let amount = $(".number").val();
        point = point + parseInt(amount);
        let cost=parseInt(amount)*10.99;
        totalCost=totalCost+cost;
        $(".total").text("Expected Cost = $" + totalCost);
        $(".items").append("<p>" + amount + " " + foodChoice + "</p>");

    }
    if((foodChoice === "Fried Tofu")||(foodChoice === "Fried Taro")||(foodChoice === "French Fries")||(foodChoice === "Curly Fries")||(foodChoice === "Curry Fish Balls")||(foodChoice === "Popcorn Chicken"))
    {
        let amount = $(".number").val();
        point = point + parseInt(amount);
        let cost=parseInt(amount)*5.99;
        totalCost=totalCost + cost;
        $(".total").text("Expected Cost = $" + totalCost);
        $(".items").append("<p>" + amount + " " + foodChoice + "</p>");
    }
});

$(".checkout").click(function(){
    $(".redeem").show();
    $(".checkout").hide();
    $(".order").hide();
    $(".receiptCart").text("Receipt ");
    if (point<3){
        point = 0;
    }
    else{
    	point = point-2;
    }
    $(".p").text("Current Points = " + point);
    $(".total").text("Total Cost = $" + totalCost);
});

$(".clear").click(function(){
    $(".redeem").hide();
    $(".checkout").show();
    $(".order").show();
    $(".receiptCart").text("Cart");
    point = 0;
    totalCost=0;
    $(".p").text("Current Points = " + point);
    $(".total").text("Total Cost = $" + totalCost);
    $(".items").text("");
});

$(".redeem").click(function(){
    if (point>3){
    point = point-3;
    $(".items").append("<h6>"+"1 bucket of rice"+"</h6>");
    $(".p").text("Current Points = " + point);
    }
});