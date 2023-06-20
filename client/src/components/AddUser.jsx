import { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
  FormHelperText
} from "@mui/material";
import {addUser} from '../service/api'
import {useNavigate} from 'react-router-dom';


const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultvalue = {
  name: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultvalue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    await addUser(user);
      navigate('/all');
  }

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
        <FormHelperText style={{color: "red"}}>Name is Required</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" required />
        <FormHelperText style={{color: "red"}}>Emai is Required</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" required />
        <FormHelperText style={{color: "red"}}>Phone is Required</FormHelperText>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> AddUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
