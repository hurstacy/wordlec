// Select the element where you want to display the count
const countElement = document.getElementById('count');

// Function to update the count
function updateCount() {
  // Get the current count value from the element
  let count = parseInt(countElement.textContent);

  // Increment the count by 1
  count++;

  // Update the count in the element
  countElement.textContent = count;
}

// Function to check the time and update the count at 11:59 PM
function checkTimeAndUpdateCount() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  // If it's 11:59 PM, call the updateCount function
  if (currentHour === 23 && currentMinute === 59) {
    updateCount();
  }
}

// Call the checkTimeAndUpdateCount function immediately
checkTimeAndUpdateCount();

// Call the checkTimeAndUpdateCount function every minute
setInterval(checkTimeAndUpdateCount, 60000);