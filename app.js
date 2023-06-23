let bookModule = (function () {
  let myLibrary = [];
  const wrapper = document.querySelector(".wrapper");
  function addBook(Title, Author, NumberOfPages, Readed) {
    let obj = {};
    obj.id = myLibrary.length;
    obj.Title = Title;
    obj.Author = Author;
    obj.NumberOfPages = NumberOfPages;
    obj.Readed = Readed;
    if (!(Title || Author || NumberOfPages || Readed)) {
      console.log("define things properly");
    } else {
      myLibrary.push(obj);
      let card = document.createElement("div");
      card.classList.toggle("card");
      card.setAttribute("id", `${obj.id}`);
      card.textContent = `Title: ${obj.Title}\r\n Author: ${obj.Author}\r\n Number of Pages: ${obj.NumberOfPages}\r\n Readed: ${obj.Readed}\r\n`;
      let remove = document.createElement("button");
      remove.addEventListener("click", () => {
        // removes the card which it stays on
        card.remove();
        //remove the object from the array
      });
      remove.textContent = "Remove";
      remove.classList.toggle("remove");
      card.appendChild(remove);
      wrapper.appendChild(card);
    }
  }
  function library() {
    return myLibrary;
  }
  return { addBook, library };
})();

// codes for form working
//for radio button
let selected = "Yes!";
let option1 = document.querySelector("#Readed");
let option2 = document.querySelector("#Notreaded");
function manageoption(event) {
  selected = event.target.value;
}
option1.addEventListener("change", manageoption);
option2.addEventListener("change", manageoption);

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const number = document.querySelector("#numberofpages");
let submission = document.querySelector("#submit");

submission.addEventListener("click", (event) => {
    event.preventDefault();
  if (!(title.value && author.value && number.value)) {
    // do nothing
  }else{
    bookModule.addBook(title.value, author.value, number.value, selected);
  }
});
