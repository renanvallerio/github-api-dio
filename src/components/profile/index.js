import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/68518168?v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Renan Valério</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a href="https://github.com/renanvallerio" target="_blank" rel="noreferrer">renanvallerio</a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>28</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>28</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>28</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
