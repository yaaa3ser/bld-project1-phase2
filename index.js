let coursesDiv = document.querySelector(".courses");
let myCourses = [];

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
    if (
      myCourses[i]["title"].toLowerCase().indexOf(searchText.toLowerCase()) !==
      -1
    ) {
      filtered.push(myCourses[i]);
    }
  }
  return filtered;
}

fetch("https://mocki.io/v1/291ee168-113c-41a2-8bbf-c0889fee8908")
  .then((response) => {
    return response.json();
  })
  .then((arr) => {
    myCourses = arr;
    for (let i = 0; i < arr.length; i++) {
      makeCourses(arr[i]);
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
  courseParag.innerText = course["author"];

  let courseRate = document.createElement("span");
  courseRate.classList.add("rate");
  courseRate.innerText = course["rating"];

  let starsArr = [];
  for (let i = 1; i <= 5; i++) {
    starsArr[i] = document.createElement("i");
    starsArr[i].classList.add("fa-solid", "fa-star");
  }

  let coursePrice = document.createElement("h4");
  coursePrice.classList.add("price");
  coursePrice.innerText = course["price"];
  //===========================================
  oneCourseDiv.appendChild(coursePhoto);
  oneCourseDiv.appendChild(courseHead);
  oneCourseDiv.appendChild(courseParag);
  oneCourseDiv.appendChild(courseRate);
  for (let i = 1; i <= 5; i++) {
    oneCourseDiv.appendChild(starsArr[i]);
  }
  oneCourseDiv.appendChild(coursePrice);

  coursesDiv.appendChild(oneCourseDiv);
}
