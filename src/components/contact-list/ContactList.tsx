import './ContactList.scss';
import Avatar from '@mui/material/Avatar/Avatar';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import { useCallback, useState } from 'react';
import { IUsersData } from '../../interfaces/interfaces';

interface ContactListProps {
  data: IUsersData[];
}

function ContactList({ data }: ContactListProps) {
  const [dataSelected, setDataSelected] = useState<IUsersData[]>([]);
  const [dataSelectedId, setDataSelectedId] = useState<string[]>([]);

  const handelSelectedItem = useCallback(
    (selectedUser: IUsersData) => {
      const index = dataSelected.findIndex((x) => x.id === selectedUser.id);
      let newDateSelected = [];

      if (index === -1) {
        newDateSelected = [...dataSelected, selectedUser];
        setDataSelected(newDateSelected);
        setDataSelectedId([...dataSelectedId, selectedUser.id]);

        console.log(newDateSelected);
      } else {
        const newDateSelectedId = [...dataSelectedId];
        newDateSelected = [...dataSelected];

        newDateSelected.splice(index, 1);
        newDateSelectedId.splice(index, 1);
        setDataSelected(newDateSelected);
        setDataSelectedId(newDateSelectedId);

        console.log(newDateSelected);
      }
    },
    [dataSelected],
  );

  return (
    <div className='contact-list'>
      {data.length ? (
        <List
          dense
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {data.map((value: IUsersData) => {
            const labelId = `checkbox-list-secondary-label-${value.id}`;
            return (
              <ListItem
                key={value.id}
                alignItems='center'
                secondaryAction={
                  <Checkbox
                    edge='end'
                    checked={dataSelectedId.includes(value.id)}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton
                  onClick={() => handelSelectedItem(value)}
                  className='d'
                >
                  <ListItemAvatar>
                    <Avatar alt={`Avatar`} src={value.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={`${value.first_name} ${value.last_name}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
}

export default ContactList;
