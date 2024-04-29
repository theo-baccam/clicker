class Element {
    // Constructor for the Element class
    constructor(
        name,
        DEFAULT_PRICE,
        amount,
        DEFAULT_CLICK_VALUE,
        clickValueUpgrades,
        spritePath,
    ) {
        // Basic properties of the element
        this.name = name;
        this.DEFAULT_PRICE = DEFAULT_PRICE;
        this.amount = amount;
        this.DEFAULT_CLICK_VALUE = DEFAULT_CLICK_VALUE;
        this.clickValueUpgrades = clickValueUpgrades;
        this.spritePath = spritePath; // Path to the sprite image
    }

    // Method to calculate the buy price of the element
    getBuyPrice() {
        return (
            this.DEFAULT_PRICE
            * Math.pow(1.6, this.amount) // Price increases exponentially with the amount
        );
    }

    // Method to calculate the sell price of the element
    getSellPrice() {
        if (this.amount === 0) {
            return 0; // If no elements, sell price is 0
        };
        return (
            this.DEFAULT_PRICE
            * Math.pow(1.6, this.amount - 1) // Sell price is half the buy price of the previous amount
            / 2
        );
    }

    // Method to calculate the upgrade price of the element
    getUpgradePrice() {
        return (
            this.DEFAULT_PRICE
            * Math.pow(3.2, this.clickValueUpgrades) // Upgrade price increases exponentially with the number of upgrades
        );
    }

    // Method to calculate the value of a click
    getClickValue() {
        return (
            this.DEFAULT_CLICK_VALUE
            * (this.clickValueUpgrades + 1) // Click value increases with the number of upgrades
            * this.amount // Click value increases with the amount of elements
        );
    }
}

// Export the Element class
export {Element};