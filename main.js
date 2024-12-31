/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayContacts: () => (/* binding */ displayContacts)\n/* harmony export */ });\n// Stores the contacts.\r\nlet contacts = [\r\n    {name:`Maria Thompson`, role:`Cafe Manager`, phone:`(585) 555-5678`, email:`maria.thompson@gaberollcafe.com`},\r\n    {name:`Elliot Ramirez`, role:`Head Barista`, phone:`(585) 555-2345`, email:`elliot.ramirez@gaberollcafe.com`},\r\n    {name:`Sophie Chen`, role:`Pastry Chef`, phone:`(585) 555-7890`, email:`sophie.chen@gaberollcafe.com`}\r\n]\r\n\r\n// Handles the logic for displaying contact information in container argument.\r\nfunction displayContacts(container) {\r\n    container.innerHTML = \"\";\r\n    const contactsTitle = document.createElement(\"h1\");\r\n    contactsTitle.textContent = \"Contact Us\";\r\n    container.appendChild(contactsTitle);\r\n\r\n    contacts.forEach(contact => {\r\n        let itemDiv = document.createElement(\"div\");\r\n        itemDiv.classList.add(\"contact\", \"subcard\");\r\n        itemDiv.innerHTML = `\r\n        <h2>${contact.name}</h2>\r\n        <p>${contact.role}</p>\r\n        <p>Phone: ${contact.phone}</p>\r\n        <p>Email: ${contact.email}</p>`;\r\n\r\n        container.appendChild(itemDiv);\r\n    });\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxLQUFLLDRHQUE0RztBQUNqSCxLQUFLLDRHQUE0RztBQUNqSCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0IsYUFBYSxhQUFhO0FBQzFCLG9CQUFvQixjQUFjO0FBQ2xDLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcz9jZTc1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0b3JlcyB0aGUgY29udGFjdHMuXHJcbmxldCBjb250YWN0cyA9IFtcclxuICAgIHtuYW1lOmBNYXJpYSBUaG9tcHNvbmAsIHJvbGU6YENhZmUgTWFuYWdlcmAsIHBob25lOmAoNTg1KSA1NTUtNTY3OGAsIGVtYWlsOmBtYXJpYS50aG9tcHNvbkBnYWJlcm9sbGNhZmUuY29tYH0sXHJcbiAgICB7bmFtZTpgRWxsaW90IFJhbWlyZXpgLCByb2xlOmBIZWFkIEJhcmlzdGFgLCBwaG9uZTpgKDU4NSkgNTU1LTIzNDVgLCBlbWFpbDpgZWxsaW90LnJhbWlyZXpAZ2FiZXJvbGxjYWZlLmNvbWB9LFxyXG4gICAge25hbWU6YFNvcGhpZSBDaGVuYCwgcm9sZTpgUGFzdHJ5IENoZWZgLCBwaG9uZTpgKDU4NSkgNTU1LTc4OTBgLCBlbWFpbDpgc29waGllLmNoZW5AZ2FiZXJvbGxjYWZlLmNvbWB9XHJcbl1cclxuXHJcbi8vIEhhbmRsZXMgdGhlIGxvZ2ljIGZvciBkaXNwbGF5aW5nIGNvbnRhY3QgaW5mb3JtYXRpb24gaW4gY29udGFpbmVyIGFyZ3VtZW50LlxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdHMoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IGNvbnRhY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb250YWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdHNUaXRsZSk7XHJcblxyXG4gICAgY29udGFjdHMuZm9yRWFjaChjb250YWN0ID0+IHtcclxuICAgICAgICBsZXQgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiLCBcInN1YmNhcmRcIik7XHJcbiAgICAgICAgaXRlbURpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyPiR7Y29udGFjdC5uYW1lfTwvaDI+XHJcbiAgICAgICAgPHA+JHtjb250YWN0LnJvbGV9PC9wPlxyXG4gICAgICAgIDxwPlBob25lOiAke2NvbnRhY3QucGhvbmV9PC9wPlxyXG4gICAgICAgIDxwPkVtYWlsOiAke2NvbnRhY3QuZW1haWx9PC9wPmA7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGl2KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250YWN0c307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contactPage.js\n");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHome: () => (/* binding */ displayHome)\n/* harmony export */ });\nconst homeHTML = `<h1>Gaberoll</h1>\r\n            <div class=\"review subcard\">\r\n                <p>Step into Gaberoll, a cozy haven where handcrafted delights and warm hospitality\r\n                come together to create unforgettable moments. Nestled in the heart of\r\n                Albuquerque, Gaberoll is more than just a cafe – it's an experience.</p>\r\n                <h3>Gordon Ramsey</h3>\r\n            </div>\r\n            <div class=\"hours subcard\">\r\n                <h2>Hours</h2>\r\n                <p>Sunday: 8am - 6 pm</p>\r\n                <p>Monday: 7am - 8 pm</p>\r\n                <p>Tuesday: 7am - 8pm</p>\r\n                <p>Wednesday: 7am - 8pm</p>\r\n                <p>Thursday: 7am - 8pm</p>\r\n                <p>Friday: 7am - 8pm</p>\r\n                <p>Saturday: 8am - 9pm</p>\r\n            </div>\r\n            <div class=\"location subcard\">\r\n                <h2>Location</h2>\r\n                <p>308 Negra Arroyo Lane, Albuquerque, New Mexico</p>\r\n            </div>`;\r\n\r\n\r\n// Handles the logic for displaying homepage.\r\nfunction displayHome(container) {\r\n    container.innerHTML = \"\";\r\n    container.innerHTML = homeHTML;\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVBhZ2UuanM/OWExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBob21lSFRNTCA9IGA8aDE+R2FiZXJvbGw8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3IHN1YmNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxwPlN0ZXAgaW50byBHYWJlcm9sbCwgYSBjb3p5IGhhdmVuIHdoZXJlIGhhbmRjcmFmdGVkIGRlbGlnaHRzIGFuZCB3YXJtIGhvc3BpdGFsaXR5XHJcbiAgICAgICAgICAgICAgICBjb21lIHRvZ2V0aGVyIHRvIGNyZWF0ZSB1bmZvcmdldHRhYmxlIG1vbWVudHMuIE5lc3RsZWQgaW4gdGhlIGhlYXJ0IG9mXHJcbiAgICAgICAgICAgICAgICBBbGJ1cXVlcnF1ZSwgR2FiZXJvbGwgaXMgbW9yZSB0aGFuIGp1c3QgYSBjYWZlIOKAkyBpdCdzIGFuIGV4cGVyaWVuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgzPkdvcmRvbiBSYW1zZXk8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzIHN1YmNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Ib3VyczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5TdW5kYXk6IDhhbSAtIDYgcG08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Nb25kYXk6IDdhbSAtIDggcG08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UdWVzZGF5OiA3YW0gLSA4cG08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5XZWRuZXNkYXk6IDdhbSAtIDhwbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlRodXJzZGF5OiA3YW0gLSA4cG08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5GcmlkYXk6IDdhbSAtIDhwbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlNhdHVyZGF5OiA4YW0gLSA5cG08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb24gc3ViY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkxvY2F0aW9uPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPjMwOCBOZWdyYSBBcnJveW8gTGFuZSwgQWxidXF1ZXJxdWUsIE5ldyBNZXhpY288L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG5cclxuLy8gSGFuZGxlcyB0aGUgbG9naWMgZm9yIGRpc3BsYXlpbmcgaG9tZXBhZ2UuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb21lKGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaG9tZUhUTUw7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUhvbWV9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/homePage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n// index.js\r\n\r\n__webpack_require__.e(/*! import() */ \"src_styles_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./styles.css */ \"./src/styles.css\"));\r\n\r\n\r\n\r\n\r\n// Handle logic for changing page content.\r\nfunction renderPage(tab) {\r\n    // Clear current content on page.\r\n    let contentCard = document.querySelector(\".content-card\");\r\n    contentCard.innerHTML = \"\";\r\n\r\n    // Display appropraite HTML based on tab selected.\r\n    switch (tab) {\r\n        case \"home\":\r\n            (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__.displayHome)(contentCard);\r\n            break;\r\n        case \"menu\":\r\n            (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__.displayMenu)(contentCard);\r\n            break;\r\n        case \"contact\":\r\n            (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__.displayContacts)(contentCard);\r\n            break;\r\n        default:\r\n            console.error(`Unexpected tab name: ${tab}`);\r\n            break;\r\n    }\r\n    console.log(tab);\r\n}\r\n\r\n// Add event listeners to the tabs.\r\nlet navButtons = Array.from(document.querySelectorAll(\".navBtn\"));\r\n    navButtons.forEach(button => {\r\n        button.addEventListener(\"click\", (event) => {\r\n            let tab = event.currentTarget.id;\r\n            renderPage(tab);\r\n        });\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxtSkFBdUI7QUFDcUI7QUFDQTtBQUNPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSx5REFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxnRUFBZTtBQUMzQjtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXguanNcclxuXHJcbmltcG9ydCAoXCIuL3N0eWxlcy5jc3NcIik7XHJcbmltcG9ydCB7IGRpc3BsYXlIb21lIH0gZnJvbSBcIi4vaG9tZVBhZ2UuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9tZW51UGFnZS5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29udGFjdHMgfSBmcm9tIFwiLi9jb250YWN0UGFnZS5qc1wiO1xyXG5cclxuLy8gSGFuZGxlIGxvZ2ljIGZvciBjaGFuZ2luZyBwYWdlIGNvbnRlbnQuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UodGFiKSB7XHJcbiAgICAvLyBDbGVhciBjdXJyZW50IGNvbnRlbnQgb24gcGFnZS5cclxuICAgIGxldCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jYXJkXCIpO1xyXG4gICAgY29udGVudENhcmQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAvLyBEaXNwbGF5IGFwcHJvcHJhaXRlIEhUTUwgYmFzZWQgb24gdGFiIHNlbGVjdGVkLlxyXG4gICAgc3dpdGNoICh0YWIpIHtcclxuICAgICAgICBjYXNlIFwiaG9tZVwiOlxyXG4gICAgICAgICAgICBkaXNwbGF5SG9tZShjb250ZW50Q2FyZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtZW51XCI6XHJcbiAgICAgICAgICAgIGRpc3BsYXlNZW51KGNvbnRlbnRDYXJkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRhY3RzKGNvbnRlbnRDYXJkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5leHBlY3RlZCB0YWIgbmFtZTogJHt0YWJ9YCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGFiKTtcclxufVxyXG5cclxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgdGFicy5cclxubGV0IG5hdkJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnRuXCIpKTtcclxuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YWIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICByZW5kZXJQYWdlKHRhYik7XHJcbiAgICAgICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n// Stores the menu items.\r\nlet menu = {\r\n    beverages: [\r\n        {name:\"Honey Lavender Latte\",\r\n            description:`A creamy blend of espresso, steamed milk, honey, and a hint of lavender for a \r\n            soothing and aromatic experience.`,\r\n            price:4.50,},\r\n        {name:\"Iced Matcha Latte\",\r\n        description:`Premium matcha green tea whisked to perfection, served over ice with your \r\n                choice of milk.`,\r\n        price:4.00,}\r\n    ],\r\n    sides: [\r\n        {name:\"Buttery Croissant\",description:`Flaky, golden, and freshly baked daily, perfect on its own or with\r\n                     a side of jam.`,price:3.25,},\r\n        {name:`Rosemary Parmesan Biscuit`,description:`A savory delight with a hint of rosemary and a sprinkle of Parmesan, \r\n                    great as a light snack.`,price:3.75,}\r\n    ],\r\n    entrees: [\r\n        {name:`Savory Gaberoll`,description:`A signature pastry roll filled with spinach, feta cheese, and caramelized\r\n                     onions, baked to golden perfection.`,price:7.50,},\r\n        {name:`Quiche Lorraine`,description:`A classic French tart made with eggs, cream, bacon, and Gruyère\r\n                     cheese in a flaky crust, served warm.`,price:8.50,}\r\n    ],\r\n};\r\n\r\n// Displays the menu items inside of the container element.\r\nfunction displayMenu(container) {\r\n    container.innerHTML = \"\";\r\n    Object.keys(menu).forEach(category => {\r\n        const title = document.createElement(\"h1\");\r\n        if (category === \"entrees\") {\r\n            title.textContent = \"Entrées\"\r\n        } else {\r\n            title.textContent = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();\r\n        }\r\n        container.appendChild(title);\r\n        menu[category].forEach(item => {\r\n            const itemDiv = document.createElement('div');\r\n            itemDiv.classList.add(`${category}`, 'subcard');\r\n            itemDiv.innerHTML = `<h2>${item.name}</h2>\r\n                <p>${item.description}</p>\r\n                <h3>$${item.price.toFixed(2)}</h3>\r\n            `;\r\n            container.appendChild(itemDiv);\r\n        });\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGlEQUFpRDtBQUNqRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHNFQUFzRTtBQUN0RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUMsdUNBQXVDLFVBQVU7QUFDakQscUJBQXFCLGlCQUFpQjtBQUN0Qyx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcz8zNjI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0b3JlcyB0aGUgbWVudSBpdGVtcy5cclxubGV0IG1lbnUgPSB7XHJcbiAgICBiZXZlcmFnZXM6IFtcclxuICAgICAgICB7bmFtZTpcIkhvbmV5IExhdmVuZGVyIExhdHRlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOmBBIGNyZWFteSBibGVuZCBvZiBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBob25leSwgYW5kIGEgaGludCBvZiBsYXZlbmRlciBmb3IgYSBcclxuICAgICAgICAgICAgc29vdGhpbmcgYW5kIGFyb21hdGljIGV4cGVyaWVuY2UuYCxcclxuICAgICAgICAgICAgcHJpY2U6NC41MCx9LFxyXG4gICAgICAgIHtuYW1lOlwiSWNlZCBNYXRjaGEgTGF0dGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpgUHJlbWl1bSBtYXRjaGEgZ3JlZW4gdGVhIHdoaXNrZWQgdG8gcGVyZmVjdGlvbiwgc2VydmVkIG92ZXIgaWNlIHdpdGggeW91ciBcclxuICAgICAgICAgICAgICAgIGNob2ljZSBvZiBtaWxrLmAsXHJcbiAgICAgICAgcHJpY2U6NC4wMCx9XHJcbiAgICBdLFxyXG4gICAgc2lkZXM6IFtcclxuICAgICAgICB7bmFtZTpcIkJ1dHRlcnkgQ3JvaXNzYW50XCIsZGVzY3JpcHRpb246YEZsYWt5LCBnb2xkZW4sIGFuZCBmcmVzaGx5IGJha2VkIGRhaWx5LCBwZXJmZWN0IG9uIGl0cyBvd24gb3Igd2l0aFxyXG4gICAgICAgICAgICAgICAgICAgICBhIHNpZGUgb2YgamFtLmAscHJpY2U6My4yNSx9LFxyXG4gICAgICAgIHtuYW1lOmBSb3NlbWFyeSBQYXJtZXNhbiBCaXNjdWl0YCxkZXNjcmlwdGlvbjpgQSBzYXZvcnkgZGVsaWdodCB3aXRoIGEgaGludCBvZiByb3NlbWFyeSBhbmQgYSBzcHJpbmtsZSBvZiBQYXJtZXNhbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JlYXQgYXMgYSBsaWdodCBzbmFjay5gLHByaWNlOjMuNzUsfVxyXG4gICAgXSxcclxuICAgIGVudHJlZXM6IFtcclxuICAgICAgICB7bmFtZTpgU2F2b3J5IEdhYmVyb2xsYCxkZXNjcmlwdGlvbjpgQSBzaWduYXR1cmUgcGFzdHJ5IHJvbGwgZmlsbGVkIHdpdGggc3BpbmFjaCwgZmV0YSBjaGVlc2UsIGFuZCBjYXJhbWVsaXplZFxyXG4gICAgICAgICAgICAgICAgICAgICBvbmlvbnMsIGJha2VkIHRvIGdvbGRlbiBwZXJmZWN0aW9uLmAscHJpY2U6Ny41MCx9LFxyXG4gICAgICAgIHtuYW1lOmBRdWljaGUgTG9ycmFpbmVgLGRlc2NyaXB0aW9uOmBBIGNsYXNzaWMgRnJlbmNoIHRhcnQgbWFkZSB3aXRoIGVnZ3MsIGNyZWFtLCBiYWNvbiwgYW5kIEdydXnDqHJlXHJcbiAgICAgICAgICAgICAgICAgICAgIGNoZWVzZSBpbiBhIGZsYWt5IGNydXN0LCBzZXJ2ZWQgd2FybS5gLHByaWNlOjguNTAsfVxyXG4gICAgXSxcclxufTtcclxuXHJcbi8vIERpc3BsYXlzIHRoZSBtZW51IGl0ZW1zIGluc2lkZSBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZW51KGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBPYmplY3Qua2V5cyhtZW51KS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiZW50cmVlc1wiKSB7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJFbnRyw6llc1wiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhdGVnb3J5LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgbWVudVtjYXRlZ29yeV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoYCR7Y2F0ZWdvcnl9YCwgJ3N1YmNhcmQnKTtcclxuICAgICAgICAgICAgaXRlbURpdi5pbm5lckhUTUwgPSBgPGgyPiR7aXRlbS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGgzPiQke2l0ZW0ucHJpY2UudG9GaXhlZCgyKX08L2gzPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURpdik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5TWVudX07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menuPage.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-page:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;