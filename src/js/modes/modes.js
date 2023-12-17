import { ctx, mouse } from "../index.js";
import {color} from "../utils/color.js"

export function slinky() {
    ctx.lineWidth = 3
    ctx.strokeStyle = `${color.random()}`;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.stroke()
}