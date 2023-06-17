

function Login(){

 

  const ctx = React.useContext(UserContext);  

  function handle(data){
    ctx.users.push({name:data.name, email:data.email, password:data.password, balance:100});
    return true;
  }


  return (

    <BankForm
      bgcolor="secondary"
      header="Login"
      title="Sign In Below"
      handle={handle}
      hideAmount={true}
      successButton="Check Balance"
      successButtonLink="#/Balance"
      secondaryLink="#/CreateAccount/"
      secondaryReference="Create Account"
      successMessage="Welcome back "
      nameLabel= "Name"
    />
  ) 

}