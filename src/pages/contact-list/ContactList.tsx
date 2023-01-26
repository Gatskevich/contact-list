import { useEffect, useState } from 'react';
import { IUserData } from '../../interfaces/interfaces';
import { getContactList } from '../../services/api';

function ContactList() {
  const [data, setData] = useState<IUserData[]>([]);

  useEffect(() => {
    getContactList().then((res) => {
      setData(res.data);
    });
  }, []);

  return <div className='contact-list'></div>;
}

export default ContactList;
