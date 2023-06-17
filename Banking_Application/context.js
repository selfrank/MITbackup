

const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);


function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body} 
          {props.status && (<div id='createStatus'>{props.status}</div>)}
          
        </div>
      </div>      
    );    
  }

  function BankForm(data){
    // function classes(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);  
    //   return 'bankForm mb-3 '+ show + status + name + email + password;
    // }

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handle(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }     console.log(name,email,password);
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
    console.log(name);
    return (
      <Card
      bgcolor={data.bgcolor}
      header={data.header}
      title={data.title}
      handle={data.handle}
      status={status}
      body=
      {show ? (  
                <>
                <p>{data.nameLabel}
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}></input>
                Email
                {(<input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}>{data.email}</input>)}
                Password{(<input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}>{data.password}</input>)}
                <br></br><button type="submit" className="btn btn-light" onClick={handle}>{data.header}</button>
                <button type="in-line" className="btn" style={{btnBorderColor: "transparent"}}> 
                <a href={data.secondaryLink} style={{color:"black", paddingLeft: 25, fontStyle: "italic"}}>{data.secondaryReference}</a>
                </button>
                </p></>
              ):(
                <>
                <h5>{data.successMessage}{name}</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>{data.successButton}
                <a href={data.successButtonLink}></a>
                </button>
                </>
              )}
      />
    )
  }

