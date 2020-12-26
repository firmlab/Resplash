import React, { useEffect } from 'react'

export default function Modal(props) {

    const {links, alt_description, urls, description, user, likes, tags} = props.image

    useEffect(() => {
        document.body.classList.add('dimmed')
        document.body.classList.add('dimmable')

        return () => {
            document.body.classList.remove('dimmed')
            document.body.classList.remove('dimmable')
        }
    }, [])

    return (
        <div onClick={props.onToggleOff} className="ui dimmer modals page visible active" style={{display: 'flex', alignItems: 'center'}}>
            <div className="ui longer test modal small transition visible active" style={{display: 'block'}}>
                <div className="header">
                    Picture Detail
                </div>

                <div className="content" style={{display: 'flex', alignItems: 'center'}}>
                    <div className="ui card" style={{width: '100%'}}>
                        <div className="content">
                            <img alt={user.name} className="ui avatar image" src={user.profile_image.medium} /> {user.name}
                        </div>
                        <div className="image" style={{maxHeight: 500, overflow: 'auto'}}>
                            <img alt={alt_description} src={urls.regular} />
                        </div>
                        <div className="content">
                            {description && <div className="ui header">{description}</div>}
                            <p>{alt_description}</p>

                            {tags && tags.map((d, index) => {
                                return (
                                    <span key={`label-${index}`} style={index === 0 ? {margin: 0} : {}} className="ui basic label">{d.title}</span>
                                )
                            })}
                        </div>
                        <div className="extra content">
                            <span>
                                <i className="heart outline like icon"></i>
                                    {likes} likes
                            </span>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <a rel="noreferrer" href={links.download} target="_blank" download className="ui primary approve button">
                        Download
                        <i className="right chevron icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
