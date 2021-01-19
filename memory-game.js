
let arrRandom = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

// function shuffle(array) {
//     const newArray = [];
//     while(array.length){
//         const index = Math.floor(Math.random() * array.length);
//         newArray.push(array[index]);
//         array.splice(index, 1);
//     }
//     return newArray;
// }
// arrRandom = shuffle(arrRandom);
// console.log(shuffle(arrRandom));

//რენდომად ავრიეთ მასივი
arrRandom = _.shuffle(arrRandom);
console.log(arrRandom);

const chies = document.getElementById('chies');

let arr = (chies.querySelectorAll('span'));
arr.forEach((el, index) => {
    el.textContent = arrRandom[index];
});

chies.addEventListener('click', appearanceContent); //კლიკის დროს ტექსტის ფერი გახდეს შავი
let index1 = null;
let index2 = null;
let click = 0;
let show = 0;
function appearanceContent(event){
    let target = event.target;
    if(!event.target.classList.contains("tray")){
        target = event.target.parentElement;
    }
    console.log(target);
    if(!target.classList.contains('show') && click === 0){
        target.classList.add('show');
        show++;
        console.log(show);
        click++;
        index1 = +target.id;           
    } 
    if(!target.classList.contains('show') && click === 1){
        target.classList.add('show');
        show++;
        console.log(show);
        index2 = +target.id;     
        arr[index1].parentElement.classList.add('show'); 
        click++;
        
        if(arr[index1].textContent != arr[index2].textContent){
            setTimeout(() => {           
                arr[index1].parentElement.classList.remove('show'); 
                arr[index2].parentElement.classList.remove('show');
                click = 0;
                index1 = null;
                index2 = null;
            }, 2000);    
        }else{
            click = 0;
            index1 = null;
            index2 = null;
            if(show > arr.length){
                alert('Win');
                window.location.reload;
            }
        }
    }  
}