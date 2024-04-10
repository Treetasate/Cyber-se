import React from 'react';

// custom component
import MembersList from '../modut/MembersList';
import CreateMembersEntry from '../page/CreateMembersEntry';
import EditMembersEntry from '../page/EditMembersEntry';

// contexts
import { useMembersContext } from '../../contexts/MembersContext';

const Interface = () => {
    const { nav_value } = useMembersContext();
    
    switch (nav_value) {
        case "MembersList":
            return <MembersList/>
        case "AddMembers":
            return <CreateMembersEntry/>
        case "EditMembersEntry":
            return <EditMembersEntry/>
        default:
            return <MembersList/>
    };
};

export default Interface;