import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repos = (props) => {
  const { user } = useParams()
  return (
    <div>
      {props.repos.map((repo) => (
        <div className="bg-indigo-600 text-white rounded p-2 mb-2" key={repo} id="repository-name">
          <Link to={`/${user}/${repo}`}>{repo}</Link>
        </div>
      ))}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
