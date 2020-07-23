/**FUNCTION DEFINITIONS**/
function getCakeIngredients(msg){
  console.log("1 - " + msg);
  return new Promise(function(resolve, reject){
    if(msg = "Gathering cake ingredients!")
      resolve();
    else
      reject(new Error("Incorrect message"));
  });
}

function mixCakeBase(msg){
  console.log("2 - " + msg);
  return new Promise(function(resolve, reject){
    if(msg = "Mixing cake base!")
      resolve();
    else
      reject(new Error("Incorrect message"));
  });
}


function bakeCakeBase(msg){
  console.log("3 - " + msg);
  return new Promise(function(resolve, reject){
    if(msg = "Baking cake base in the oven!")
      resolve();
    else
      reject(new Error("Incorrect message"));
  });
}


function decorateCake(msg){
  console.log("4 - " + msg);
  return new Promise(function(resolve, reject){
    if(msg = "Decorating cake!")
      resolve();
    else
      reject(new Error("Incorrect message"));
  });
}


async function bakeCake(){
  await getCakeIngredients("Gathering cake ingredients!");
  await mixCakeBase("Mixing cake base!");
  await bakeCakeBase("Baking cake base in the oven!");
  await decorateCake("Decorating cake!"); 
}

/**FUNCTION CALLS**/
bakeCake()
  .then(function () {
          console.log("5 - Cake is done!");
        })
  .catch(function (error) {
          console.log(error.message);
        });








/*
getCakeIngredients("Gathering cake ingredients!", function(){
	mixCakeBase("Mixing cake base!", function(){
  	bakeCakeBase("Baking cake base in the oven!", function(){
    	decorateCake("Decorating cake!", function(){
      	console.log("5 - Cake is done!");
      })
    });
  });
});
	
*/


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
