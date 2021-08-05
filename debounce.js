class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}


const searchBar = new SearchBar();

// const queryForHelloWorld = () => {
//     searchBar.type("h");
//     searchBar.type("e");
//     searchBar.type("l");
//     searchBar.type("l");
//     searchBar.type("o");
//     searchBar.type(" ");
//     searchBar.type("w");
//     searchBar.type("o");
//     searchBar.type("r");
//     searchBar.type("l");
//     searchBar.type("d");
// };

// queryForHelloWorld();


Function.prototype.myDebounce = function(interval) {
    // let time;
    // return function resetter () {
    //     time = 0;
    // };
    // clearInterval(interval);
    // setTimeout(resetter, interval);
    // let tooSoon = false;
    let t;



    return () => {
        console.log("hi")

        stop();
        // if (!tooSoon) {
            // tooSoon = true;
        t = setTimeout(() => {
            this()
            // tooSoon = false;
        }, interval);

        function stop() {
            clearTimeout(t);
        }
        // }
    }

    // return t;

}


// searchBar.search = searchBar.search.myDebounce(500);

// something = function() {
//     // let i = 10;
//     let arr = [];
//     for (let i = 0; i < 10000000; i++) {
//         arr.push((i * i));
//     }
//     return arr
// }

searchBar.search = searchBar.search.myDebounce(100);
// searchBar.search = debounce(searchBar.search, 


const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    // console.log("OISDBVOAWDBNFAWIOREFN")
    // console.log(something());
    // let i = 0;
    // while (i < 1000000000) {

    //     i += 1;
    // }
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

queryForHelloWorld();