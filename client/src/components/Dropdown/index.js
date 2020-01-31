import React, { useState } from "react";
import "./style.css";
import onClickOutside from "react-onclickoutside";

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }
  //   Dropdown.handleClickOutside = () => {
  //     console.log(props.label, "click outside");
  //     setOpen(false);
  //   };

  const style = open ? "dropdown is-active" : "dropdown";
  const menuStyle = open ? "dropdown-menu block" : "dropdown-menu";

  return (
    <div className="field">
      <p className="control">
        <span key={props.label}>{props.label}: </span>
        <div className={style}>
          <div className="dropdown-trigger">
            <button
              onClick={toggle}
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
            >
              <span key={props.buttonLabel}>{props.buttonLabel}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className={menuStyle} id="dropdown-menu2" role="menu">
            <div className="dropdown-content">
              {props.items.map(item => (
                <div
                  className={"Size"}
                  onClick={() => {
                    console.log("clicked")
                    props.onClick(props.label, item
                    )
                    props.labelOnchange(item);
                  }}
                    
                  key={props.item}
                  className="dropdown-item"
                >
                  <p>
                    <strong>{item}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}
// const clickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside
// };

export default Dropdown;
