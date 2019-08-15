function checkWin($element)
{
    var treasure = "topRight";
    var winner = false;
    
    if ($element.attr('id') === treasure)
    {
        winner = true;
    }
    return winner;
}

$(document).ready(function(){
    
  $('td').click(function(){
     
      if(checkWin($(this)))
      {
          alert("Congratulations, you found the treasure!!");
      }
      else
      {
          alert("Close! Try again.");
      }
  });
  
});