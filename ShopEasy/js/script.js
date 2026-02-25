const displayProducts = () => {
  const container = document.getElementById("products_container");

  const productToDispaly = localStorage.getItem('products')

  const productData = JSON.parse(productToDispaly)

  if (!container) return;

  if (productData.length === 0) {
    container.innerHTML = `
     <div class="col-12">
        <div>
        <span>
        <i class="bi bi-search"></i>
        </span>
        <h3>No Products Found.</h3>
        <p>Try adjusting your search or filter</p>
        </div>
     </div>
    `

    return;
  }

  container.innerHTML = productData.map(
    (p) => `
    <div class="col py-4">
      <div class="card" style="width: 18rem;">
        <img src=${p.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-truncate">${p.name}</h5>
          <p class="card-text text-truncate">${p.description}</p>
          <p class="card-text">$${p.price}</p>
        </div>
        <div class="card-body">
          <a href="#" class="btn btn-primary">AddToCart</a>
        </div>
      </div>
    </div>
  `
  );
};


displayProducts();