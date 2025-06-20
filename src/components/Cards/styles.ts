import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

export const CardIcon = styled.i`
  font-size: 2.5rem;
  color: #4f46e5;
  margin-bottom: 1rem;
`

export const CardTitle = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b};
  margin-bottom: 0.5rem;
`

export const CardDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
`
