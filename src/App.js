import logo from "./logo.svg";
import "./App.css";
import contactData from "./contacts.json";
import { useState } from "react";

function App() {
  const firstFiveContacts = contactData.slice(0, 5);
  const remainingContacts = contactData.slice(5, contactData.length);

  const [contacts, setContacts] = useState(firstFiveContacts);
  const [contactsRemaining, setContactsRemaining] = useState(remainingContacts);

  const addRandomContact = () => {
    const randomNumber =
      Math.floor(Math.random() * contactsRemaining.length) + 1;

    const randomContact = contactsRemaining[randomNumber];

    // make a copy of the remaining contacts array
    let newContactsRemaining = [...remainingContacts];

    // remove random contact from the remaining contacts array
    newContactsRemaining.splice(randomNumber, 1);

    //make copy of contacts to display array and add new random contact
    let newContactArray = [randomContact, ...contacts];

    // set new values to update state
    setContactsRemaining(newContactsRemaining);
    setContacts(newContactArray);
  };

  const sortByName = () => {
    let contactsToSort = [...contacts];
    const contactsSorted = contactsToSort.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(contactsSorted);
  };

  const sortByPopularity = () => {
    let contactsToSort = [...contacts];
    const contactsSorted = contactsToSort.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(contactsSorted);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <span>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </span>
      <table>
        <thead>
          <tr>
            <th>
              <b>Picture</b>
            </th>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Popularity</b>
            </th>
            <th>
              <b>Won Oscar</b>
            </th>
            <th>
              <b>Won Emmy</b>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    className="contact-picture"
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : ""}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
