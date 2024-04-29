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

    getBuyPrice() {
        return (
            this.DEFAULT_PRICE
            * Math.pow(1.6, this.amount)
        );
    }

    getSellPrice() {
        if (this.amount === 0) {
            return 0;
        };
        return (
            this.DEFAULT_PRICE
            * Math.pow(1.6, this.amount - 1)
            / 2
        );
    }

    getUpgradePrice() {
        return (
            this.DEFAULT_PRICE
            * Math.pow(3.2, this.clickValueUpgrades)
        );
    }
}

export {Element};