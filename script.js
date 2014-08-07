//Trade constructor
function Trade(name, costPerUnit){
  this.name = name;
  this.costPerUnit = costPerUnit;
}
  Trade.prototype.incomePerUnit = function(targConsumer){
    var roughIncPerUnit = targConsumer.pricePerUnit - this.costPerUnit;
    return roughIncPerUnit;
  };

//targetConsumer constructor
function targetConsumer(name, pricePerUnit){
  this.name = name;
  this.pricePerUnit = pricePerUnit;
}

//Gallery constructor
function Gallery(name, percentCommission, numSold){
  this.name = name;
  this.percentCommission = percentCommission;
  this.numSold = numSold;
}

  Gallery.prototype.yearIncome = function(trade, consumer){
    var monthInc = trade.incomePerUnit(consumer) * this.numSold;
    var commission = monthInc * this.percentCommission;
    var total = (monthInc - commission) * 12;
    $(".resultTotal").html("<span> $" + total +".00</span>");

  };


//Gallery instances
var michaelMitchell = new Gallery("Michael Mitchell", 0.3, 6);
var rebekahJacob = new Gallery("Rebekah Jacob Gallery", 0.4, 8);
var robertLange = new Gallery("Robert Lange Studios", 0.45, 10);
var gallArr = [michaelMitchell, rebekahJacob, robertLange];

//Trade instances
var painting = new Trade("Painting", 150);
var photog = new Trade("Photography", 100);
var sculpt = new Trade("Sculpture", 200);
var tradeArr = [painting, photog, sculpt];


//Target Consumer instances
var veryAccessible = new targetConsumer("Accessible", 350);
var moderate = new targetConsumer("Moderately Accessible", 700);
var exclusive = new targetConsumer("Exclusive", 1400);
var consArr = [veryAccessible, moderate, exclusive];


//////////////////////////////////////////////////////////////////
$(document).ready(function() {

//toggle image classes
  $(".images").on("click", "a", function(event) {
    event.preventDefault();
    // $(this).closest('li').siblings().toggleClass('hide');
    // $(this).toggleClass('checked');
  });

  // $("select .trade").on("click", "option", function(event){
  //   var choice = $(this).val();
  //   console.log(choice);
  // })


  $("form").on("submit", function(event){
    event.preventDefault();
      var tradeChosen = $(".trade").val();
      var consumerChosen = $(".consumer").val();
      var galleryChosen = $(".gallery").val();

      console.log(tradeChosen);
      console.log(consumerChosen);
      console.log(galleryChosen);



    var findFinalValue = function(tradeVal, consumerVal, galleryVal){

      var tradeValue;
      var consumerValue;
      var galleryValue;

      for (var i = 0; i < tradeArr.length; i++){
        if (tradeVal === tradeArr[i].name){
          tradeValue = tradeArr[i];
        }
      }
      for (var i = 0; i < consArr.length; i++){
        if (consumerVal === consArr[i].name){
          consumerValue = consArr[i];
        }
      }
      for (var i = 0; i < gallArr.length; i++){
        if (galleryVal === gallArr[i].name){
          galleryValue = gallArr[i];
        }
      }

      (galleryValue.yearIncome(tradeValue, consumerValue));
      $('form').append;

    };

    findFinalValue(tradeChosen, consumerChosen, galleryChosen);
    $('.results').removeClass('hide');

});



});
