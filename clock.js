class Clock {
    constructor() {
      // 1. Create a Date object.
      let date = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      // 3. Call printTime.
      
      // 4. Schedule the tick at 1 second intervals.
        // window.setTimeout(this._tick , 1000);
    }

    runClock() {
        // console.log(this);
        // debugger
        // let that = this;
        // setInterval(that._tick , 1000); //this



        let boundTick = this._tick.bind(this) //this works
        setInterval(boundTick , 1000);
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      debugger
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
      // Use console.log to print it.
     
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds += 1;
        if (this.seconds === 60){
            this.seconds = 0;
            this.minutes += 1;
            if(this.minutes === 60){
                this.minutes = 0;
                this.hours += 1;
                if(this.hours === 25){
                    this.hours = 0;

                }
            }
        };
        // debugger
        this.printTime();
    }
  }
  
  const clock = new Clock();
  clock.runClock();