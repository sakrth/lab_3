// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

window.onload = () => {

  // 💬 Message Display Box
  const messageBox = document.createElement("div");
  messageBox.id = "messageBox";
  messageBox.style.padding = "10px";
  messageBox.style.marginTop = "20px";
  messageBox.style.border = "2px solid #333";
  messageBox.style.backgroundColor = "#fff";
  messageBox.style.borderRadius = "8px";
  messageBox.innerText = "Messages will appear here...";
  document.body.appendChild(messageBox);

  // Helper function to display messages instead of alerts
  const showMessage = (msg) => {
    messageBox.innerText = msg;
  };

  // 🟩 PART 1: Selecting and Styling Elements (1–10)

  // 1️⃣ Change text color of heading with id="title" to red.
  document.getElementById("title").style.color = "red";

  // 2️⃣ Change background color of all <p> elements to lightgray.
  document.querySelectorAll("p").forEach(p => {
    p.style.backgroundColor = "lightgray";
  });

  // 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
  document.getElementById("title").innerText = "Welcome to the DOM Lab!";

  // 4️⃣ Add a solid black border to all <div> elements.
  document.querySelectorAll("div").forEach(div => {
    div.style.border = "2px solid black";
  });

  // 5️⃣ Increase font size of the first <h1> to 36px.
  document.querySelector("h1").style.fontSize = "36px";

  // 6️⃣ Change text color of elements with class="highlight" to blue.
  document.querySelectorAll(".highlight").forEach(el => {
    el.style.color = "blue";
  });

  // 7️⃣ Add CSS class "active" to the first <div>.
  document.querySelector("div").classList.add("active");

  // 8️⃣ Change the <body> background color to lightblue.
  document.body.style.backgroundColor = "lightblue";

  // 9️⃣ Set the font family of all <p> elements to Arial.
  document.querySelectorAll("p").forEach(p => {
    p.style.fontFamily = "Arial";
  });

  // 🔟 Change the image source of #sampleImage.
  document.getElementById("sampleImage").src = "https://via.placeholder.com/150";


  // 🟦 PART 2: Creating and Appending Elements (11–20)

  // 1️⃣1️⃣ Create a new <p> and append it to the <body>.
  const newParagraph = document.createElement("p");
  newParagraph.innerText = "This is a new paragraph.";
  document.body.appendChild(newParagraph);

  // 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
  const newListItem = document.createElement("li");
  newListItem.innerText = "New List Item";
  document.querySelector("ul").appendChild(newListItem);

  // 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
  const newButton = document.createElement("button");
  newButton.innerText = "Click Me!";
  document.querySelector("div").appendChild(newButton);

  // 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
  const newHeading = document.createElement("h2");
  newHeading.innerText = "Dynamically Created Heading";
  document.body.insertBefore(newHeading, document.querySelector("p"));

  // 1️⃣5️⃣ Create an image and set width and height.
  const newImage = document.createElement("img");
  newImage.src = "https://via.placeholder.com/100";
  newImage.style.width = "100px";
  newImage.style.height = "100px";
  document.body.appendChild(newImage);

  // 1️⃣6️⃣ Add 3 new <li> items using a loop.
  for (let i = 1; i <= 3; i++) {
    const newListItem = document.createElement("li");
    newListItem.innerText = "List Item " + i;
    document.querySelector("ul").appendChild(newListItem);
  }

  // 1️⃣7️⃣ Create a <div> with class "card" and text inside.
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerText = "This is a card.";
  document.body.appendChild(cardDiv);

  // 1️⃣8️⃣ Append a paragraph containing your name.
  const nameParagraph = document.createElement("p");
  nameParagraph.innerText = "Osama Shehadeh";
  document.body.appendChild(nameParagraph);

  // 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
  document.querySelectorAll("p").forEach(p => {
    const span = document.createElement("span");
    span.innerText = " [Edited]";
    p.appendChild(span);
  });

  // 2️⃣0️⃣ Remove the last child of <ul>.
  const ul = document.querySelector("ul");
  ul.removeChild(ul.lastChild);


  // 🟨 PART 3: Event Handling (21–30)

  // 2️⃣1️⃣ Add click event that shows an alert.
  document.querySelector("button").addEventListener("click", () => {
    showMessage("Button clicked!");
  });

  // 2️⃣2️⃣ Change background color of a <div> when clicked.
  document.querySelector("div").addEventListener("click", () => {
    document.querySelector("div").style.backgroundColor = "lightgreen";
    showMessage("Div background changed!");
  });

  // 2️⃣3️⃣ When hovering over <p>, make it bold.
  document.querySelectorAll("p").forEach(p => {
    p.addEventListener("mouseenter", () => {
      p.style.fontWeight = "bold";
    });
  });

  // 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
  document.querySelectorAll("p").forEach(p => {
    p.addEventListener("mouseleave", () => {
      p.style.fontWeight = "normal";
    });
  });

  // 2️⃣5️⃣ Add button to hide the image.
  const hideButton = document.createElement("button");
  hideButton.innerText = "Hide Image";
  document.body.appendChild(hideButton);
  hideButton.addEventListener("click", () => {
    document.getElementById("sampleImage").style.display = "none";
    showMessage("Image hidden!");
  });

  // 2️⃣6️⃣ Add button to show the image again.
  const showButton = document.createElement("button");
  showButton.innerText = "Show Image";
  document.body.appendChild(showButton);
  showButton.addEventListener("click", () => {
    document.getElementById("sampleImage").style.display = "block";
    showMessage("Image shown!");
  });

  // 2️⃣7️⃣ Create a counter button that increases with each click.
  let counter = 0;
  const counterButton = document.createElement("button");
  counterButton.innerText = "Click me!";
  document.body.appendChild(counterButton);
  counterButton.addEventListener("click", () => {
    counter++;
    showMessage("Button clicked " + counter + " times");
  });

  // 2️⃣8️⃣ Display entered text from an input when button clicked.
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Type something...";
  document.body.appendChild(textInput);
  const displayButton = document.createElement("button");
  displayButton.innerText = "Display Text";
  document.body.appendChild(displayButton);
  displayButton.addEventListener("click", () => {
    showMessage("Entered text: " + textInput.value);
  });

  // 2️⃣9️⃣ Change background color randomly when a button is clicked.
  const randomColorButton = document.createElement("button");
  randomColorButton.innerText = "Change Background Color";
  document.body.appendChild(randomColorButton);
  randomColorButton.addEventListener("click", () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
    showMessage("Background color changed to " + color);
  });

  // 3️⃣0️⃣ Display which key is pressed.
  document.addEventListener("keydown", (event) => {
    showMessage("Key pressed: " + event.key);
  });


  // 🟧 PART 4: Modifying and Traversing DOM (31–40)

  // 3️⃣1️⃣ Change text of the first <li>.
  const firstLi = document.querySelector("li");
  firstLi.innerText = "Updated text for the first list item.";

  // 3️⃣2️⃣ Get input value when button clicked.
  const inputButton = document.createElement("button");
  inputButton.innerText = "Get Input Value";
  document.body.appendChild(inputButton);
  inputButton.addEventListener("click", () => {
    showMessage("Input value: " + textInput.value);
  });

  // 3️⃣3️⃣ Count number of <p> and alert the count.
  const pCountButton = document.createElement("button");
  pCountButton.innerText = "Count Paragraphs";
  document.body.appendChild(pCountButton);
  pCountButton.addEventListener("click", () => {
    showMessage("Number of paragraphs: " + document.querySelectorAll("p").length);
  });

  // 3️⃣4️⃣ Remove all <p> elements.
  const removePButton = document.createElement("button");
  removePButton.innerText = "Remove All Paragraphs";
  document.body.appendChild(removePButton);
  removePButton.addEventListener("click", () => {
    document.querySelectorAll("p").forEach(p => p.remove());
    showMessage("All paragraphs removed!");
  });

  // 3️⃣5️⃣ Replace existing <h2> with new one.
  const newH2 = document.createElement("h2");
  newH2.innerText = "New Heading";
  document.querySelector("h2").replaceWith(newH2);

  // 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
  document.querySelectorAll("li").forEach(li => {
    li.classList.add("highlighted");
  });

  // 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
  document.querySelector("div").addEventListener("click", () => {
    document.querySelector("div").classList.toggle("highlighted");
    showMessage("Toggled highlight class on div!");
  });

  // 3️⃣8️⃣ Clone an existing element and append copy.
  const cloneButton = document.createElement("button");
  cloneButton.innerText = "Clone H2";
  document.body.appendChild(cloneButton);
  cloneButton.addEventListener("click", () => {
    const clone = newH2.cloneNode(true);
    document.body.appendChild(clone);
    showMessage("H2 cloned successfully!");
  });

  // 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
  const scrollButton = document.createElement("button");
  scrollButton.innerText = "Scroll to Bottom";
  document.body.appendChild(scrollButton);
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
    showMessage("Scrolled smoothly to bottom!");
  });

  // 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
  const items = ["Item 1", "Item 2", "Item 3"];
  const list = document.createElement("ul");
  list.innerHTML = items.map(item => `<li>${item}</li>`).join("");
  document.body.appendChild(list);
};
