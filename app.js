class Item {
    constructor(item, brand, quantity) {
        this.item = item
        this.brand = brand
        this.quantity = quantity
    }
}

class UI {
    static displayItems() {
        const storedItems = [
            {
                item: 'Peas (frozen)',
                brand: 'Natures Best',
                quantity: 2
            },
            {
                item: 'Milk (gal)',
                brand: 'Deans',
                quantity: 3
            },
        ]

        const items = storedItems

        items.forEach((item) => UI.addItemToList(item))
    }
    static addItemToList(items) {
        const list = document.querySelector('#inventory-list')
        
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${items.item}</td>
        <td>${items.brand}</td>
        <td>${items.quantity}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `

        list.appendChild(row)
    }
}

document.addEventListener('DOMContentLoaded', UI.displayItems)