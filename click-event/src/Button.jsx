
function Button() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    const handleClick = (e) => e.target.textContent = "OUCH 🤕";


    // return(<button onClick={() => handleClick("Jehan")}>Click Me😊</button>)
    return(<button onDoubleClick={(e) => handleClick(e)}>Click Me😊</button>)
}
export default Button