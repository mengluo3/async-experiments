/**FUNCTION DEFINITIONS**/
function getCakeIngredients(callback){
  console.log("1 - Gathering cake ingredients!");
  callback();
}

function mixCakeBase(callback){
  console.log("2 - Mixing cake base!");
  callback();
}

function bakeCakeBase(callback){
  console.log("3 - Baking cake base in the oven!");
  callback();
}

function decorateCake(callback){
  console.log("4 - Decorating cake!");
  callback();
}

/**FUNCTION CALLS**/
getCakeIngredients(function(){
	mixCakeBase(function(){
  	bakeCakeBase(function(){
    	decorateCake(function(){
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
