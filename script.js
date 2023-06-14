document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the count element
    var countElement = document.getElementById('count');
    
    // Set the initial count value to 508
    var count = 508;
  
    // Get today's date
    var today = new Date().toLocaleDateString();
  
    // Get the stored date and count from local storage
    var storedDate = localStorage.getItem('updateDate');
    var storedCount = localStorage.getItem('count');
  
    // If there is a stored date and it is today, update the count value
    if (storedDate && storedDate === today) {
      // Increment the stored count value by 1
      count = parseInt(storedCount, 10) + 1;
    }
  
    // Update the count element with the new value
    countElement.innerText = count;
  
    // Store today's date and the updated count in local storage
    localStorage.setItem('updateDate', today);
    localStorage.setItem('count', count.toString());
  });
  