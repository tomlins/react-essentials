import { useEffect, useReducer, useState } from 'react';
import './App.css';
import profilePic from './profile_pic.jpg'
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, CompanyHistory } from "./pages"

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


// React function names must start with an uppercase char
function App() {

  // useState allows you to set state of an attribute
  // define a const with the attribute name followed by
  // the function to call to set state. The arg passed
  // to useState is its initial value
  const [isDinnerTime, setIsDinnerTime] = useState(false);

  // The `useEffect` Hook is useful to perform additional work behind the scenes,
  // without affecting the appearance of the webpage.
  // Note the use of ` in the console log statement instead of qoutes or apostraphe
  useEffect( () => {
    console.log(`Currently dinner time -> ${isDinnerTime}`);
  });

  return (
    // Here, we could remove the div and replace with a fragment,
    // <> </>, this means you would loose the style in this case
    <div className="App">

      {/** This defines the urls the following tags will be rendered
       * not that because React is an SPA and we have other content in this
       * function then the tags below will be rendered along with
       * the remaining content in this function. It does not
       * render a new page in the traditional sense. If we were to
       * remove everything outside of the <Routes> tage then it would
       * give the impression of a new page. We would include all the
       * content in the function relating to that tag.
       */}
      <Routes>
        <Route path="/"  element={<Home />}/>

        <Route path="/about" element={<About />}>
          <Route path="/about/history" element={<CompanyHistory />}/>
        </Route>

        <Route path="/events"  element={<Events />}/>

        <Route path="/contact"  element={<Contact />}/>
        
        <Route path="*"  element={<Whoops404 />}/>
      </Routes>

      <Header myName="Willy"/>

      <Main dishes={isDinnerTime ? dishObjects : snackObjects}/>

      <button onClick = {() => setIsDinnerTime(false)}>Lunch</button>
      <button onClick = {() => setIsDinnerTime(true)}>Dinner</button>
 
      <Footer year={new Date().getFullYear()} message="Thanks for viewing"/>

    </div>
  );
}

function FetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( () => {

    setLoading(true);

    fetch(`https://api.github.com/users/tomlins`)
    .then( (response) => response.json())
    .then(setData)
    .then(setLoading(false))
    .catch(setError);

  }, []);

  if (isLoading) return <h1>Loading...</h1>

  if (error) {
    console.log(`Error occured -> ${error}`);
    return (
      <p>Error</p>
    )
  }
  

  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>

      {/* note for accessabilitiy, you need an alt tag. Sscreen readers will
          will announce images no need to add such to the text of the tag else
          you will get a compiler error. Thats neat. 
        */}
      <img height="200" alt={data.login} src={data.avatar_url} />

    </div>
  )
  
}

function Header(args) {
  return (
    <header>
      <h1>{args.myName}'s Awesome Coding</h1>
    </header>
  )
}

function Main(args) {
  return (
    <section>

      <p>Welcome to learning to develop with React</p>

      <FetchData />

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

  // A reducer saves you writing a separate function for setting
  // the value of the attribute. The first arg is the code to execute,
  // the second arg is the attributes initial state.
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )

  return (
    <footer>
      <p>
        <input type="checkbox" value={checked} onChange={toggle}/>
        I {checked ? "agree" : "do not agree"} to the terms and conditions
      </p>

      <p>
        (c){args.year} - {args.message}
        <img src={profilePic} height="20" alt="Jason Tomlins" />
      </p>
    </footer>
  )
}

// function Unused() {

//    // This function has been commented out because
//    // unused functions/values/attribs generate compilation error

//   return (
//     <section>
//       <p>This is not used</p>
//     </section>
//   )
// }

export default App;
