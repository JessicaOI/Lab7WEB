import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'

const App = () => {
    return(
        <>
            <Header title = "hello react"/>
        </>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
