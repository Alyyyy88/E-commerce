function purchase() {
  alert("Order Completed");
}

function Credit() {
  var creditDetails = document.getElementById("credit");
  creditDetails.innerHTML = `
      <h1><i class="far fa-credit-card"></i> Payment Information</h1>
      <div class="cc-num">
          <label for="card-num">Credit Card No.</label>
          <input type="text" name="card-num">
      </div>
      <div class="cc-info">
          <div>
              <label for="card-num">Expiration date</label>
              <input type="text" name="expire">
          </div>
          <div>
              <label for="card-num">CCV</label>
              <input type="text" name="security">
          </div>
      </div>
  `;
  // Add slide-down transition effect
  creditDetails.style.transition = "height 0.5s ease-in-out";
  creditDetails.style.height = creditDetails.scrollHeight + "px";
}

function Cash() {
  var creditDetails = document.getElementById("credit");
  // Hide credit card details with slide-up transition
  creditDetails.style.height = "0";
  setTimeout(function() {
      creditDetails.innerHTML = ""; // Clear content after transition
  }, 500);
}