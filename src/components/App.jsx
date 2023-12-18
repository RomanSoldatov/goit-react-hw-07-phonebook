import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <Layout>
        <Section title="Phonebook">
          <ContactForm />
          <Header title="Contacts" />
          <Filter />
          <ContactList />
        </Section>
        <ToastContainer />
      </Layout>
      <GlobalStyle />
    </>
  );
};
