function convertEpoch() {
    const epochInput = document.getElementById("epochInput").value;
    const epochTimestamp = parseInt(epochInput);
    
    if (isNaN(epochTimestamp)) {
      alert("Invalid epoch timestamp. Please enter a valid number.");
      return;
    }
  
    const date = new Date(epochTimestamp * 1000); 
    const dateTimeElement = document.getElementById("dateTime");
    const dayOfWeekElement = document.getElementById("dayOfWeek");
  
    const dateString = date.toLocaleString('en-IN');
    const dayOfWeek = date.toLocaleString('en-IN', { weekday: 'long' });
  
    dateTimeElement.textContent = dateString;
    dayOfWeekElement.textContent = dayOfWeek;
  }
  