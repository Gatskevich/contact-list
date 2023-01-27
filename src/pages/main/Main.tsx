import { useEffect, useState } from 'react';
import ContactList from '../../components/contact-list/ContactList';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import { IUsersData } from '../../interfaces/interfaces';
import { getContactList } from '../../services/api';

const maxNumberItems = 33;

function Main() {
  const [data, setData] = useState<IUsersData[]>([]);
  const [dataShow, setDataShow] = useState<IUsersData[]>([]);

  const filterContentByFullName = (name: string) => {
    if (name === null || name === '')
      setDataShow(data.slice(0, maxNumberItems));

    const searchText = name.toLowerCase();
    const searchResult = data.filter(
      (user: IUsersData) =>
        user.first_name.toLowerCase().includes(searchText) ||
        user.last_name.toLowerCase().includes(searchText),
    );

    setDataShow(searchResult.slice(0, maxNumberItems));
  };

  useEffect(() => {
    getContactList().then((res) => {
      const dataSorted = res.data.sort((a: IUsersData, b: IUsersData) => {
        if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
        if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
        return 0;
      });

      setData(dataSorted);
      setDataShow(dataSorted.slice(0, maxNumberItems));
    });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <Search onChange={(value: string) => filterContentByFullName(value)} />
      <ContactList data={dataShow} />
    </div>
  );
}

export default Main;
