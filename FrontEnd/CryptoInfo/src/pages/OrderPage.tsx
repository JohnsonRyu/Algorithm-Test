import React from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

// interface IOrderPageProps {
//   location?: string;
//   match?: string;
// }

const OrderPage = (props: RouteComponentProps) => {
  const query = queryString.parse(props.location.search);
  console.warn(query);
  console.warn(props.location);

  return (
      <div>
          <h2>About dqwdwqdq</h2>
      </div>
  );
}

export default OrderPage