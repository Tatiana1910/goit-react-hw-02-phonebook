import { List, Items, Button } from './ContactItem.styled';

export const ContactItem = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ name, number, id }) => (
          <Items key={id}>
            <p>
              {name} : {number}
            </p>
            <Button type="button" onDelete={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Items>
        ))}
      </List>
    </div>
  );
};
