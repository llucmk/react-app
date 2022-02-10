console.log('App.js is running!');

// JSX - Javascript XML
var app = {
    title: 'What do we do today?',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}


const addingOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
}

const removeAllOptions = () => {
    app.options = [];

    renderApp();
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' + app.options.length : 'No options'}</p>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
            {
                app.options.map((option) =>  <li key={`${option}-${Math.random()}`}>{option}</li>)
            }

            </ol>
            <form onSubmit={addingOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}





const appRoot = document.getElementById('app');
renderApp();
