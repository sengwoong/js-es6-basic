
debugger;

//assign() 함수로 복사
const sports = {
  item: "축구"
};
let copy = {};
Object.assign(copy, sports);
sports.item = "농구";
console.log(copy.item);
