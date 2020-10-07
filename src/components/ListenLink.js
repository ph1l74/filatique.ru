import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Icon from '../components/Icon'

const ListenLink = (props) => {

    const { releaser, url } = props.linkProps;

    /*
      {
        releaser: releasers.appleMusic,
        url: 'https://music.apple.com/ru/album/%D0%BD%D0%B8-%D0%B1%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2-%D0%BD%D0%B8-%D1%82%D1%80%D1%83%D0%B1/1519196123'
      },

    */

    return (
        <Card.Footer>
            <Card.Footer.Item renderAs="a" href={url}>
                <Icon iconId={releaser.icon}></Icon> {releaser.label}
            </Card.Footer.Item>
        </Card.Footer>
    )
}

export default ListenLink;