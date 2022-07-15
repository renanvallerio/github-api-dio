import React from 'react'
import RepositoryItem from '../repository-item'
import * as S from './styled'

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="basecamp-javascript"
          linkToRepo="https://github.com/renanvallerio/basecamp-javascript"
          fullName="renanvallerio/basecamp-javascript"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="curso-javascript-cursoemvideo"
          linkToRepo="renanvallerio/curso-javascript-cursoemvideo"
          fullName="renanvallerio/curso-javascript-cursoemvideo"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
