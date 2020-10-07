import React, { useState } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import ListenLink from './ListenLink';

const Release = (props) => {

    const { Column } = Columns;
    const { label, year, img, description, links } = props.releaseInfo;
    const [toggled, setToggle] = useState(false)

    /*

 {
    label: "Ни барабанов, ни труб",
    year: "2014",
    img: "/img/album1.jpg",
    descriptions: "",
    links: [
      {
        releaser: releasers.appleMusic,
        url: 'https://music.apple.com/ru/album/%D0%BD%D0%B8-%D0%B1%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2-%D0%BD%D0%B8-%D1%82%D1%80%D1%83%D0%B1/1519196123'
      },
      {
        releaser: releasers.spotify,
        url: 'https://open.spotify.com/album/3V8i9w61YUBQ6zQqnZkMgn'
      },
    ]
  },

    */

    const listenHandler = () => {
        setToggle(!toggled);
    }

    return (
        <Column
            mobile={{
                size: 12
            }}
            tablet={{
                size: 6
            }}
            desktop={{
                size: 6
            }}
            widescreen={{
                size: 4
            }}
            fullhd={{
                size: 4
            }}>
            <Card>
                <Card.Image size="1by1" src={img} />
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>{label}</Heading>
                            <Heading subtitle size={6}>{year}</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        {description}
                    </Content>
                </Card.Content>
                <Card.Footer>
                    <Card.Footer.Item renderAs="div" onClick={listenHandler} className="listen-button">Listen</Card.Footer.Item>
                </Card.Footer>
                <div className={toggled ? 'listen-links-shown' : 'listen-links-hidden'}>
                    {
                        links.map(
                            (link, i) => (
                                <ListenLink linkProps={link} key={i} />
                            )
                        )
                    }
                </div>
            </Card>
        </Column>
    )
}

export default Release;