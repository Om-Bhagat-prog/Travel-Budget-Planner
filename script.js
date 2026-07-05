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


const summaryTitle = document.getElementById("summaryTitle");

const previewDestination = document.getElementById("previewDestination");
const previewDays = document.getElementById("previewDays");
const previewTravelers = document.getElementById("previewTravelers");

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const tripData = getTripData();

    showTripPreview(tripData);

    console.log(tripData);
});

function getTripData() {
    const tripData = {
        destination: destinationInput.value.trim(),
        days: Number(daysInput.value),
        travelers: Number(travelersInput.value),
        hotelCost: Number(hotelCostInput.value),
        foodCost: Number(foodCostInput.value),
        transportCost: Number(transportCostInput.value),
        activityCost: Number(activityCostInput.value),
        extraPercent: Number(extraPercentInput.value)
    };

    return tripData;
}

function showTripPreview(tripData) {
    errorMessage.textContent = "";

    summaryTitle.textContent = `${tripData.destination || "Your"} Trip Estimate`;

    previewDestination.textContent = tripData.destination || "not entered";
    previewDays.textContent = tripData.days || 0;
    previewTravelers.textContent = tripData.travelers || 0;
}