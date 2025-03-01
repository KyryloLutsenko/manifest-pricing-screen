import React from "react";
import "./SubscriptionNotice.css";

const SubscriptionNotice: React.FC = () => {
  return (
    <div className="subscription-notice">
      <p>Automatic renewal of $29.99 per month.</p>
      <p>
        You may cancel by{" "}
        <a href="mailto:support@justdone.ai">support@justdone.ai</a>. Our goal
        is customer satisfaction
      </p>
    </div>
  );
};

export default SubscriptionNotice;
