let isVisible = false;

const toggleDetails = () => {
    isVisible = !isVisible;
    renderApp();
}

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
             <h1> Visibility Toggle </h1>
             <button onClick={toggleDetails}> {(isVisible) ? "Hide details" : "Show details"} </button>
             {(isVisible) && <p>Hey. These are some details you can see</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}


renderApp();