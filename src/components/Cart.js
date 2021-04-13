import '../App.css';

function Filter() {
 

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="title">Wine Shop</h1>
          <span className="link_text">wineshop.com</span>
      </header>

      <div className="items_grid">
         <Item case_cost={200} bottle_cost={250} name={"Reisling"}/>
         <Item case_cost={200} bottle_cost={250} name={"Reisling"}/>
      </div>


    </div>
  );
}

export default Filter;
