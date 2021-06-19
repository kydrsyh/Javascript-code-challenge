// speed limit 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(75) // OK
// checkSpeed(70) // OK
// checkSpeed(71) // OK
// checkSpeed(75) // Point 1
// checkSpeed(76) // Point 1
// checkSpeed(80) // Point 2
// checkSpeed(180) // Suspended Driver License

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerHour = 5
    const pointLimit = 12

    if (speed <= speedLimit) {
        console.log('OK');
    } else if (speed % 5 === 0 || speed > speedLimit) {
        let point = Math.floor((speed - speedLimit) / kmPerHour)
        if (point >= pointLimit) {
            console.log('licence suspended');
        } else return console.log(`${point} points`);
    } else console.log('OK');
}