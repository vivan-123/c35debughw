class Food
{
    constructor()
    {
        this.lastfed;
        this.foodstock;
    }

    getFoodStock()
    {        
        var foodref = database.ref("food");
        foodref.on("value", readpos, errorpos);

        var foodstockref = database.ref("foodstock");
        foodstockref.on("value", readpos2, errorpos);

        database.ref("/").set({ foodstock : 50,
        food : 0 }) 

        function readpos(data) {
            food = data.val();
            console.log("food = "+food)
          }
          
          
          function readpos2(data) {
            foodstock = data.val();  
          }
          
          function errorpos() {
            console.log("crashedddd!!!!")
          }
    }

    updateFoodStock()
    {
        if(keyDown(DOWN_ARROW))
        { 
            database.ref("/").update({ foodstock : foodstock + 1,
            food : food })
            doggo.changeImage("doggoanimation", dog)
        } 
    }

    deductFoodStock()
    {
        if(keyDown(UP_ARROW))
        { 
            doggo.changeImage("happydoganimation",happydog) 
            database.ref("/").update({ food : food + 1,
            foodstock : foodstock -1 }) 
        }
    }
}