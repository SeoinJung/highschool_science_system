const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var userTime = document.getElementById("userTime").value;
  var userSpace = document.getElementById("userSpace").value;
  var result = parseInt(userSpace) / parseInt(userTime);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "속도 : " + result + "m/s";
});
