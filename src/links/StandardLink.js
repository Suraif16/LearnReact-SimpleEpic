import { NavLink } from "react-router-dom"

function StandardLink({path,name}) {
  return (
    <div>
      <NavLink className="font-semibold text-xl text-blue-700 hover:text-blue-900 hover:underline transition-all ease-in-out " to={path}>{name}</NavLink>
    </div>
  )
}

export default StandardLink
