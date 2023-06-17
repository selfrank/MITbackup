function App(){
    const [data, setData] = React.useState();    
    const [loaded, setLoaded] = React.useState(false);
    const [query, setQuery] = React.useState("");
    const { Fragment, useState, useEffect, useReducer } = React;

   
 
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);
    console.log('does search work?:', query);

    return (<>
     <Fragment>
     <div className="container">
    
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Navbar</a>
            <form className="form-inline"
           // onChange={event => setQuery(event.target.value)}
        >
                <input className="form-control mr-sm-2" 
                value = {query}
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange={event => setQuery(event.target.value)}></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
            <h1>React Components</h1>    
            {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
        </div> </Fragment>       
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
