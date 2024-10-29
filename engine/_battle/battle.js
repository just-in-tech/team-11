import { $ } from "../../lib/Pen.js";

export class UnitButton {
    constructor(x, y, label) {
        this.button = $.makeButton(x, y, 120, 200);
        this.button.background = "white";
        this.button.label = label;
        this.button.border = "black";
    }
}