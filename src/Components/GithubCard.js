
import React from 'react'
import './GithubCard.css'

const GithubCard = ({ user }) => {
    return (
        <div className="github-card">
            <img
                src={user.avatar_url}
                className='github-avatar'
                alt={user.login}
            />

            <h2>{user.login}</h2>

            <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
            >
                View Profile on GitHub
            </a>

            <ul>
                <b>Followers:</b> {user.followers}
            </ul>

            <ul>
                <b>Following:</b> {user.following}
            </ul>
        </div>
    )
}

export default GithubCard

