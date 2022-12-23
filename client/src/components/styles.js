import styled from 'styled-components';
export const ContentWrapper = styled.div`
  // border: 1px solid black;
  width: 375px;
  @media (max-width: 425px) {
    width: 90%;
  }
`;
export const ContentBox = styled.div``;
export const Heading = styled.div`
  font-weight: 700;
  font-size: ${(props) => (props.smaller ? '24px' : '28px')};
  line-height: 32px;
  letter-spacing: -0.05em;
  color: #333333;
  margin-top: 9px;
  margin-bottom: ${(props) => (props.smaller ? '0' : '9px')};
`;
export const SubHeading = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #333333;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;
export const SubContent = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #3f3f3f;
`;

export const Button = styled.button`
  width: 100%;
  height: ${(props) => (props.height ? '40px' : '56px')};
  background-color: ${(props) => props.color || '#F2C94C'};
  border: none;
  color: white;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  font-family: 'Epilogue';
  margin: ${(props) => (props.margin ? '12px 0' : '0')};
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #333333;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 16px 16px;
  gap: 4px;
  width: 90%;
  margin-top: 8px;
  margin-bottom: 16px;
  background: #f4f4f4;
  border-radius: 8px;
  border: none;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    opacity: 0.5;
  }
`;

export const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  background: #ffffff;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const NewGameButton = styled.button`
  z-index: 100;
  position: fixed;
  margin-left: 240px;
  bottom: 30px;
  @media (max-width: 426px) {
    margin-left: 0;
    right: 30px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;
  width: 124px;
  height: 40px;
  background: #270f36;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
`;

export const Board = styled.div`
  margin-top: 20px;
  background: #ffe79e;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 50px;
`;

export const Header = styled.div`
  height: 50px;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
`;

export const PlayArea = styled.div`
  display: grid;
  height: 300px;
  gap: 6px;
  grid-template-columns: auto auto auto;
`;
export const LoadingSpinner = () => {
  return <div>LoadingSpinner</div>;
};
