posSearch = function(msg, engLexicon)
{
  var posQ = "What is the POS of the word ";
  var posSearchResults = "";

  if(msg.indexOf(posQ)>-1)
  {
    var targetWord = "";
    var startPos = posQ.length;
    var endPos;
    if(msg.indexOf("?")>-1)
    {
      endPos = msg.indexof("?");
    }
    else
      {
        endPos = msg.length;
      }

      targetWord = msg.substring(startPos, endPos);
      console.log(targetWord);
      var wordInfo = engLexicon.findOne({Word: targetWord});

      if( wordInfo !== undefined )
      {
        if( wordInfo.POS.indexOf("ad")===0 )
        {
          posSearchResults = "It's an " + wordInfo.POS;
        }
        else
        {
          posSearchResults = "It's a " + wordInfo.POS;
        }
      }
      else
      {
        posSearchResults = "Sorry, i can't find it. ";
      }
  }

  console.log(posSearchResults);
  return posSearchResults;
}
