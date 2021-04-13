import '../App.css';

function Filter() {
 

  return (
    <div className="filter">
      <div className="filter_header">
          <button className="filter_btn">Show me</button>
          <button className="filter_btn huge_margin_left">Show all</button>
      </div>

      <div className="filter_row">
          <button className="filter_btn grey_btn">White</button>
          <button className="filter_btn grey_btn red_margin">Red</button>
          <button className="filter_btn grey_btn sparkling_margin">Sparkling</button>
      </div>

      <div className="filter_row">
          <label>Order By</label>
          <button className="filter_btn grey_btn price_filter">Price</button>
          <button className="filter_btn grey_btn vintage_margin">Vintage</button>
      </div>


    </div>
  );
}

export default Filter;
