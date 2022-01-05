import axios from 'axios'
import {atom, useAtom} from "jotai";
import {useMemo} from "react";

const mockResponseATom = atom({username: 'Jackie Chan'})

/*
** @todo Need to figure out how asynchronous queries are built inside atom\s
 */
const asyncUserAtom =  atom( async (get) => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    return get(mockResponseATom)
})

const UserInfo = () => {
    const [info] = useAtom(asyncUserAtom)

    return (
        <div>
            <span>Username:</span> {info.username}
        </div>
    )
}

export default UserInfo
