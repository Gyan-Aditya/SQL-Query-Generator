import style from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")
  const [sqlQuery, setSqlQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (evt) => {
    evt.preventDefault()
    setLoading(true)
    const sql = await generateQuery()
    setSqlQuery(sql)
    setLoading(false)
  }

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ queryDescription }),
    });
    const data = await response.json()
    return data.response.trim()
  }

  return (
    <main className={style.main}>
      <img src={sqlLogo} alt="" className={style.icon} />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='query-description'
          placeholder='Describe your query'
          onChange={(evt) => setQueryDescription(evt.target.value)}
        />
        <input type='submit' value='Generate Query' />
        <div className={style.loaderWrapper}>
          {loading ? (
            <div className={style.spinner}></div>
          ) : (
            sqlQuery && (
              <pre>
                <code>{sqlQuery}</code>
              </pre>
            )
          )}
        </div>

      </form>
    </main>
  )
}

export default App
