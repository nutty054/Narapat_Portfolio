window.onload = pageLoad;

function pageLoad() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json", true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {  // ตรวจสอบว่าการโหลดข้อมูลสำเร็จ
            var data = JSON.parse(xhr.responseText);
            showData(data);
        } else {
            console.error('Error loading the data');
        }
    };
    
    xhr.onerror = function() {
        console.error('Error fetching the data');
    };
    
    xhr.send();
}

function showData(data) {
    let container = document.getElementById("layer");
    container.innerHTML = "";

    data.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-card"); // เพิ่มคลาสใช้กับ CSS
        productDiv.innerHTML = `
            <img src="pic/${product.pic}" alt="${product.brandname}" class="product-image">
            <h2 class="product-title">${product.brandname}</h2>
            <p class="product-price">Price: ${product.price} Baht</p>
        `;
        container.appendChild(productDiv);
    });
}

