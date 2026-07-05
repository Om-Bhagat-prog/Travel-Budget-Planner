const budgetForm = document.getElementById("budgetForm");

const destinationInput = document.getElementById("destination");
const daysInput = document.getElementById("days");
const travelersInput = document.getElementById("travelers");
const hotelCostInput = document.getElementById("hotelCost");
const foodCostInput = document.getElementById("foodCost");
const transportCostInput = document.getElementById("transportCost");
const activityCostInput = document.getElementById("activityCost");
const extraPercentInput = document.getElementById("extraPercent");

const errorMessage = document.getElementById("errorMessage");

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const destination = destinationInput.value;
    const days = daysInput.value;
    const travelers = travelersInput.value;
    const hotelCost = hotelCostInput.value;
    const foodCost = foodCostInput.value;
    const transportCost = transportCostInput.value;
    const activityCost = activityCostInput.value;
    const extraPercent = extraPercentInput.value;

    console.log("destination", destination);
    console.log("Days:", days);
    console.log("Travelers:", travelers);
    console.log("Hotel Cost:", hotelCost);
    console.log("Food Cost:", foodCost);
    console.log("Transportation Cost:", transportCost);
    console.log("Activity Cost:", activityCost);
    console.log("Extra Percent:", extraPercent);

    errorMessage.textContent = "Form values are connected. Calculations ill be added next."
});