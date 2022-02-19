const smartPhones = [
    {brand: "Samsung", price: 3700},
    {brand: "Huawei", price: 4900},
    {brand: "iPhone", price: 6999},
    {brand: "Nokia", price: 3900}
];


const poorBoi = smartPhones.filter(phones => phones.price <= 4000);

console.log(poorBoi);