import { Container, Stack, Button } from "@mui/material";

const HandsButton = (props) => {
  return (
    <Button
      variant="outlined"
      onClick={() => userClick(choice.name)}
    >
      <p>{props.choice.name}</p>
      <img src={props.choice.img} alt='its broken' height={125} width={125} />
    </Button>
  );
};
export default HandsButton;