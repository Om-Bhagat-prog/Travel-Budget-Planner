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
const hotelTotalElement = document.getElementById("hotelTotal");
const foodTotalElement = document.getElementById("foodTotal");
const transportTotalElement = document.getElementById("transportTotal");
const activitiesTotalElement = document.getElementById("activitiesTotal");
const extraTotalElement = document.getElementById("extraTotal");
const totalCostElement = document.getElementById("totalCost");
const costPerPersonElement = document.getElementById("costPerPerson");
const dailyAverageElement = document.getElementById("dailyAverage");

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const tripData = getTripData();

    if (!isValidTripData(tripData)) {
        return;
    }

    const budget = calculateBudget(tripData);

    showTripPreview(tripData);
    showBudgetResults(budget);

    console.log("Trip Data:", tripData);
    console.log("Budget:", budget);

    errorMessage.textContent = "";
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

function isValidTripData(tripData) {
    errorMessage.textContent = "";

    if (tripData.destination === "") {
        showError("Please enter a destination");
        return false;
    }

    if (tripData.days < 1) {
        showError("Number of days must be at least 1.");
        return false;
    }

    if (tripData.travelers < 1) {
        showError("Number of travelers must be at least 1.");
        return false;
    }

    if (hasNegativeCost(tripData)) {
        showError("Costs and extra budget percentage cannot be negative");
        return false;
    }

    return true;
}

function hasNegativeCost(tripData) {
    return (
        tripData.hotelCost < 0 ||
        tripData.foodCost < 0 ||
        tripData.transportCost < 0 ||
        tripData.activityCost < 0 ||
        tripData.extraPercent < 0
    );
}

function showError(message) {
    errorMessage.textContent = message;
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

function showBudgetResults(budget) {
    hotelTotalElement.textContent = formatMoney(budget.hotelTotal);
    foodTotalElement.textContent = formatMoney(budget.foodTotal);
    transportTotalElement.textContent = formatMoney(budget.transportTotal);
    activitiesTotalElement.textContent = formatMoney(budget.activitiesTotal);
    extraTotalElement.textContent = formatMoney(budget.extraTotal);
    totalCostElement.textContent = formatMoney(budget.totalCost);
    costPerPersonElement.textContent = formatMoney(budget.costPerPerson);
    dailyAverageElement.textContent = formatMoney(budget.dailyAverage);
}

function formatMoney(amount) {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

function showTripPreview(tripData) {
    errorMessage.textContent = "";

    summaryTitle.textContent = `${tripData.destination || "Your"} Trip Estimate`;

    previewDestination.textContent = tripData.destination || "not entered";
    previewDays.textContent = tripData.days || 0;
    previewTravelers.textContent = tripData.travelers || 0;
}