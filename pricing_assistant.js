let productName = "Luxury Perfume";

let costPerUnit = 50;
let basePrice = 70;
let discountRate = .15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 2000;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product:",productName)
console.log("Discounted price:",discountedPrice)
console.log("Final price with tax:",finalPriceWithTax)
console.log("Profit per unit:",profitPerUnit)
console.log("Break-even units:",breakEvenUnits)
console.log("Per-unit profitability:",isProfitablePerUnit)
