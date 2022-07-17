import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  aling-items: flex-start;
`

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
  height: 200px;

  h1 {
    font-size: 35px;
    font-weight: bold;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  h4 {
    font-size: 15px;
    font-weight: bold;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  aling-items: center;
  div {
    margin: 10px;
    text-aling: center;
  }
`

export const WrapperUserGeneric = styled.div`
  display: flex;
  aling-items: center;
  margin-top: 10px;

  h3 {
    margin-right: 10px;
  }

  a {
    color: green;
    font-size: 16px;
    font-weight: bold;
  }
`

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 10px;
`
