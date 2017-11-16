var commonGreetings =
  [
   "Hello" , "What's up" , "Con-ni-chi-wa"
  ];

var commonFarewells =
  [
    "Bye" , "bb" , "See ya"
  ];

socialResponse = function(msg){
  var responseType = "";
  var upperCaseMsg = msg.toUpperCase();

for(index=0; index<commonGreetings.length ; index++ )
  {
    var greetings = commonGreetings[index].toUpperCase();
    if(upperCaseMsg.indexOf(greetings)>-1)
    {
      responseType = "greetings";
      break;
    }
  }

for(index=0; index<commonFarewells.length ; index++ )
    {
      var farewells = commonFarewells[index].toUpperCase();
      if(upperCaseMsg.indexOf(farewells)>-1)
      {
        responseType = "farewells";
        break;
      }
    }

    if(responseType ==="greetings" )
    {
      return "Hi, nice to meet you."
    }
    else if(responseType ==="farewells" )
    {
      return "See ya"
    }
    else
    {
      return"";
    }
} ;
