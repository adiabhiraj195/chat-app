import clsx from '../../../lib/clsx';
import { FriendsTabButton } from '../../atoms/buttons/friends-tab-button';

interface FriendsTabInterface {
    classname?: string;
}

export const FriendsTab = ({
    classname,
}: FriendsTabInterface) => {

    return (
        <div className={clsx(classname, "")}>
            <h1>Friends</h1>
            <div>
                <FriendsTabButton 
                    button_name='Online'
                />
            </div>
        </div>
    )
}