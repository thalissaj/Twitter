var submit = document.querySelector("button[type=submit]");
var textAreaTweet = document.getElementById("text-area"); //endereço do textarea
var button = document.getElementById("tweetar");

submit.onclick = function buttonFunc(event){
  var inputTweet = document.getElementById("text-area");
  var conteinerPublish = document.getElementById("newTweet-conteiner");
  var newDiv = document.createElement("div");
  newDiv.className = "newTweet";
  newDiv.textContent = inputTweet.value;
  var time = document.createElement('p');
  time.textContent = getTime();
  if(inputTweet.value === "" || inputTweet.value.length > 140){
    button.disabled = "true";
  } else {
    conteinerPublish.appendChild(newDiv);
    conteinerPublish.appendChild(time);
  }
  event.preventDefault();
};

textAreaTweet.addEventListener('keyup', function() {
  var caracteres = textAreaTweet.value.length;
  if (caracteres > 140) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

textAreaTweet.addEventListener('keyup', function() {
  var caracteres = textAreaTweet.value.length;
  var count = document.getElementById("counter");
  count.textContent = 140 - parseInt(caracteres);
  if (caracteres > 120 && caracteres <= 130){
    count.className = "orange";
  } else if (caracteres > 130) {
    count.className = "red";
  } else {
    count.className = "normal";
  }
  textAreaTweet.style.height = textAreaTweet.scrollHeight + 'px';
});

var getTime = function(){
  var getDate = new Date();
  var time = getDate.getHours() + ':' + getDate.getMinutes();
  var timeNow = '';
  if (getDate.getHours() <= 12) {
    timeNow = time + ' AM';
  } else {
    timeNow = time + ' PM';
  }
  return timeNow;
}
