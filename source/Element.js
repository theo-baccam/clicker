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

        // The price to buy an element will be:
        // price = ELEMENT_DEFAULT_PRICE * Math.pow(1.5 * elementAmount)
        // Unless there's no elements, in that case it'll be just default price
        this.DEFAULT_PRICE = DEFAULT_PRICE
        this.amount = amount;

        this.DEFAULT_CLICK_VALUE = DEFAULT_CLICK_VALUE;
        this.clickValueUpgrades = clickValueUpgrades;

        // spritePath is a string that points to a sprite image
        this.spritePath = spritePath;
    }
}

export {Element};