export const EmailSuggestion = ({ content }) => (
  <div className='flex mt-3 border rounded p-3'>
    <div className='w-full'>
      <i className='bi bi-envelope'></i>
      <span className='font-bold ml-3'>Email Suggestion</span>
      <h5>{content}</h5>
    </div>
  </div>
)

const ActionItemsTab = () => (
  <div className='flex'>
    <div className='w-full'>
      <EmailSuggestion content='Madison Butler to send email about "the quote"' />
      <EmailSuggestion content='Madison Butler to send email about "presentation"' />
    </div>
  </div>
)

export default ActionItemsTab