document.getElementById('deposit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (amount <= 0) {
        alert('Invalid deposit amount');
        return;
    }

    // Simulate a deposit (In a real application, this would involve an API call)
    alert('Deposit successful! Account: ' + accountNumber + ' Amount: ' + amount);
});
