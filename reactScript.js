function Product() {
  const [increase, setIncrease] = React.useState(0);

  function incNum() {
    setIncrease(increase + 1);
  }

  return (
    <div className="w-56 h-56 rounded-md gap-3 text-center bg-blue-500 m-4 flex flex-col justify-center items-center">
      <h3 className="text-7xl">{increase}</h3>
      <button onClick={incNum} className="bg-blue-950 cursor-pointer px-3 py-1 rounded-md">Increase</button>
    </div>
  );
}

ReactDOM.render(
  <>
    <Product />
    <Product />
    <Product />
    <Product />
  </>, document.getElementById('koot'));