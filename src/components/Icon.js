import React from 'react';
import { Applemusic, Spotify } from '@icons-pack/react-simple-icons';
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