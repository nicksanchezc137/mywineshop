import '../App.css';

function Filter(props) {
 

  return (
    <div className="filter">
      <div className="filter_header">
          <button onClick = {props.onShowFiltered} className="filter_btn">Show me</button>
          <button onClick = {props.onShowAll} className="filter_btn huge_margin_left">Show all</button>
      </div>

      <div className="filter_row">
          <button onClick = {props.onShowWhite} className="filter_btn grey_btn">White</button>
          <button onClick = {props.onShowRed} className="filter_btn grey_btn red_margin">Red</button>
          <button onClick = {props.onShowSparkling} className="filter_btn grey_btn sparkling_margin">Sparkling</button>
      </div>

      <div className="filter_row">
          <label>Order By</label>
          <button onClick = {props.onOrderByPrice} className="filter_btn grey_btn price_filter">Price</button>
          <button onClick = {props.onOrderByVintage} className="filter_btn grey_btn vintage_margin">Vintage</button>
      </div>


    </div>
  );
}

export default Filter;
