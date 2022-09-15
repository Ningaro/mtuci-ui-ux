import styled from 'styled-components'

// Components
import Counter from './components/Counter'

// Styled components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Nav = styled.div`
  height: 64px;
  width: 100vw;
  background-color: #4299e1;
  color: #fff;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
`

const Body = styled.div`
  height: calc(100vh - 64px);
  width: 100vw;
`

const Center = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <Container>
      <Nav>Тут был какой-то текст....</Nav>
      <Body>
        <Center>
          <Counter />
        </Center>
      </Body>
    </Container>
  )
}
