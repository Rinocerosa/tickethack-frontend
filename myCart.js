// POST Valide le panier en simulant un achat, enregistre commande et date dans bookings
// avec querySelector sur bouton purchase

//calcule le total du panier
document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll("#delete");
  const purchaseButton = document.querySelector("#purchase");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tripLine = button.closest(".cart-trip-line");
      tripLine.remove();
      updateTotal();
    });
  });

  purchaseButton.addEventListener("click", () => {
    alert("Thank you for your purchase!");

    window.location.href = "myBookings.html";
  });

  function updateTotal() {
    const tripPrices = document.querySelectorAll(".cart-trip-line .price");
    let total = 0;
    tripPrices.forEach((priceElement) => {
      const price = parseFloat(priceElement.textContent.replace("€", ""));
      total += price;
    });
    const totalAmount = document.querySelector(".cart-total-amount h3");
    totalAmount.textContent = `Total: ${total.toFixed(2)} €`;
  }
});
