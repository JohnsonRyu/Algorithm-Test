import React from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

const OrderPage = (props: RouteComponentProps) => {
  const query = queryString.parse(props.location.search);
  console.warn(query);
  console.warn(props.location);

  return (
      <div>
          <h2>{query.code}</h2>
      </div>
  );
}

export default OrderPage