import React from 'react'
import * as S from './styled'
import useGithub from '../../hooks/githubHooks'

const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={submitGetUser}
        />
        <button type="submit">
          <span>Pesquisar</span>
        </button>
      </S.Wrapper>
    </header>
  )
}

export default Header
