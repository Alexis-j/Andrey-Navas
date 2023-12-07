import "../styles/footer.css";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualizar el año actual
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section id="footer">
      <div className="footer">
          &copy; Copyright {currentYear}. All rights reserved | Design by Alexis Jiménez Castillo.
      </div>
    </section>
  );
}
