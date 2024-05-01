import React from 'react'

const page = ({params} : {params: {id: string}}) => {
  return (
    <div>
      ID page - {params.id}
    </div>
  )
}

export default page
