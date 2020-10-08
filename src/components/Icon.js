import React from 'react';
import { Applemusic, Bandcamp, Deezer, Soundcloud, Spotify, Youtubemusic, Vk, Facebook, Gmail } from '@icons-pack/react-simple-icons';
import { icons } from '../constants';


const Icon = ({ iconId }) => {

    const props = {
        size: 16
    }

    const renderOptions = (id) => {
        switch (id) {
            case icons.apple:
                return <Applemusic {...props} />
            case icons.spotify:
                return <Spotify {...props} />
            case icons.youtube:
                return <Youtubemusic {...props} />
            case icons.bandcamp:
                return <Bandcamp {...props} />
            case icons.deezer:
                return <Deezer {...props} />
            case icons.soundcloud:
                return <Soundcloud {...props} />
            case icons.facebook:
                return <Facebook {...props} />
            case icons.vk:
                return <Vk {...props} />
            case icons.gmail:
                return <Gmail {...props} />
            default:
                return <span></span>
        }
    }

    return (
        <span className="releaser-icon">
            {renderOptions(iconId)}
        </span>
    )
}

export default Icon;