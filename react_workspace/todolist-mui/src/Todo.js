import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Checkbox, IconButton, Input, InputBase, ListItem, ListItemSecondaryAction, ListItemText, useStepContext } from "@mui/material";
import { useState } from "react";
import DeleteOutline from '@mui/icons-material/DeleteOutline'

function Todo({item, onDeleteItem, updateItem}) {
    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] = useState(item.title);

    const deleteItemHandler = (e)=>{
        // App.js의 onDeleteItem함수 호출
        onDeleteItem(item);
    }

    const onUpdateItem = (e)=>{
        setReadOnly(true);
        const currItem = {...item};
        currItem.title = titleData;
        currItem.done = !currItem.done;
        updateItem(currItem);
    }

    return (<>
        <ListItem>
            <Checkbox onClick={(e)=>{
                onUpdateItem();
            }} checked={item.done} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <ListItemText>
                <InputBase
                    type="text" 
                    inputProps={{"aria-label":"naked", readOnly: readOnly}}
                    id={item.id}
                    name={item.id}
                    multiline={true}
                    fullWidth={true}
                    onChange={(e)=>{setTitleData(e.target.value)}}
                    onClick={(e)=>{
                        setReadOnly(false);
                    }}
                    onKeyPress={(e)=>{
                            if(e.key === 'Enter') {
                                onUpdateItem();
                            }
                        }
                    }
                    value={titleData}></InputBase>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteItemHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </>);
}

export default Todo;