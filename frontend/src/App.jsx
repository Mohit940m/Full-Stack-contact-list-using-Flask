import { useEffect, useState } from 'react'
import ContactList from './contactList'
import ContactForm from './contractForm'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModelOpen] = useState(false)
  const [currentContact, setCurrentContacts] = useState({})

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json() 
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  const closeModal = () => {
    setIsModelOpen(false)
    setCurrentContacts({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModelOpen(true)
  }

  const openEditModal = (contact) => {
    if (isModalOpen) return
    setCurrentContacts(contact)
    setIsModelOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchContacts()
  }

  return  <>
  <ContactList contacts={contacts} updateContract={openEditModal} updateCallback={onUpdate} />
  <button onClick={openCreateModal}>Create New Contact</button>
  {isModalOpen && 
  <div className='model'>
    <span className='close' onClick={closeModal}>&times;</span>
    <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
  </div>
  }
  </>
}

export default App
