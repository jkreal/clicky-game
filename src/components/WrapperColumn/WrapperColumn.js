import React from "react";
import "./WrapperColumn.css";

const WrapperColumn = props => <div className="col-md">{props.children}</div>;

export default WrapperColumn;