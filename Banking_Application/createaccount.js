function CreateAccount(){
  const ctx = React.useContext(UserContext);  

  function handle(data){
    ctx.users.push({name:data.name, email:data.email, password:data.password, balance:100});
    console.log(data);
    return true;
  
  }

  return (
    <BankForm
      bgcolor="primary"
      header="Create Account"
      handle={handle}
      hideAmount={true}
      secondaryLink="#/Login/"
      secondaryReference="Login"
      successButton="Add another account"
      successMessage="Welcome "
      nameLabel="Name"

    />
  )
}