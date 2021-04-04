import React from "react"
export const onRenderBody = (
  { setPreBodyComponents }
) => {
    setPreBodyComponents([
    <script 
        type="text/javascript" 
        src='http://crm.trosenberg.com/cache/include/javascript/sugar_grp1.js?v=IsoWeroVJITCjl127pCNJg' 
        async 
    />,
    <script 
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
    />
  ])
}


