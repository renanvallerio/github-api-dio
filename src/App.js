import React from 'react'
import Layout from './components/layout'
import NoSearch from './components/no-search'
import Profile from './components/profile'
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
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
