import { useState } from 'react'
import styled from 'styled-components'

// Styled components
const Box = styled.div`
  background-color: #718096;
  padding: 1rem;
  color: #fff;
`
const IconButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 1px solid black;
  background-color: #f7fafc;
  :hover {
    background-color: #cbd5e0;
  }
  :active {
    background-color: #a0aec0;
  }
`

const Text = styled.p``

const StackH = styled.div`
  display: flex;
  gap: 1rem;
`
const StackV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export default function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <Box>
      <StackV>
        <Text>Counter: {counter}</Text>
        <StackH>
          <IconButton onClick={() => setCounter((state) => (state -= 1))}>
            -
          </IconButton>
          <IconButton onClick={() => setCounter((state) => (state += 1))}>
            +
          </IconButton>
        </StackH>
      </StackV>
    </Box>
  )
}
