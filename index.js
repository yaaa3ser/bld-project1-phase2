let coursesDiv = document.querySelector(".courses");
let myCourses = [];

let python = document.querySelector(".py");
let excel = document.querySelector(".ex");
let web = document.querySelector(".web");
let data = document.querySelector(".data");
let aws = document.querySelector(".aws");
let java = document.querySelector(".java");
let all = document.querySelectorAll(".click");
console.log(all);
python.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    all[i].style.color = "gray";
  }
  python.style.color = "black";
  coursesDiv.innerHTML = "";
  for (let j = 0; j < myCourses[0]["courses"].length; j++) {
    makeCourses(myCourses[0]["courses"][j]);
  }
});
excel.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    all[i].style.color = "gray";
  }
  excel.style.color = "black";
  coursesDiv.innerHTML = "";
  for (let j = 0; j < myCourses[1]["courses"].length; j++) {
    makeCourses(myCourses[1]["courses"][j]);
  }
});
web.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    all[i].style.color = "gray";
  }
  web.style.color = "black";
  coursesDiv.innerHTML = "";
  for (let j = 0; j < myCourses[2]["courses"].length; j++) {
    makeCourses(myCourses[2]["courses"][j]);
  }
});
data.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    all[i].style.color = "gray";
  }
  data.style.color = "black";
  coursesDiv.innerHTML = "";
  for (let j = 0; j < myCourses[4]["courses"].length; j++) {
    makeCourses(myCourses[4]["courses"][j]);
  }
});
aws.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    all[i].style.color = "gray";
  }
  aws.style.color = "black";
  coursesDiv.innerHTML = "";
  for (let j = 0; j < myCourses[5]["courses"].length; j++) {
    makeCourses(myCourses[5]["courses"][j]);
  }
});
java.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    all[i].style.color = "gray";
  }
  java.style.color = "black";
  coursesDiv.innerHTML = "";
  for (let j = 0; j < myCourses[3]["courses"].length; j++) {
    makeCourses(myCourses[3]["courses"][j]);
  }
});

let searchText = document.querySelector("#srch");

searchText.addEventListener("keyup", function () {
  let cs = [];
  cs = filter(searchText.value);
  coursesDiv.innerHTML = "";
  for (let i = 0; i < cs.length; i++) {
    makeCourses(cs[i]);
  }
});

function filter(searchText) {
  let filtered = [];
  for (let i = 0; i < myCourses.length; i++) {
    for (let j = 0; j < myCourses[i]["courses"].length; j++) {
      if (
        myCourses[i]["courses"][j]["title"]
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) !== -1
      ) {
        filtered.push(myCourses[i]["courses"][j]);
      }
    }
  }
  return filtered;
}

fetch("courses2.json")
  .then((response) => {
    return response.json();
  })
  .then((arr) => {
    myCourses = arr;

    for (let j = 0; j < arr[0]["courses"].length; j++) {
      makeCourses(arr[0]["courses"][j]);
    }
  });

function makeCourses(course) {
  let oneCourseDiv = document.createElement("div");
  oneCourseDiv.classList.add("myCourse");

  let coursePhoto = document.createElement("img");
  coursePhoto.classList.add("photo");
  coursePhoto.setAttribute("src", course["image"]);

  let courseHead = document.createElement("h4");
  courseHead.classList.add("hd");
  courseHead.innerText = course["title"];

  let courseParag = document.createElement("p");
  courseParag.classList.add("author");
  courseParag.innerText = course["author"][0]["name"];

  let courseRate = document.createElement("div");
  courseRate.classList.add("rate");
  courseRate.innerText = Math.round(course["rating"] * 10) / 10;

  let starsArr = [];
  for (let i = 1; i <= Math.round(course["rating"]); i++) {
    starsArr[i] = document.createElement("i");
    starsArr[i].classList.add("fa-solid", "fa-star");
  }

  let coursePrice = document.createElement("h4");
  coursePrice.classList.add("price");
  coursePrice.innerText = course["price"] + " E£";
  //===========================================
  oneCourseDiv.appendChild(coursePhoto);
  oneCourseDiv.appendChild(courseHead);
  oneCourseDiv.appendChild(courseParag);
  for (let i = 1; i <= Math.round(course["rating"]); i++) {
    courseRate.appendChild(starsArr[i]);
  }
  oneCourseDiv.appendChild(courseRate);
  oneCourseDiv.appendChild(coursePrice);

  coursesDiv.appendChild(oneCourseDiv);
}
