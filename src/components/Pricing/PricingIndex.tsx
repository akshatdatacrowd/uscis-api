import { ImHome } from "react-icons/im";

const PricingIndex = () => {
  return (
    <>
      <div className="pricingHeading">
        <h1>Pricing</h1>
      </div>
      <div className="pricingOptionBtn">
        <p>Monthly</p>
        <div className="MonYearBtn">
          <div className="MonYearBtnBtn" />
        </div>
        <p>Yearly (20% Discount)</p>
      </div>
      <div className="subscriptionOptionsBox">
        <div className="suboptcontainer">
          <div className="subopticon">
            <ImHome size={40} />
            <p>Free</p>
          </div>
          <div className="suboptPrice">
            <p>$0</p>
            <p>No Hidden Cost</p>
          </div>
          <div className="suboptSignUpBtn">
            <p className="suboptSignUpBtnBtn">Sign Up</p>
          </div>
          <div className="suboptFeatures">
            <p className="suboptFt">100 API Calls / mo</p>
            <p className="suboptFt">100 API Calls / mo</p>
          </div>
        </div>
        <div className="suboptcontainer">
          <div className="subopticon">
            <ImHome size={40} />
            <p>Free</p>
          </div>
          <div className="suboptPrice">
            <p>$0</p>
            <p>No Hidden Cost</p>
          </div>
          <div className="suboptSignUpBtn">
            <p className="suboptSignUpBtnBtn">Sign Up</p>
          </div>
          <div className="suboptFeatures">
            <p className="suboptFt">100 API Calls / mo</p>
            <p className="suboptFt">100 API Calls / mo</p>
          </div>
        </div>
        <div className="suboptcontainer">
          <div className="subopticon">
            <ImHome size={40} />
            <p>Free</p>
          </div>
          <div className="suboptPrice">
            <p>$0</p>
            <p>No Hidden Cost</p>
          </div>
          <div className="suboptSignUpBtn">
            <p className="suboptSignUpBtnBtn">Sign Up</p>
          </div>
          <div className="suboptFeatures">
            <p className="suboptFt">100 API Calls / mo</p>
            <p className="suboptFt">100 API Calls / mo</p>
          </div>
        </div>
        <div className="suboptcontainer">
          <div className="subopticon">
            <ImHome size={40} />
            <p>Free</p>
          </div>
          <div className="suboptPrice">
            <p>$0</p>
            <p>No Hidden Cost</p>
          </div>
          <div className="suboptSignUpBtn">
            <p className="suboptSignUpBtnBtn">Sign Up</p>
          </div>
          <div className="suboptFeatures">
            <p className="suboptFt">100 API Calls / mo</p>
            <p className="suboptFt">100 API Calls / mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingIndex;
