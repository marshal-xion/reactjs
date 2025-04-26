


function MyButton() {
    return (
        <h2>Hello there</h2>,
        <button>Click me</button>
    );

}

// react component starts with a capital letter so MyButton M is capital for tag

export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}