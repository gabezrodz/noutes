import styled from "styled-components";

export const Form = styled.form`
  margin-top: 1rem;
  position: relative;
  text-align: center;
`;
export const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  textarea {
    font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;
  }

  textarea:focus {
    background-color: #cbf8f8;
    outline-color: teal;
  }
`;

export const Actions = styled.div`
  button {
    font-size: 1.25rem;
  }
`;
