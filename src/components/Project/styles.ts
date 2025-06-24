import styled from 'styled-components'

export const CardProject = styled.div`
  background-color: #ffffff;
  color: #1a1a1f;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ImgProject = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`

export const TitleProject = styled.h2`
  font-size: 24px;
  color: #f4c57e;
  margin: 0;
`

export const DescriptionProject = styled.p`
  font-size: 16px;
  line-height: 1.5;
`

export const Tags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    background-color: #343a40;
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 14px;
    color: #f8f9fa;
  }
`
export const BtnLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const BtnLinks = styled.a`
  background-color: #007bff;
  width: 100%;
  color: white;
  text-align: center;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
