let $ = document;
let search_container = document.querySelector(".search-input");
let results_box = document.querySelector(".autocom-box");
let input_box = $.getElementById("search-box");
let flag = false;
function removal() {
  search_container.classList.remove("active");
  results_box.innerHTML = "";
}
input_box.addEventListener("keyup", () => {
  if (input_box.value) {
    let results = suggestions.filter((item) => {
      return item.includes(input_box.value.charAt(0).toUpperCase());
    });     
      results_box.innerHTML = "";
      results.map((item) => {
        let liElem = document.createElement("li");
        liElem.setAttribute("class", "results");
        liElem.innerHTML = item;
        console.log(liElem);
        results_box.append(liElem);
        liElem.addEventListener("click", (e) => {
          input_box.value = e.target.innerHTML;
          removal();
        });
      });
      search_container.classList.add("active");
    
  } else {
    removal();
  }
});
