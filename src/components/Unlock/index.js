// Write your code here
import {useState} from 'react'
import {Container, LockContainer, Img, Text, Button} from './styledComponents'

const Unlock = () => {
  const [show, setLock] = useState(true)

  const onClickUnlock = () => {
    setLock(prevStatus => !prevStatus)
  }

  const textDisplay = show ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = show ? 'Unlock' : 'Lock'
  const imgSrc = show
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = show ? 'lock' : 'unlock'
  return (
    <Container>
      <LockContainer>
        <Img src={imgSrc} alt={altText} />
        <Text>{textDisplay}</Text>
        <Button type="button" onClick={onClickUnlock}>
          {buttonText}
        </Button>
      </LockContainer>
    </Container>
  )
}

export default Unlock
