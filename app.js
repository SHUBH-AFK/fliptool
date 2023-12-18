document.addEventListener('DOMContentLoaded', function () {
    // Your script logic goes here

    // Example: Log all auction items to the console
    const auctionItemsDiv = document.getElementById('auctionItems');

    // Replace this with your logic to fetch and display auction items
    const dummyAuctionItems = ['Item 1', 'Item 2', 'Item 3'];

    dummyAuctionItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        auctionItemsDiv.appendChild(itemElement);
    });
});
