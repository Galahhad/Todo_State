const listArray = [];

const render = (array) => {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  array.forEach((item, index) => {
    const caseInfo = document.createElement("div");
    caseInfo.classList.add("case_info");

    const time = document.createElement("div");
    time.classList.add("time");

    const todayTime = document.createElement("div");
    todayTime.classList = "today_time";

    const container = document.createElement("label");
    container.classList.add("container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        caseInfo.style.opacity = ".3";
        textInfo.style.textDecoration = "line-through";
        time.textContent = new Date().toISOString().split("T")[0];
        todayTime.textContent = new Date().toLocaleTimeString().slice(0, -3);
        checkTodo(index);
      } else {
        caseInfo.style.opacity = "1";
        textInfo.style.textDecoration = "none";
        checkTodo(index);
        time.textContent = "";
        todayTime.textContent = "";
      }
    });
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");

    const textInfo = document.createElement("div");
    textInfo.classList.add("text_info");
    textInfo.textContent = item.text;

    if (item.done) {
      checkbox.checked = "checked";
      caseInfo.style.opacity = ".3";
      textInfo.style.textDecoration = "line-through";
      time.textContent = new Date().toISOString().split("T")[0];
      todayTime.textContent = new Date().toLocaleTimeString().slice(0, -3);
    } else {
      checkbox.checked;
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete_button");
    deleteButton.addEventListener("click", () => {
      remove(index);
    });

    list.prepend(caseInfo);
    caseInfo.append(container, textInfo, time, todayTime, deleteButton);
    container.append(checkbox, checkmark);
  });
};

render(listArray);

const remove = (number) => {
  listArray.filter((item, index) => {
    if (index === number) {
      listArray.splice(index, 1);
    }
  });
  render(listArray);
};

const addTodo = (text) => {
  listArray.push({ text, done: false });
  render(listArray);
};

const checkTodo = (number) => {
  if (listArray[number].done) {
    listArray[number].done = false;
  } else {
    listArray[number].done = true;
  }
};

const supreme = document.querySelector(".supreme");
supreme.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".input");
  if (input.value.startsWith(" ")) {
    input.value = "";
  } else {
    addTodo(input.value);
  }
  input.value = "";
});
