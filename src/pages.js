import React from "react"
import {Link, useLocation, Outlet} from "react-router-dom"

// Just a bunch of functions to demonstrate the use
// of Route and Routes tags
// It similates different pages but does not render a
// seperate page, merely inserts into current so if
// you already have content in your App.js page it
// will remain but with the addition of the content
// from the function below

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>

            <nav>
                <Link to="history">Company History</Link>
            </nav>

            {/** The <Outlet /> tag simply adds the content defined in
             * the /about/history link embeded in the <Route> tag for the About route
             * in App.js to this function meaning it will still display the Company
             * History link even though we are still on that 'page' */}
            <Outlet />
        </div>
    );

}

export function CompanyHistory() {
    return (
        <div>
            <h1>Company History</h1>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>Events</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>Page {location.pathname} does not exist</h1>
        </div>
    )
}