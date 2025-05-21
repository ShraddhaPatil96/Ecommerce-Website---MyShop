document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "tops";

//   // Update title
//   document.getElementById("category-title").textContent = `Products in ${capitalize(category)}`;

  const productSection = document.getElementById("product-section");

  // Sample static product data per category
  const productData = {
    
      tops: [
      {
        name: "Black Top",
        price: "$11.99",
        image: "assets/top1.jpg",
        link: "product-view.html"
      },
      {
        name: "Blue Top",
        price: "$13.99",
        image: "assets/top2.jpg",
        link: "product-view.html"
      }
    ],
    jeans: [
      {
        name: "Blue long jeans",
        price: "$11.99",
        image: "assets/jeans1.jpg",
        link: "product-view.html"
      },
      {
        name: "Blue jeans",
        price: "$13.99",
        image: "assets/jeans2.jpg",
        link: "product-view.html"
      }
    ],
      partywears: [
      {
        name: "Red dress",
        price: "$11.99",
        image: "assets/partywear1.jpg",
        link: "product-view.html"
      },
      {
        name: "Red long dress",
        price: "$13.99",
        image: "assets/partywear2.jpg",
        link: "product-view.html"
      }
    ],
      shoes: [
      {
        name: "Blue shoes",
        price: "$11.99",
        image: "assets/shoes1.jpg",
        link: "product-view.html"
      },
      {
        name: "Red shoes",
        price: "$13.99",
        image: "assets/shoes2.jpg",
        link: "product-view.html"
      }
    ],
    // You can add jeans, shoes, etc. here
  };

  const products = productData[category.toLowerCase()];
  if (!products) {
    productSection.innerHTML = "<p>No products available in this category.</p>";
    return;
  }

  // Create HTML content dynamically
  let html = `<h3>Products in ${capitalize(category)}</h3><div class="product-grid">`;

  products.forEach(product => {
    html += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <a href="${product.link}">View Product</a>
      </div>`;
  });

  html += `</div>`;
  productSection.innerHTML = html;
});

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
