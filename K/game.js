x=0;
$(document).ready(function(){
    function loop(){
        $("#car1").css({top:0});
        $("#car1").animate({"top":"110%"},2000,"linear",function(){
            
            loop();});
        }
        loop();
});
$(document).ready(function(){
    function loop(){
         $("#car2").css({top:0});
        $("#car2").animate({"top":"110%"},4000,"linear",function(){

                loop();});
            }
        loop();
});
$(document).ready(function(){
    function loop(){
        $("#car3").css({top:0});
        $("#car3").animate({"top":"110%"},2500,"linear",function(){
            x++; loop();});
            }
        loop(); 
});
$(document).ready(function(){
    function loop(){
         $("#car4").css({top:0});
         $("#car4").animate({"top":"110%"},3000,"linear",function(){
                loop();});
            }
        loop();   
 });
 $(document).ready(function(){
    function loop(){
         $("#car5").css({top:0});
         $("#car5").animate({"top":"100%"},4500,"linear",function(){
                loop();});
            }
        loop();   
 });
//  var b=600;
$(document).ready(function(){
$(document).keydown(function(e){
    console.log("fgh");
    var a=e.keyCode;
    var pos = $("#player").position();
    console.log(pos);
    if(a== 39){
        
        if(pos.left+50<1000){
            var b = pos.left+50;
            console.log("fgh");
           //$("#player").animate({"right":"0px"},100) ;
           $("#player").animate({"left":b+"px"},100) ;

        }
        
    }
    if(a == 37){
        if(pos.left>310){
            var b = pos.left - 50;
            console.log("fgh");
            // $("#player").animate({"right":"710px"},100) ;
            $("#player").animate({"left":b+"px"},100);
        }
        
    }
 })
  setInterval(function(){
      var p=$("#player").position();
      var o=$("#car1").position();
      if((p.left+40>=o.left && p.left+40<=o.left+80 )&&(p.top+60>=o.top&&p.top+0<=o.top+120)){
        var y=x;
        x=0;
        if(y==0)
         alert("0");
        alert("score is :"+(y-1));
      }
    },100)
    setInterval(function(){
        var p=$("#player").position();
        var o=$("#car2").position();
        if((p.left+40>=o.left && p.left+40<=o.left+80)&&(p.top+60>=o.top&& p.top+60<=o.top+120)){
            var y=x;
            x=0;
            if(y==0)
             alert("0");
            alert(y-1);
        }
      },100)
    setInterval(function(){
        var p=$("#player").position();
        var o=$("#car3").position();
        if((p.left+40>=o.left && p.left+40<=o.left+80 )&&(p.top+60>=o.top && p.top+60<=o.top+120)){
            var y=x;
            x=0;
            if(y==0)
             alert("0");
            alert(y-1);
        }





      },100)
     setInterval(function(){
        var p=$("#player").position();
        var o=$("#car4").position();
        if((p.left+40>=o.left && p.left+40<=o.left+80 )&&(p.top+60>=o.top && p.top+60<=o.top+120)){
            
            var y=x;
            x=0;
            if(y==0)
             alert("0");
            alert(y-1);
        }
      },100)
      setInterval(function(){
        var p=$("#player").position();
        var o=$("#car5").position();
        if((p.left+40>=o.left && p.left+40<=o.left+80 )&&(p.top+60>=o.top && p.top+60<=o.top+120)){

            var y=x;
            x=0;
            if(y==0)
             alert("0");
            alert(y-1);
        }
      },100)
     /* setInterval(function(){
          console.log("hjgf");
        var p=$("#player").position();
        var o=$("#car1").position();
        if(((p.left>o.left && p.left<=o.left+100 )&&(p.top>=o.top && p.top<=o.top+100))||((p.left+100<o.left+100 && p.left+100>=o.left)&&(p.top>=o.top && p.top<=o.top+100))||(p.left+40>o.left&&p.left+50<4.left+100&8.top>=o.top 6& p.top<=o.top+100)){
            alert("Fail");
        }
      },100)*/
  
  
  
});   