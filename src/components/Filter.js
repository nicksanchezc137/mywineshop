import '../App.css';

function Filter() {
 

  return (
    <div className="filter">
      <div className="filter_header">
          <button className="filter_btn">Show me</button>
          <button className="filter_btn">Show all</button>
      </div>

      <div>
          <button className="filter_btn grey_btn">White</button>
          <button className="filter_btn grey_btn">Red</button>
          <button className="filter_btn grey_btn">Sparkling</button>
      </div>

      <div>
          <label>Order By</label>
          <button className="filter_btn grey_btn">Price</button>
          <button className="filter_btn grey_btn">Vintage</button>
      </div>


    </div>
  );
}

export default Filter;
