const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);
  
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData
    });
  
    useEffect(() => {
      let didCancel = false;
      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await axios(url);
          if (!didCancel) {
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      };
      fetchData();
      return () => {
        didCancel = true;
      };
    }, [url]);
    return [state, setUrl];
  };
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        throw new Error();
    }
  };
  
  function App() {
    const { Fragment, useState, useEffect, useReducer } = React;
    const [query, setQuery] = useState("3");
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      "https://dog.ceo/api/breeds/image/random/3",
      {
        message: []
      }
    );
  
    return (
      <Fragment>
        <form
          onSubmit={event => {
            doFetch(`https://dog.ceo/api/breeds/image/random/${query}`);
  
            event.preventDefault();
          }}
        >
          <input
            type="number"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  
        {isError && <div>Something went wrong ...</div>}
  
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ul>
            {data.message.map(item => (
              <li key={item}>
                <a href={item}><img src={item} style={{width: 250}}></img></a>
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
  
  // ========================================
  ReactDOM.render(<App />, document.getElementById("root"));
  