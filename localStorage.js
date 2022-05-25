const array = [23, 3, 5, 6, 7, 8, 9];
const updateArr = document.querySelector("#arr");
const btn = document.querySelector(".btn-b");
let newArr = [];

const addTodo = (item) => {
  newArr.push(item);
    pushArr()
};

const pushArr = () => {
   
  array.forEach((element) => {
    let item = ` <h1 class="arr">${element}</h1>`;
    
  });

};
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    addTodo()
});
