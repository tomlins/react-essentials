import './App.css';
import profilePic from './profile_pic.jpg'

const dishes = [
  "Chicken Curry",
  "Fish and chips",
  "Wagyu steak"
];

const snacks = [
  "cheese and crackers",
  "noodles",
  "burger"
];


// This creates an object array from dishes const with an id and title
// This will prevent compiler warning that your array const does not have
// and index/id
const dishObjects = dishes.map( (dish, i) => ({id: i, title: dish}));
const snackObjects = snacks.map( (snack, i) => ({id: i, title: snack}));



function App(args) {
  return (
    // Here, we could remove the div and replace with a fragment,
    // <> </>, this means you would loose the style in this case
    <div className="App">
      <Header myName="Willy"/>

      <Main dishes={args.dinner ? dishObjects : snackObjects}/>

      <Footer year={new Date().getFullYear()} message="Thanks for viewing"/>
    </div>
  );
}

function Header(args) {
  console.log(args.myName)
  return (
    <header>
      <h1>{args.myName}'s Awesome Coding</h1>
    </header>
  )
}

function Main(args) {
  return (
    <section>

      <p>Welcome to learning to develop using React</p>

      {/* note for accessabilitiy, you need an alt tag. Sscreen readers will
          will announce images no need to add such to the text of the tag else
          you will get a compiler error. Thats neat. 
      */}
      <img
        src={profilePic}
        height="200"
        alt="Jason Tomlins"
      />

      <p>Great coders eat...</p>

      {/* Note the style below uses JSX and not css notation of text-align */}
      <ul style={{textAlign:"left"}}>
        {args.dishes.map( (dish) => 
          <li key={dish.id}>{dish.title}</li>
        )}
      </ul>

    </section>
  )
}

function Footer(args) {
  console.log(args.year, args.message)
  return (
    <footer>
      <p>(c){args.year} - {args.message}</p>
    </footer>
  )
}

// function Unused() {

    // This functionhas been commented out because
    // unused functions generate compilation error

//   return (
//     <section>
//       <p>This is not used</p>
//     </section>
//   )
// }

export default App;
