const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Time = document.getElementById("time").value;
  var firstVelocity = document.getElementById("firstVelocity").value;
  var laterVelocity = document.getElementById("laterVelocity").value;
  var result = (parseInt(laterVelocity) - parseInt(firstVelocity)) / parseInt(Time);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "가속도 : " + result + "m/s2";
});
