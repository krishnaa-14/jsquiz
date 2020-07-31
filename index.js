

var userName="";


function signIn_submit() {

  var name=document.getElementById("yourName").value;
  userName=name;
  if(name=="") {
    alert("Please enter your name");
  }
}


$("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});


for(var p=0;p<10;p++) {

  document.getElementsByClassName("hidden-button")[p].style.visibility="hidden";

}



function marksShow() {

  alert("Do you want to submit your answers for correction ?")

  var marks=0;


  var answers=["option1","option2","option1","option3","option2","option4","option3","option2","option4","option2"];


  var correctAnswerCount=0;
  var wrongAnswerCount=0;
  var notAttemptedCount=0;


  for(var i=1;i<=10;i++) {

    var ele=document.getElementsByName('question'+i);

    var qanswer=answers[i-1];

    var found=0;

    for(var j=0;j<ele.length;j++) {
      if(ele[j].checked && ele[j].value==qanswer) {
        found=1;
        correctAnswerCount++;
        var boxId="box"+i;
        document.getElementById(boxId).style.backgroundColor="#649d66";
        document.getElementsByClassName("hidden-button")[i-1].style.visibility="visible";
        document.getElementsByClassName("hidden-button")[i-1].style.backgroundColor="#649d66";
        document.getElementsByClassName("hidden-button")[i-1].innerHTML="Correct Answer";
        marks+=5;
      }
      else if(ele[j].checked && ele[j].value!=qanswer){
        found=1;
        wrongAnswerCount++;
        var boxId="box"+i;
        document.getElementById(boxId).style.backgroundColor="#d63447";
        document.getElementsByClassName("hidden-button")[i-1].style.visibility="visible";
        document.getElementsByClassName("hidden-button")[i-1].style.backgroundColor="#d63447";
        document.getElementsByClassName("hidden-button")[i-1].innerHTML="Wrong Answer";
      }

    }

    if(found==0) {
      notAttemptedCount++;
      var boxId="box"+i;
      document.getElementById(boxId).style.backgroundColor="#d1cebd";
      document.getElementsByClassName("hidden-button")[i-1].style.visibility="visible";
      document.getElementsByClassName("hidden-button")[i-1].style.backgroundColor="#d1cebd";
      document.getElementsByClassName("hidden-button")[i-1].innerHTML="Not Attempted";
    }
  }

  document.getElementById("demo").innerHTML="Hey "+ userName +" Your score is " + marks;
  document.getElementById("correct").innerHTML="Number of correct answers : " + correctAnswerCount;
  document.getElementById("wrong").innerHTML="Number of wrong answers : "  + wrongAnswerCount;
  document.getElementById("notattempt").innerHTML="Number of not attempted questions : " + notAttemptedCount;

}
