

function CurrencySelector() {




  return (
    <div>
      {/* Label for the currency selector */}
      <label></label>
    
      <div>
        {/* Dropdown to select currency */}
        <selecton>
          {/* Loop through favorites and display them as the first options */}
          
              <option>
              </option>
          <hr />
          {/* Loop through non-favorite currencies and display them */}
            <option>
            </option>
        
        </selecton>

          {/* Button to toggle favorite status of the currently selected currency */}
          {/* Click on the star icon to select a currency as favorite */}
        <button> 
          {/* Display a filled star if the currency is a favorite, otherwise show an outlined star */}
        </button> 
      </div>
    </div>
  );
}

export default CurrencySelector;
