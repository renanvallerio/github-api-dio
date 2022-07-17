import React from 'react'
import Layout from './components/layout'
//
import Profile from './components/profile/index'
import Repositories from './components/repositories/index'
import useGithub from './hooks/githubHooks'

const App = () => {
  const { githubState } = useGithub()
  return (
    <Layout>
      {githubState.hasUser ? (
      <>
        {githubState.loading ? (
          <p>LOADING...</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </>
    ) : ( 
      <div>Nenhum usuario pesquisado</div>
      )}
    </Layout>
  )
}

export default App
