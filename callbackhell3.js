/**FUNCTION DEFINITIONS**/
function getCakeIngredients(msg, callback){
  console.log("1 - " + msg);
  callback();
}

function mixCakeBase(msg, callback){
  console.log("2 - " + msg);
  callback();
}

function bakeCakeBase(msg, callback){
  console.log("3 - " + msg);
  callback();
}

function decorateCake(msg, callback){
  console.log("4 - " + msg);
  callback();
}

/**FUNCTION CALLS**/
getCakeIngredients("Gathering cake ingredients!", function(){
	mixCakeBase("Mixing cake base!", function(){
  	bakeCakeBase("Baking cake base in the oven!", function(){
    	decorateCake("Decorating cake!", function(){
      	console.log("5 - Cake is done!");
      })
    });
  });
});
	
/*
getCakeIngredients(
  mixCakeBase(
    bakeCakeBase(
      decorateCake(
        function(){console.log("5 - Cake is done!");}
      )
    )
  )
);*/
//The above line is NOT callback hell. It produces errors saying, "callback is not a function."
