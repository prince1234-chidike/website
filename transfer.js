$(document).ready(function () {


  $("#closeButton").on("click", function () {
    $("#page").slideUp();
  });
});

$(document).ready(function () {
  $("#balanceInput").on("input", function () {
    const inputBalance = parseFloat($(this).val());
    const continueButton = $("#continueButton");
    const balanceMessage = $("#balanceMessage");

    if (!isNaN(inputBalance) && inputBalance >= 1000) {
      continueButton.prop("disabled", false);
      balanceMessage.show();
    } else {
      continueButton.prop("disabled", true);
      balanceMessage.hide();
    }
  });
});


// Dynamically load the Poppins font from Google Fonts
function loadFont() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';
  document.head.appendChild(link);
}

// Call the loadFont function to load the font
loadFont();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Perform form validation
  const name = document.getElementById("name").value.trim();
  const bank = document.getElementById("bank").value.trim();
  const number = document.getElementById("number").value.trim();


  if (name === '' || bank === '' || number === '') {
    // Show SweetAlert message if form fields are empty
    Swal.fire({
      title: 'Oops...',
      text: 'Please fill all the fields!',
    });
  } else {
    // Form is valid, submit it
    // Your form submission logic goes here
    // For example, you can use AJAX to submit the form data

    // Clear form fields after submission
    window.location.href = 'comfirmed-transfer.html';
  }
})

function fetchTransactions() {
  var transactionType = document.getElementById("transactionType").value;
  var transactionResults = document.getElementById("transactionResults");

  // Clear previous results
  transactionResults.innerHTML = "";

  // Fetch transactions based on selected type
  if (transactionType === "data") {
    // Fetch data transactions
    transactionResults.innerHTML = "<p> No Data transactions .</p>";
  } else if (transactionType === "Transaction") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Transactions History.</p>";
  } else if (transactionType === "airtime") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Airtime transactions.</p>";
  } else if (transactionType === "wallet") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Wallet transactions.</p>";
  } else if (transactionType === "exam") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Exam transactions.</p>";
  } else {
    // Handle other transaction types
    transactionResults.innerHTML = "<p>No transactions History.</p>";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // Hide preloader after 1 seconds
  setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 800);
});