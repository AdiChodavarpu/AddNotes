// Write your code here
import {NotesItem, NotesHeading, NotesDescription} from './styledComponents'

const NoteItem = props => {
  const {notes} = props
  const {title, note} = notes

  return (
    <NotesItem>
      <NotesHeading>{title}</NotesHeading>
      <NotesDescription>{note}</NotesDescription>
    </NotesItem>
  )
}

export default NoteItem
