import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

const fiveContacts = contacts.filter((contact, index) => {
  return index < 5;
});
console.log(fiveContacts);

function App() {
  return (
    <div className="App">
      <h2>IronContacts</h2>
      <table>
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
        </tr>

        {fiveContacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} className="contact-picture"></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
              <td>{contact.wonEmmy ? <p>🏆</p> : ""}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
