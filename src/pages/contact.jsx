import React from 'react'
import Layout from '../components/layout'
import CopyToClipboard from '../components/CopyToClipboard'

export default ({ location: { state } }) => {
  let fromLink
  if (state) {
    fromLink = state.fromLink
  }
  const email = 'khaberyoucef@outlook.com'
  const reversedEmail = email.split('').reverse().join('')

  return (
    <Layout fromLink={fromLink}>
      <div className="page">
        <main>
          <div className="mainChild">
            <div className="container">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <h1 style={{ fontWeight: 600, padding: 0, margin: 0 }}>
                  email
                </h1>
                <h1
                  style={{
                    padding: 0,
                    paddingLeft: 20,
                    direction: 'rtl',
                    unicodeBidi: 'bidi-override',
                    margin: 0,
                  }}
                >
                  {reversedEmail}
                </h1>
                <CopyToClipboard email={email} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
