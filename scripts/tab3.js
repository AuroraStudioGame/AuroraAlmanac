var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
}}}}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
document.getElementById('buttonAlert').onclick = function (event){
  alert("hello user");
}
document.getElementById('buttonConfirm').onclick = function (event){
  if(confirm("Are you sure?")){alert("yes you sure!");}else{alert("ok not");}
}
document.getElementById('buttonPrompt').onclick = function (event){
  var userName1 = prompt("what's your name son?");
  document.getElementById('promptName').value = userName1;
}
function btnClick(button){
  alert("event works. Button html name is " + button.name);
}
var count = 0;
function counter(element){
  count++;
  element.innerHTML="На эту строку наведено " +count+ " раз";
}
function valid(form){
  var fail = false;
  var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
  var Uname = form.elements.name.value;//document.getElementById('testFormName').value;
  var Umail = form.elements.email.value;
  var Upass = form.elements.password.value;
  var Urepass = form.elements.repassword.value;
  var Ugender = document.querySelector('input[name="state"]:checked').value;
  if(Uname=="") fail = "Enter valid name sir";
  else if(adr_pattern.test(Umail)==false) fail = "not valid email";
  else if(Upass=="") fail = "Enter valid password";
  else if(Urepass != Upass) fail = "Passwords are not equal";
  if(fail) alert(fail);
  else
    alert("hello "+Uname+" "+Ugender);
}
//onclick="valid(document.getElementById('form1'))"
var counter1 = 0;
function timer1(){
  counter1++;
  document.getElementById('testCount').innerHTML = counter1;
  setTimeout("timer1()", 1000);
}
//ajax
function funcBefore(){
  $("#information").text("Ожидание данных...");
}
function funcSuccess(data){
  $("#information").text(data);
}
/*
$(document.getElementById('ajaxTut')).ready(function(){
  $("#load").bind("click", function(){
    $.ajax({
      url: "contentForAjax.php",
      type: "POST",
      data: ({name: 'admin', number: 5}),
      dataType: "html",
      beforeSend: funcBefore,
      success: funcSuccess
    });
  });
});
$(document.getElementById('ajaxTut2')).ready(function(){
  $("select[name='country']").bind("change", function(){
    $.get("contentForAjax.php", {country: $("select[name='country']").val()}, function(data){
      data = JSON.parse(data);
      $("select[name='city']").empty();
      for(var id in data){
        $("select[name='city']").append($("<option value='" + id "'>" + data[id] + "</option>"));
      }
    });
  });
});
*/
