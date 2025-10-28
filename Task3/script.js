// document.addEventListener("DOMContentLoaded", () => {
//   // --- DOM Elements ---
//   const startScreen = document.getElementById("start-screen");
//   const gameScreen = document.getElementById("game-screen");
//   const endScreen = document.getElementById("end-screen");
//   const startButton = document.getElementById("start-button");
//   const playAgainButton = document.getElementById("play-again-button");
//   const platesContainer = document.getElementById("plates-container");
//   const basketContainer = document.getElementById("basket-container");
//   const successSound = document.getElementById("success-sound");
//   const failSound = document.getElementById("fail-sound");

//   // --- Game Data with Hotspot Coordinates ---
//   const vegetables = [
//     {
//       name: "Cauliflower",
//       img: "https://i.imgur.com/2mF1P0v.png",
//       hotspot: { top: "10%", left: "15%", width: "35%", height: "45%" },
//     },
//     {
//       name: "Brinjal",
//       img: "https://i.imgur.com/z4zG1jV.png",
//       hotspot: { top: "5%", left: "40%", width: "30%", height: "40%" },
//     },
//     {
//       name: "Potato",
//       img: "https://i.imgur.com/9v4J8lM.png",
//       hotspot: { top: "25%", left: "65%", width: "25%", height: "30%" },
//     },
//     {
//       name: "Carrot",
//       img: "https://i.imgur.com/0i9w4zb.png",
//       hotspot: { top: "55%", left: "50%", width: "45%", height: "20%" },
//     },
//     {
//       name: "Onion",
//       img: "https://i.imgur.com/qL8gY5t.png",
//       hotspot: { top: "50%", left: "30%", width: "25%", height: "30%" },
//     },
//     {
//       name: "Beans",
//       img: "https://i.imgur.com/7vj4R4V.png",
//       hotspot: { top: "40%", left: "35%", width: "30%", height: "25%" },
//     },
//   ];

//   let correctPlacements = 0;

//   // --- Functions ---
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   function startGame() {
//     correctPlacements = 0;
//     platesContainer.innerHTML = "";
//     basketContainer.innerHTML = "";

//     const plateOrder = [...vegetables];
//     shuffle(plateOrder);

//     // Create plates in a random order
//     plateOrder.forEach((veg) => {
//       const plateDiv = document.createElement("div");
//       plateDiv.className = "plate";
//       plateDiv.innerHTML = `
//                 <span class="plate-label">${veg.name}</span>
//                 <div class="drop-zone" data-vegetable="${veg.name}"></div>
//             `;
//       platesContainer.appendChild(plateDiv);
//     });

//     // Create the draggable hotspots over the basket image
//     vegetables.forEach((veg) => {
//       const hotspot = document.createElement("div");
//       hotspot.className = "vegetable-hotspot";
//       hotspot.draggable = true;
//       hotspot.dataset.vegetable = veg.name;
//       hotspot.dataset.imgSrc = veg.img;

//       // Apply coordinates from our game data
//       hotspot.style.top = veg.hotspot.top;
//       hotspot.style.left = veg.hotspot.left;
//       hotspot.style.width = veg.hotspot.width;
//       hotspot.style.height = veg.hotspot.height;

//       basketContainer.appendChild(hotspot);
//     });

//     addDragAndDropListeners();

//     startScreen.classList.remove("active");
//     endScreen.classList.remove("active");
//     gameScreen.classList.add("active");
//   }

//   function endGame() {
//     setTimeout(() => {
//       gameScreen.classList.remove("active");
//       endScreen.classList.add("active");
//     }, 500);
//   }

//   function addDragAndDropListeners() {
//     const draggables = document.querySelectorAll(".vegetable-hotspot");
//     const dropZones = document.querySelectorAll(".drop-zone");

//     draggables.forEach((draggable) => {
//       draggable.addEventListener("dragstart", (e) => {
//         e.target.classList.add("dragging");
//         e.dataTransfer.setData("text/plain", e.target.dataset.vegetable);
//         e.dataTransfer.setData("text/img-src", e.target.dataset.imgSrc);
//       });

//       draggable.addEventListener("dragend", (e) => {
//         e.target.classList.remove("dragging");
//       });
//     });

//     dropZones.forEach((zone) => {
//       zone.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         if (zone.children.length === 0) {
//           zone.classList.add("drag-over");
//         }
//       });

//       zone.addEventListener("dragleave", (e) => {
//         zone.classList.remove("drag-over");
//       });

//       zone.addEventListener("drop", (e) => {
//         e.preventDefault();
//         zone.classList.remove("drag-over");

//         const vegetableName = e.dataTransfer.getData("text/plain");
//         const imgSrc = e.dataTransfer.getData("text/img-src");
//         const draggedHotspot = document.querySelector(
//           `.vegetable-hotspot[data-vegetable="${vegetableName}"]`
//         );

//         if (
//           vegetableName === zone.dataset.vegetable &&
//           zone.children.length === 0
//         ) {
//           successSound.play();

//           const vegImg = document.createElement("img");
//           vegImg.src = imgSrc;

//           zone.appendChild(vegImg);
//           draggedHotspot.draggable = false;
//           draggedHotspot.style.display = "none";

//           correctPlacements++;
//           if (correctPlacements === vegetables.length) {
//             endGame();
//           }
//         } else {
//           failSound.play();
//         }
//       });
//     });
//   }

//   // --- Event Listeners for Buttons ---
//   startButton.addEventListener("click", startGame);
//   playAgainButton.addEventListener("click", startGame);
// });
