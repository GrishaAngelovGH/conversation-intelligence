import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const InputGroupWrapper = () => (
  <InputGroup>
    <Form.Control placeholder='Search for keywords, brands, tags and more' />
    <InputGroup.Text><i className='bi bi-search'></i></InputGroup.Text>
  </InputGroup>
)

export default InputGroupWrapper