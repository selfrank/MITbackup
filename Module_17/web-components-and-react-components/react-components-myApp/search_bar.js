
function SearchBar  ({ books, setSearchResults}) {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(books)
        const resultsArray = books.filter(books => books.title.includes(e.target.value) ||
        books.author.includes(e.target.value))

        setSearchResults(resultsArray)
    }
    return(
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input className = "search_input"
                type="text"
                onChange={handleSearchChange}
                />
                <button className = "search__button">

                </button>
            </form>
        </header>
    )
} 
