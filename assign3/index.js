/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Tun Aung Thaung
 * Email: thaungt@oregonstate.edu
 */

//reveal modal
var sellButton = document.querySelector("#sell-something-button");
sellButton.addEventListener("click", function() {
  document.getElementById("sell-something-modal").classList.remove("hidden");
  document.getElementById("modal-backdrop").classList.remove("hidden");
  var option = document.getElementsByName("post-condition");
  for (var i = 0; i < option.length; i++){
    if(option[i].checked == true)
      option[i].checked = false;
  }
});

//reset modal values
function closemodal() {
  document.getElementById("post-text-input").value = "";
  document.getElementById("post-photo-input").value = "";
  document.getElementById("post-price-input").value = "";
  document.getElementById("post-city-input").value = "";
  document.getElementById("sell-something-modal").classList.add("hidden");
  document.getElementById("modal-backdrop").classList.add("hidden");
}

//close the selected id
var crossButton = document.querySelector("#modal-close");
var cancelButton = document.querySelector("#modal-cancel");
crossButton.addEventListener("click", closemodal);
cancelButton.addEventListener("click", closemodal);

//CreatePostButton
var createPostButton = document.querySelector("#modal-accept");
createPostButton.addEventListener("click",createItem);

function conditionbox(condition) {
  var conditions = [];
  var check = document.getElementsByName(condition);
  for (var i = 0; i < check.length; ++i){
    if (check[i].checked == true) 
      conditions.push(check[i].value);
  }
  return conditions;
}

function textinputcheck() {
  var textinput = document.querySelectorAll(".modal-body input");
  for (var i = 0; i < textinput.length; i++) {
    if (textinput[i].value == "") {
      alert("You forgot to fill at least one of the required field.");
      return true;
    }
  }
  return false;
}

function conditioncheck() {
  var check = document.getElementsByName("post-condition");
  for (var i = 0; i < check.length; i++){
    if (check[i].checked == true) {
      return false;
    } 
  }
  alert("You forgot to add the condition of your item.");
  return true;
}

function createItem() {
  var maindiv = document.createElement("div");
  var dataPrice = document.getElementById("post-price-input").value;
  var dataCity = document.getElementById("post-city-input").value;
  var dataCondition = conditionbox("post-condition");

  maindiv.classList.add("post");
  maindiv.dataset.dataPrice = dataPrice;
  maindiv.dataset.dataCity = dataCity;
  maindiv.dataset.dataCondition = dataCondition;

  var div1 = document.createElement("div");
  div1.classList.add("post-contents");
  maindiv.appendChild(div1);

  var div2 = document.createElement("div");
  div2.classList.add("post-image-container");
  div1.appendChild(div2);

  var img = document.createElement("img");
  var URL = document.getElementById("post-photo-input").value;
  var title = document.getElementById("post-text-input").value;
  img.src = URL;
  img.alt = title;
  div2.appendChild(img);

  var div3 = document.createElement("div");
  div3.classList.add("post-info-container");
  div1.appendChild(div3);

  var externalsource = document.createElement("a");
  externalsource.href = "#";
  externalsource.classList.add("post-title");
  externalsource.textContent = title;
  div3.appendChild(externalsource);

  var span1 = document.createElement("span");
  span1.classList.add("post-price");
  span1.textContent = "$" + dataPrice;
  div3.appendChild(span1);

  var span2 = document.createElement("span");
  span2.classList.add("post-city");
  span2.textContent = "(" + dataCity + ")";
  div3.appendChild(span2);

  if (!textinputcheck() && !conditioncheck()) {
    document.getElementById("posts").appendChild(maindiv);
  }
}

//hide post
function hidePost(a,b){
  document.getElementById("posts").removeChild(a[b]);
}

//filter text

//filter min price

//filter max price

//filter city

//filter condition



//Create update button
var updateButton = document.querySelector("#filter-update-button");
updateButton.addEventListener("click", function(event) {
  var inputText = document.getElementById("filter-text").value;
  var inputMinPrice = document.getElementById("filter-min-price").value;
  var inputMaxPrice = document.getElementById("filter-max-price").value;
  var inputCity = document.getElementsById("filter-city").value;
  var inputCondition = conditionbox("filter-condition");
});