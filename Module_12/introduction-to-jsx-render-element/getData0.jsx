const App = () => {
  const handler = () => alert('hello world');
  return <Mybutton onClick={handler} index ="9">
    </Mybutton>;
};
const Mybutton = ({onClick}) => {
  let {Button: aButton} = ReactBootstrap;
  return <aButton onClick = {onClick}>Click Me</aButton>;
}

/*Destructure an object
let product = { name: "pear", cost: 2, inStock:7};
let {name, inStock} = product;
let item = { name,inStock};
const handler = () => alert(`name: ${item.name} instock: ${item.inStock}` )
return <button onClick={handler}>Click Me</button>;

//---------------
*/
ReactDOM.render(<App />, document.getElementById("root"));
