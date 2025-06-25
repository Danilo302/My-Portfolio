import styled from 'styled-components'

export const ContactConatiner = styled.section`
  text-align: center;
  padding: 36px;
`
export const Content = styled.div`
  text-align: start;
  padding-top: 64px;
`
export const ListContact = styled.ul`
  padding-top: 48px;
`

export const ItensContact = styled.li`
  display: flex;
  align-items: center;
  margin: 16px;
`
export const IconContact = styled.div`
  font-size: 40px;
  width: 64px;
  text-align: center;
  padding: 8px;
  margin-right: 8px;
  background-color: #007bff;
  border-radius: 50%;
`

export const InfoName = styled.span`
  font-size: 18px;
`
export const LinksContact = styled.a`
  font-size: 18px;
  color: #e0e0e0;
  cursor: pointer;

  &:hover {
    color: #f4c57e;
  }
`
