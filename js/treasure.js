function checkWin($element, $treasureCell)
{
    var winner = false;
    
    if ($element.attr('id') === $treasureCell)
    {
        winner = true;
    }
    return winner;
}

function createTreasure()
{
    var treasureList = [
        "topLeft", "topMiddle", "topRight",
        "middleLeft", "middleMiddle", "middleRight",
        "bottomLeft", "bottomMiddle", "bottomRight"
    ];
    
    var randomNum = Math.floor(Math.random()*8);
    
    return treasureList[randomNum]; // return the selected cell
    } 

$(document).ready(function(){
    
  var treasureCell = createTreasure();
  $('td').click(function(){
     
      if(checkWin($(this),treasureCell))
      {
          alert("Congratulations, you found the treasure!!");
      }
      else
      {
          alert("Close! Try again.");
      }
  });
  
});