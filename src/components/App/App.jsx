import Section from "../Section/Section";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import { FormSet } from "./App.styled";

export default function App() {
  return (
    <FormSet>
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>

      <Section title={"Contacts"}>
        <Filter />
        <ContactList />
      </Section>
    </FormSet>
  );
}
