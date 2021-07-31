const foods = [
    { no: 1, name: 'Bread', quantity: '10' },
    { no: 2, name: 'Egg', quantity: '20' },
    { no: 3, name: 'Milk', quantity: '50' },
    { no: 4, name: 'Carrot', quantity: '20' }
]

 // 리턴값이 트루인것만 걸러줌
const res = foods.filter(food =>food.quantity <= 20);

console.log(res);