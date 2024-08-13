import styled from "@emotion/styled";

export const FooterSection = styled.section`
  #footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-links);
    text-align: center;

    @media (max-width: 480px) {
      flex-direction: column;
      font-size: 1.4rem;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-links);
  text-align: center;

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 1.4rem;
  }
`;

export const CopyrightText = styled.span`
  &::after {
    content: " | ";
  }
`;

export const DesignText = styled.span`
  @media (max-width: 480px) {
    margin-bottom: 5px; /* Ajusta el espacio entre líneas */
  }
`;
