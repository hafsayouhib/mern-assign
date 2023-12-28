document.getElementById("delivery-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    
    // Display a confirmation dialog
    const confirmationMessage = `Confirm your order:\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`;
    if (confirm(confirmationMessage)) {
        // User clicked "OK" in the confirmation dialog
        // You can perform further actions here if needed
        alert("Order confirmed!");
        
        // You can also reset the form if needed
        this.reset();
    } else {
        // User clicked "Cancel" in the confirmation dialog
        // No further action required
    }
});







// code for add and delete



  // Function to add a new item
  function addItem(event) {
    const itemsContainer = event.target.closest('.modalcontainer');
    const newItem = document.createElement('div');
    newItem.className = 'modalcontainer';
    newItem.innerHTML = `
      <!-- Your existing item structure goes here -->
    `;
    itemsContainer.insertAdjacentElement('beforeend', newItem);
  }

  // Function to delete the last item
  function deleteItem(event) {
    const itemsContainer = event.target.closest('.modalcontainer');
    const items = itemsContainer.querySelectorAll('.modalcontainer');

    // Check if there are items to delete
    if (items.length > 1) { // Ensure at least one item remains
      itemsContainer.removeChild(items[items.length - 1]);
    }
  }

  // Add event listeners to all "Add Item" and "Delete Item" buttons
  const addItemButtons = document.querySelectorAll('.addItemButton');
  const deleteItemButtons = document.querySelectorAll('.deleteItemButton');

  addItemButtons.forEach(button => {
    button.addEventListener('click', addItem);
  });

  deleteItemButtons.forEach(button => {
    button.addEventListener('click', deleteItem);
  });




// CART

// Define a cart object to store cart items
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const addItemButtons = document.querySelectorAll(".addItemButton");
    const deleteItemButtons = document.querySelectorAll(".deleteItemButton");

    // Cart to store selected items
    const cart = [];

    // Function to update the cart
    function updateCart() {
        cartItems.innerHTML = "";
        cartTotal.textContent = "$0.00";

        cart.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${item.name} - $${item.price}`;
            cartItems.appendChild(listItem);
        });

        if (cart.length > 0) {
            const totalPrice = cart.reduce((total, item) => total + item.price, 0);
            cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        }
    }

    // Add item to cart
    function addToCart(item) {
        cart.push(item);
        updateCart();
    }

    // Remove item from cart
    function removeFromCart(item) {
        const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
        }
    }

    // Add click event listeners to Add Item buttons
    addItemButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const itemId = button.getAttribute("data-id");
            const selectedItem = menuItems.find((item) => item.id === parseInt(itemId));
            if (selectedItem) {
                addToCart(selectedItem);
            }
        });
    });

    // Add click event listeners to Delete Item buttons
    deleteItemButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const itemId = button.getAttribute("data-id");
            const selectedItem = cart.find((item) => item.id === parseInt(itemId));
            if (selectedItem) {
                removeFromCart(selectedItem);
            }
        });
    });
});

