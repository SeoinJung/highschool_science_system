const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Force = document.getElementById("force").value;
  var Mass = document.getElementById("mass").value;
  var result = parseInt(Force) / parseInt(Mass);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "가속도 : " + result + "m/s2";
});
