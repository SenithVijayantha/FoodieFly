import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

import { StoreContext } from "../context/StoreContext";

const VerifyPayment = () => {
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const [loading, setLoading] = useState(true);
  //   console.log(success, orderId);

  const verify = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/verify`,
        { success, orderId },
        { withCredentials: true }
      );

      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <div>
      {loading && (
        <span className="loading loading-spinner text-primary"></span>
      )}
    </div>
  );
};

export default VerifyPayment;
