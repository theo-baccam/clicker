class Element {
    constructor(
        name,
        DEFAULT_PRICE,
        amount,
        DEFAULT_CLICK_VALUE,
        clickValueUpgrades,
        spritePath,
    ) {
        this.name = name;

        this.DEFAULT_PRICE = DEFAULT_PRICE
        this.amount = amount;

        this.DEFAULT_CLICK_VALUE = DEFAULT_CLICK_VALUE;
        this.clickValueUpgrades = clickValueUpgrades;

        // spritePath is a string that points to a sprite image
        this.spritePath = spritePath;
    }
}

export {Element};