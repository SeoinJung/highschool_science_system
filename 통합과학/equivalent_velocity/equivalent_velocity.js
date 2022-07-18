const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Time = document.getElementById("time").value;
  var Acceleration = document.getElementById("acceleration").value;
  var firstVelocity = document.getElementById("firstVelocity").value;
  var result = parseInt(firstVelocity) + parseInt(Acceleration) * parseInt(Time);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "나중 속도 : " + result + "m/s";
});
