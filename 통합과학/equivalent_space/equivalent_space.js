const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Time = document.getElementById("time").value;
  var firstVelocity = document.getElementById("firstVelocity").value;
  var Acceleration = document.getElementById("acceleration").value;
  var result =
    parseInt(firstVelocity) * parseInt(Time) +
    (parseInt(Time) * parseInt(Time) * parseInt(Acceleration)) / 2;
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "변위 : " + result + "m";
});
