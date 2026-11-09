import { useContext, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

import { StoreContext } from "../context/StoreContext";

const VerifyPayment = () => {
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verify = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/verify`,
        { success, orderId },
        { withCredentials: true }
      );

      navigate(response.data.success ? "/myorders" : "/");
    } catch {
      navigate("/");
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <section
      role="status"
      className="wrap flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center"
    >
      <Loader2 className="size-8 animate-spin text-primary" />
      <p className="text-lg text-muted-foreground">Confirming your payment…</p>
    </section>
  );
};

export default VerifyPayment;
