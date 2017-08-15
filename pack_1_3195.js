function randomNumber() {
    //random delay between 0 and 10000 ms (0 and 10 seconds)
    let randomDelay = Math.floor(Math.random() * 10000);

    //random number between -50 and 50
    let randomNum = Math.floor(Math.random() * 100) - 50;

    //initial time of a random time interval
    let currentTime = new Date().getTime();

    while(new Date().getTime() <= currentTime + randomDelay) {}

    return randomNum;
}

console.log(randomNumber());
