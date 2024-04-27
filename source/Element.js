class Element {
    constructor(
        name,
        DEFAULT_PRICE,
        amount,
        DEFAULT_CLICK_RATE,
        clickRateUpgrades,
        DEFAULT_CLICK_VALUE,
        clickValueUpgrades,
        spritePath,
    ) {
        this.name = name;

        // Price calculation logic
        this.DEFAULT_PRICE = DEFAULT_PRICE;
        this.amount = amount;

        // Upgrades and rates
        this.DEFAULT_CLICK_RATE = DEFAULT_CLICK_RATE;
        this.clickRateUpgrades = clickRateUpgrades;

        this.DEFAULT_CLICK_VALUE = DEFAULT_CLICK_VALUE;
        this.clickValueUpgrades = clickValueUpgrades;

        // Path to the element's image
        this.spritePath = spritePath;
    }
}

export {Element};
