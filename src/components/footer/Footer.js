import { Link } from "react-router-dom"

const FooterStandardLink = ({path,name}) => {
    return (
        <div className="text-blue-600 px-1" >
            <Link to={path}>
                {name}
            </Link>
        </div>

    )
}

const FooterLowerLink = ({path,name}) => {
    return (
        <div className="text-gray-600" >
            <Link to={path}>
                {name}
            </Link>
        </div>

    )
}


function Footer() {
  return (
    <div className="px-[200px] bg-gray-200 font-semibold text-gray-600">
        <div className="flex flex-row  text-sm ">
            More ways to shop. <FooterStandardLink name="Find a store" path="/" /> or <FooterStandardLink name=" other retailer" path="/" /> near you
        </div>
        <div className="flex flex-row">Copyright 2022 Some Inc. All rights reserved</div>
        <div className="flex flex-row justofy-between pt-2 pb-6 border-t border-t-gray-5+300">
            <FooterLowerLink name="Privacy Policy" to="/" />
            <FooterLowerLink name="Terms of Use" to="/" />
            <FooterLowerLink name="Sales and Refunds" to="/" />
            <FooterLowerLink name="Legal" to="/" />
            <FooterLowerLink name="Site Map" to="/" />
        </div>
        <div>
            <FooterLowerLink name="United States" to="/" />
        </div>
    </div>
  )
}

export default Footer
