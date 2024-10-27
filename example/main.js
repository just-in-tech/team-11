import { $ } from "../lib/Pen.js";
$.use(update);

const player = $.makeCircleCollider(20, $.h / 2, 20);
const enemies = $.makeGroup();
enemies.push(makeEnemy(20, 20));
enemies.push(makeEnemy(40, 20));
enemies.push(makeEnemy(100, 20));
const player_shots = $.makeGroup();
player_shots.name = "shooting";
const enemies_shots = $.makeGroup();

$.debug = true;

function update() {
    controls();
    for (const enemy of enemies) {
        if ($.math.random(0, 100) > 99) {
            enemies_shots.push(makeShot(enemy.x, enemy.y, "red", 180));
        }
        if (enemy.y > $.h) {
            enemy.remove();
        }
        for (const shot of player_shots) {
            if (enemy.collides(shot)) {
                enemy.remove();
                shot.remove();
            }
        }
    }

    if (enemies.length < 10) {
        enemies.push(
            makeEnemy(
                $.math.random(10, $.w - 10),
                -$.math.random(10, 50)
            )
        );
    }
    //spawning management code
    //enemy controls

    //player management
    for (const shot of enemies_shots) {
        if (shot.overlaps(player)) {
            window.location.reload();
        }
    }

    $.drawColliders();
}

function controls() {
    const max = 20;
    if (player.velocity.x > max) {
        player.velocity.x = max;
    }
    if (player.velocity.x < -max) {
        player.velocity.x = -max;
    }
    if ($.keys.down("a")) {
        player.velocity.x -= 1;
    }
    if ($.keys.down("d")) {
        player.velocity.x += 1;
    }
    if ($.keys.down(" ") && $.frameCount % 10 === 0) {
        console.log("shoot");
        player_shots.push(makeShot(player.x, player.y, "orange", 0));
    }
}

function makeShot(x, y, colour, direction) {
    const temp = $.makeCircleCollider(x, y, 10);
    temp.fill = colour;
    temp.stroke = colour;
    temp.direction = direction;
    temp.speed = 15;
    temp.friction = 0;
    temp.lifespan = 500;
    return temp;
}

function makeEnemy(x, y) {
    const temp = $.makeCircleCollider(x, y, 20);
    temp.fill = "purple";
    temp.stroke = "transparent";
    temp.velocity.y = 5;
    temp.friction = 0;
    return temp;
}
