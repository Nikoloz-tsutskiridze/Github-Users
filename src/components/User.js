import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function User() {
  return <h2>search component</h2>;
}

export default User;
