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
    const budget = calculateBudget(tripData);

    showTripPreview(tripData);

    console.log("Trip Data:", tripData);
    console.log("Budget:", budget);

    errorMessage.textContent = "Budget calculations are working. Results display comes next.";
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

function calculateBudget(tripData) {
    const hotelTotal = tripData.days * tripData.hotelCost;

    const foodTotal = tripData.days * tripData.travelers * tripData.foodCost;

    const transportTotal = tripData.transportCost;

    const activitiesTotal = tripData.activityCost;

    const subtotal = hotelTotal + foodTotal + transportTotal + activitiesTotal;

    const extraTotal = subtotal * (tripData.extraPercent / 100);

    const totalCost = subtotal + extraTotal;

    const costPerPerson = totalCost / tripData.travelers;

    const dailyAverage = totalCost / tripData.days;

    const budget = {
        hotelTotal: hotelTotal,
        foodTotal: foodTotal,
        transportTotal: transportTotal,
        activitiesTotal: activitiesTotal,
        subtotal: subtotal,
        extraTotal: extraTotal,
        totalCost: totalCost,
        costPerPerson: costPerPerson,
        dailyAverage: dailyAverage
    };

    return budget;
}

function showTripPreview(tripData) {
    errorMessage.textContent = "";

    summaryTitle.textContent = `${tripData.destination || "Your"} Trip Estimate`;

    previewDestination.textContent = tripData.destination || "not entered";
    previewDays.textContent = tripData.days || 0;
    previewTravelers.textContent = tripData.travelers || 0;
}