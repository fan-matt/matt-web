class Timer {
    constructor(tickRate) {
        this.tickRate = tickRate;
        this.tick = false;
        this.stop = false;
    }

    start() {
        let startTime = Date.now();

        while(!this.stop) {
            if(Date.now() - startTime >= tickRate) {
                this.tick = true;
                startTime = Date.now();
            }
            // Don't reset yet! To ensure that our tick goes through, reset only after
            // we check for it! We're more concerned about getting stuff done than accuracy
        }
    }

    tick() {
        let tickState = this.tick

        if(this.tick) {
            this.tick = false;
        }

        return tickState;
    }

    stop() {
        this.stop = true;
    }
}


export default Timer;