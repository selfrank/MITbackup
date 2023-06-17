function SignUp(){
    function handle(){
        console.log(document.getElementById('year').value);
    }

    return (
        <>
        <select id = "year">
            <option>Freshman</option>   
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>
        <div>Name</div>
        <input type="text" />
        <div>Email</div>
        <input type="text" />
        <div>Password</div>
        <input type="text" />  
        <div><input type="checkbox" /> 
            Rememeber me
        </div>
        <button onClick={handle}>Submit</button>    
        </>
    );
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)