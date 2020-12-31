import React, { useState } from 'react';
import { Dropdown,
         DropdownItem,
         DropdownToggle,
         DropdownMenu } from 'reactstrap';
import LinkUrl from '../constants/LinkUrl'

export const GitHub: React.FC = () => {
    const [gitHubToggleOpen, setGitHubToggleOpen] = useState(false);
    const toggleGitHub = () => setGitHubToggleOpen(!gitHubToggleOpen);

    return (
        <Dropdown isOpen={gitHubToggleOpen} toggle={toggleGitHub}>
            <DropdownToggle>
                GitHub
                {/* <img src='GitHub-Mark-32px.png' width="20" height="20" alt="GitHub"/> */}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem target="_blank" href={LinkUrl.uiGitHub.url} >{LinkUrl.uiGitHub.name} </DropdownItem>
                <DropdownItem target="_blank" href={LinkUrl.apiGitHub.url}>{LinkUrl.apiGitHub.name}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
export default GitHub