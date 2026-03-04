// type PersonListProps = {
//     nameList : {
//         first : string
//         last : string
//     }[]
// }

import type { Name } from "../utils/PersonName.types"

type PersonListProps = {
    nameList : Name[]
}

const PersonList = (props : PersonListProps) => {
  return (
    <div>
        {
            props.nameList.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })
        }
    </div>
  )
}

export default PersonList