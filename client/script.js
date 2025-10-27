function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/predict_home"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });
  }
  
  function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_LN";

    $.get(url, function(data, status) {
        console.log("Response received from the server:");
        console.log(data);

        if (data && data.location) { // Check for "location" instead of "locations"
            var locations = data.location; // Assign the correct key
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty(); // Clear existing options
            locations.forEach(function(location) {
                var opt = new Option(location); // Create new <option>
                $('#uiLocations').append(opt); // Append to dropdown
            });
        } else {
            console.error("Invalid data received:", data);
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Failed to fetch locations:", textStatus, errorThrown);
    });
}

  
  window.onload = onPageLoad;