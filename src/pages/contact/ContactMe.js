import React, { useEffect, useState } from "react";
import BrandLoader from "../../components/brand-loader/BrandLoader";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return <>{loading ? <BrandLoader /> : <div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>}</>;
};

export default ContactMe;
