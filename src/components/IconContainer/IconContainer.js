import "./IconContainer.scss";

function IconContainer(props) {
  return (
    <>
      <div className="main__icon-wrapper">
        <div className="main__icon-container">
          <div className="main__icon-1">
            <img
              className="main__icon-gloves"
              src={props.glovesIcon}
              alt="boxing gloves icon"
            ></img>
            <p className="main__icon-p">fundamentals</p>
          </div>
          <div className="main__icon-2">
            <img
              className="main__icon-bag"
              src={props.boxingBag}
              alt="boxing bag icon"
            ></img>
            <p className="main__icon-p">heavy-bag</p>
          </div>
          <div className="main__icon-3">
            <img
              className="main__icon-dumbell"
              src={props.boxerIcon}
              alt="dumbell icon"
            ></img>
            <p className="main__icon-p">sparring</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconContainer;
