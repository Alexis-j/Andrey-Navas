import "../styles/footer.css";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const diseno = "Design by Alexis Jiménez C.";

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section id="footer">
      <div className="footer">
        <span className="copyright">
          &copy; Copyright {currentYear}. All rights reserved | <span className="design">{diseno}</span>
        </span>
      </div>
    </section>
  );
}
