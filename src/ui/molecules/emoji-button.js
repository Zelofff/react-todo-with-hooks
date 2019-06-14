import { styled } from 'linaria/react'

export const EmojiButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  line-height: 2rem;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  outline: none;
  box-sizing: content-box;

  :focus {
    border: 1px solid black;
    border-radius: 50%;
  }
`
