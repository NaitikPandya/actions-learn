import {useState} from 'react';
import {Button, TextField,List,ListItem,Checkbox,ListItemAvatar,ListItemButton,ListItemText,Avatar} from '@mui/material';
import './App.css';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [enteredText,setEnteredText] = useState('');
  return (
    <div className="App">
     <div className='AddItem'>
      <TextField value={enteredText} label="Item" inputProps={{
        'data-testid': 'itemTextInput'
      }} data-testid='itemTextf' onChange={(value) => {
        if(value.target.value){
          setEnteredText(value.target.value)
        }
      }} />
      <Button title='Add' variant='contained' data-testid='addButton' onClick={() => {
        if(enteredText){
          setTodoList(oldArray => [...oldArray,enteredText])
          setEnteredText('')
        }
      }}>Add</Button>
     </div>
     <div className='TodoList'>
     <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todoList.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>{value.slice(0,1)}</Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
     </div>
    </div>
  );
}

export default App;
