import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hook";
import {
  deleteContact,
  editContact,
  selectContact,
  toggleActive,
} from "app/contacts/contactSlice";

const buttonStyle = "hover:bg-white  m-2 p-1 hover:text-black";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContact);

  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editedFname, setEditedFname] = useState("");
  const [editedLname, setEditedLname] = useState("");

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleToggleActive = (id: string) => {
    dispatch(toggleActive(id));
  };

  //The handleEdit function sets the editing state and initializes the input fields with the contact's existing values.
  const handleEdit = (id: string) => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      setEditingContactId(id);
      setEditedFname(contact.fName);
      setEditedLname(contact.lName);
    }
  };

  //The handleSaveEdit function dispatches the editContact action with the edited data when the "Save" button is clicked.
  const handleSaveEdit = () => {
    if (editingContactId) {
      dispatch(
        editContact({
          id: editingContactId,
          fName: editedFname,
          lName: editedLname,

          isActive: true,
        })
      );
      setEditingContactId(null);
      setEditedFname("");
      setEditedLname("");
    }
  };

  return (
    <div className="flex flex-wrap mx-8 gap-4 justify-center">
      {contacts.map((contact) => (
        <div className="" key={contact.id}>
          {editingContactId === contact.id ? (
            <div className="flex flex-col gap-4 p-7 bg-black">
              <label htmlFor="fName" style={{ color: 'white' }} >
                First Name:
                <input 
                  id="fName"
                  type="text"
                  className="px-2 ml-2"
                  placeholder="Enter your first name"
                  style={{ color: 'black' }}
                  value={editedFname}
                  onChange={(e) => setEditedFname(e.target.value)}
                />
              </label> 
              
              <label htmlFor="lName" style={{ color: 'white' }}>
                Last Name:
                <input
                  id="lName"
                  type="text"
                  className="px-2 ml-2"
                  value={editedLname}
                  placeholder="Enter your last name"
                  style={{ color: 'black' }}
                  onChange={(e) => setEditedLname(e.target.value)}
                />
              </label>
              <button
                className="bg-white hover:bg-grey hover:text-white w-full text-black"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="p-4 bg-white style={{ border-color: 'black' }} " >
              <div className="flex flex-col items-center bg-black p-4">
                <h4 className="text-lg font-semibold capitalize" style={{ color: 'white' }}>{`${contact.fName} ${contact.lName}`}</h4>
                <p className="uppercase" style={{ color: 'white' }}>
                  {contact.isActive ? "Active" : "Inactive"}
                </p>

                <div className="flex justify-center" style={{ color: 'white' }}>
                  <button
                    className={buttonStyle}
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={buttonStyle}
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={buttonStyle}
                    onClick={() => handleToggleActive(contact.id)}
                  >
                    Toggle Active
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
