// Write your code here

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesHeading,
  CardContainer,
  InputElement,
  TextAreaElement,
  AddButton,
  NotesContainer,
  ImgElement,
  NoNotesHeading,
  NoNotesDescription,
  NoteItemContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [NotesArray, setNotesArray] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNotes = event => setNote(event.target.value)

  const RenderNoNotes = () => (
    <NotesContainer>
      <ImgElement
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading>No notes yet</NoNotesHeading>
      <NoNotesDescription>Notes you add will appear here</NoNotesDescription>
    </NotesContainer>
  )

  const onFormSubmit = event => {
    event.preventDefault()

    const NewNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesArray(prevNotes => [...prevNotes, NewNote])
    setTitle('')
    setNote('')
  }

  return (
    <MainContainer onSubmit={onFormSubmit}>
      <NotesHeading>Notes</NotesHeading>
      <CardContainer>
        <InputElement
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextAreaElement
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeNotes}
          value={note}
        />
        <AddButton typee="submit">Add</AddButton>
      </CardContainer>
      {NotesArray.length > 0 ? (
        <NoteItemContainer>
          {NotesArray.map(eachitem => (
            <NoteItem key={eachitem.id} notes={eachitem} />
          ))}
        </NoteItemContainer>
      ) : (
        <RenderNoNotes />
      )}
    </MainContainer>
  )
}

export default Notes
