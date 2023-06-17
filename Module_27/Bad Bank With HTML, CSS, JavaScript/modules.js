var ui = {};


ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#createAccount" onclick="loadCreateAccount()" id="createAccount">Create Account </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>
</nav>
`;
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.home = `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src='bank.png' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Velocibank</h5>
    <p class="card-text">Welcome to my bank. A bank for velociraptors, by velociraptors, and with velociraptors.</p>
    <a href="#" class="btn btn-primary" onclick="loadLogin()">Login</a>
  </div>
</div>
`;
ui.createAccount=`
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Create Account</div>
  <div class="card-body">
    Name<br>
    <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
    Email Address<br>
    <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
    Password<br>
    <input type="input" class="form-control" id="password" placeholder="Enter password"><br>
    <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
    <div id='createStatus'></div>
  </div>
</div>
`;

ui.allData = `
<h5>All Data in Store</h5>
<button type = "button" class="btn btn-secondary" onclick="allData()">Show All Data</button>
<div id="allDataStatus"></div>
`;

var defaultModule= function(){
    target.innerHTML = ui.home;
};

var loadCreateAccount = function(){
target.innerHTML = ui.createAccount;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();