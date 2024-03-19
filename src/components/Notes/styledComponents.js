// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-size: 30px;
  font-family: 'Bree Serif';
  font-weight: 500;
`

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 1px 1px 3px 2px #d8d8d8;
  margin-top: 30px;
  width: 50%;
  padding: 30px;
`
export const InputElement = styled.input`
  height: 35px;
  border: none;
  outline: none;
  margin: 5px;
  width: 90%;
`
export const TextAreaElement = styled.textarea`
  height: 35px;
  border: none;
  outline: none;
  margin: 5px;
  width: 90%;
`

export const AddButton = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  height: 30px;
  width: 90px;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  align-self: flex-end;
`
export const NotesContainer = styled.div`
  height: 300px;
  width: 50%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImgElement = styled.img`
  height: 90px;
  width: 90px;
`
export const NoNotesHeading = styled.h1`
  color: #475569;
  font-size: 30px;
  font-family: 'Roboto';
`
export const NoNotesDescription = styled.p`
  color: #aab8c8;
  font-size: 18px;
  font-weight: 500;
`
export const NoteItemContainer = styled.ul`
  list-style-type: none;
  width: 50%;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
`
