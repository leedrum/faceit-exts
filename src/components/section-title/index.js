/** @jsx h */
import { h } from 'dom-chef'

export const SectionTitle = ({ title }) => (
  <div
    style={{
      fontWeight: 'bold',
      marginBottom: 16,
      textTransform: 'uppercase'
    }}
  >
    {title}
  </div>
)

export default SectionTitle
