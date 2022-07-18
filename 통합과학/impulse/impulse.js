const btnResult = document.querySelector(".resultbutton");

btnResult.addEventListener("click", () => {
  var Time = document.getElementById("time").value;
  var Force = document.getElementById("force").value;
  var result = parseInt(Force) * parseInt(Time);
  //   console.log(쉿);
  //   Result.innerHTML = `${problemNo + 1}. ${problemList[problemNo]}`;
  document.getElementById("result").innerHTML = "충격량 : " + result + "N*s";
});
