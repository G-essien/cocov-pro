

import CurrencySelector from "./CurrencySelector";
import { HiArrowsRightLeft } from "react-icons/hi2";
import AmountInput from "./AmountInput";


function Currencyconverter() {

  return (
    <div>
    
      <div>
          <AmountInput />

          {/* Input field for entering the amount to convert */}
          <input type="number"/> <br />

        <div>
          {/* CurrencySelector component for selecting the currency to convert from */}
          <CurrencySelector />

          {/* Button to swap the selected currencies */}
          <div>
            <button>
              <HiArrowsRightLeft />
            </button>
          </div>

          {/* CurrencySelector component for selecting the currency to convert to */}
          <CurrencySelector />
        </div>
      </div>

      {/* Display the converted amount if available */}
      <div>
         
      </div>

      <div>
        {/* Button to trigger the conversion, with a loading animation if converting */}
        <button>Convert</button>
      </div>
    </div>
  )
}

export default Currencyconverter;
