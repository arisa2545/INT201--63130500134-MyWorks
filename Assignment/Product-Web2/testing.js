let products = [{
    img: "https://media.discordapp.net/attachments/903253994997157971/903313046787731596/airpods-3rd-generationWHITE.png?width=523&height=669",
    id: 1001,
    name: "แอร์พอต",
    price: "6,700.00",
    stock: "0",
},
{
    img: "https://media.discordapp.net/attachments/903253994997157971/903316693261115442/airpods-max-select-spacegray-202011.png?width=566&height=670",
    id: 2001,
    name: "แอพอท",
    price: "19,900.00",
    stock: "1"
},
{
    img: "https://media.discordapp.net/attachments/903253994997157971/903316904842764308/mag-safe-charger.png?width=378&height=669",
    id: 3001,
    name: "MagSafe Charger",
    price: "1,490.00",
    stock: "5"
},
{
    img: "https://media.discordapp.net/attachments/903253994997157971/903319852700299264/MC552.png",
    id: 4001,
    name: "Apple 30-pin to VGA Adapter",
    price: "1,190.00",
    stock: "6"
},
{
    img: "https://media.discordapp.net/attachments/903253994997157971/903318341358354492/unknown.png?width=894&height=670",
    id: 5001,
    name: "Magic Keyboard - Thaik",
    price: "3,190.00",
    stock: "9"
},
{
    img: "https://media.discordapp.net/attachments/903253994997157971/903319605488009236/MU9F2_AV6.png?width=670&height=670",
    id: 6001,
    name: "Apple Watch Magnetic Charging Dock",
    price: "2,990.00",
    stock: "10"
}
]

let product = new RegExp('แอร์' , 'g');

for (let p of products){
    if(p.name.match(product) != null){
        console.log(p.name);
    }
}
