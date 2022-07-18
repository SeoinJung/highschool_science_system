const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Mass = document.getElementById("mass").value;
  var Velocity = document.getElementById("velocity").value;
  var result = parseInt(Velocity) * parseInt(Mass);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "운동량 : " + result + "kg*m/s";
});
