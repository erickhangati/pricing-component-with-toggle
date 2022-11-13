const toggle = document.querySelector(".pricing-toggle");
const toggleBtn = document.querySelector(".pricing-toggle__button");
const pricingMonthly = document.querySelector(".pricing-monthly");
const pricingAnnualy = document.querySelector(".pricing-annually");
const pricingTables = [pricingMonthly, pricingAnnualy];

toggle.addEventListener("click", function () {
  this.classList.toggle("pricing-toggle--clicked");
  toggleBtn.classList.toggle("pricing-toggle__button--clicked");
  pricingTables.forEach((table) => table.classList.toggle("hidden"));
});
