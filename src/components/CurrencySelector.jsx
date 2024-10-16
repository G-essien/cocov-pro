
import { HiOutlineStar, HiStar } from "react-icons/hi2";

// CurrencySelector component allows user to select currencies and manage favorites
const CurrencySelector =({currencies, currency, setCurrency, favorites, handleFavorite, title =""}) => {

  // Check if the current currency is in the favorites list
  const isFavorite = current => favorites.includes(current); // When selected as favorite currency, add to the favorite list of currency

  return (
    <div>
      {/* Label for the currency selector */}
      <label htmlFor={title} >{title}</label>
    
      <div>
        {/* Dropdown to select currency */}
        <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
          {/* Loop through favorites and display them as the first options */}
          {favorites.map((currency) => {
            return( 
              <option value={currency} key={currency}>
                {currency}
              </option>
          )})}
          <hr />
          {/* Loop through non-favorite currencies and display them */}
          {currencies
            .filter((c) => !favorites.includes(c))  // Filter the currencies selected as favorites from the list of currencies
            .map((currency) => {
            return( <option value={currency} key={currency}>
              {currency}
            </option>);
          })}
        </select>

          {/* Button to toggle favorite status of the currently selected currency */}
          {/* Click on the star icon to select a currency as favorite */}
        <button onClick={() => handleFavorite(currency)}> 
          {/* Display a filled star if the currency is a favorite, otherwise show an outlined star */}
          {isFavorite(currency) ? <HiStar /> : <HiOutlineStar />} 
        </button> 
      </div>
    </div>
  );
}

export default CurrencySelector;
