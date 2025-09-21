window.onload = pageLoad;

function pageLoad() {
    fetch('cloth.json')
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.error('Error fetching the data: ', error));
}

function showData(data) {
    let container = document.getElementById("layer");
    container.innerHTML = "";

    data.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="pic/${product.pic}" alt="${product.brandname}">
            <h2>${product.brandname}</h2>
            <p>Price: ${product.price} Baht</p>
        `;
        container.appendChild(productDiv);
    });
}
