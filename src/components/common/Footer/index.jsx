import { CopyrightText, DesignText, FooterContainer, FooterSection } from "./styles";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const DesingBy = "Design by Alexis Jiménez C.";

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <FooterSection>
      <FooterContainer>
        <CopyrightText>&copy; Copyright {currentYear}. All rights reserved</CopyrightText>
        <DesignText>{DesingBy}</DesignText>
      </FooterContainer>
    </FooterSection>
  );
}
