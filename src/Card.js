import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Card = ({ cardData }) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {cardData.titleTop}
          </h5>
          <h6 className="card-price text-center">
            {cardData.symbol}
            {cardData.money}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {cardData.feature.map((el) => {
              return (
                <li className={el.isEnabled === false ? "text-muted" : ""}>
                  <span className="fa-li">
                    {el.isEnabled === false ? (
                      <FontAwesomeIcon icon={faTimes} />
                    ) : (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </span>
                  {el.isBold === true ? (
                    <b>{el.title}</b>
                  ) : (
                    <span
                      style={
                        el.Bolded === true
                          ? { fontWeight: "bold" }
                          : { fontWeight: "normal" }
                      }
                    >
                      {el.title}
                    </span>
                  )}
                  {el.Bolded === true ? " Free Subdomains" : " "}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

