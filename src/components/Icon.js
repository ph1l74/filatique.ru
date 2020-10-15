import React from 'react';
import { Applemusic, Bandcamp, Deezer, Soundcloud, Spotify, Youtubemusic, Vk, Facebook, Gmail, Instagram, Tumblr, Mixcloud, LastDotFm, Discogs, Telegram } from '@icons-pack/react-simple-icons';
import { icons } from '../constants';


const Icon = (props) => {

    const options = {
        size: 16,
        ...props
    }

    const renderOptions = (id) => {
        switch (id) {
            case icons.apple:
                return <Applemusic {...options} />
            case icons.spotify:
                return <Spotify {...options} />
            case icons.youtube:
                return <Youtubemusic {...options} />
            case icons.bandcamp:
                return <Bandcamp {...options} />
            case icons.deezer:
                return <Deezer {...options} />
            case icons.soundcloud:
                return <Soundcloud {...options} />
            case icons.facebook:
                return <Facebook {...options} />
            case icons.vk:
                return <Vk {...options} />
            case icons.mail:
                return <Gmail {...options} />
            case icons.instagram:
                return <Instagram {...options} />
            case icons.tumblr:
                return <Tumblr {...options} />
            case icons.mixcloud:
                return <Mixcloud {...options} />
            case icons.lastfm:
                return <LastDotFm {...options} />
            case icons.discogs:
                return <Discogs {...options} />
            case icons.telegram:
                return <Telegram {...options} />
            default:
                return <span></span>
        }
    }

    return (
        <span className="releaser-icon">
            {renderOptions(props.iconid)}
        </span>
    )
}

export default Icon;