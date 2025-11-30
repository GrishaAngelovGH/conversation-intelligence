import { render, screen } from '@testing-library/react'
import AnnotationWorkflowInfo from './AnnotationWorkflowInfo'

describe('AnnotationWorkflowInfo', () => {
  it('should render the component', () => {
    render(<AnnotationWorkflowInfo />)
    expect(screen.getByText('Annotation Workflow:')).toBeInTheDocument()
  })
})
