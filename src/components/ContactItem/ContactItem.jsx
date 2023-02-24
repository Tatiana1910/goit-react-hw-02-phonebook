export const ContactItem = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="button" onDelete={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
