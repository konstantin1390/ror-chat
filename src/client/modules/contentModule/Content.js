import React from 'react';
import {Content, InactiveRoom, Room} from './styledContent';


const ContentModule = () => {
    return (
        <Content>
            <Room>
                <InactiveRoom>
                    <InactiveRoom.content>
                        {/*TODO: add intl*/}
                        Select a room to view it conversation
                    </InactiveRoom.content>
                </InactiveRoom>
            </Room>
        </Content>
    );
};

export default ContentModule;
