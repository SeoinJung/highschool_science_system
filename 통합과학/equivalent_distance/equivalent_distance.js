const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Time = document.getElementById("userTime").value;
  var Velocity = document.getElementById("velocity").value;
  var result = parseInt(Velocity) * parseInt(Time);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "이동 거리 : " + result + "m";
});
