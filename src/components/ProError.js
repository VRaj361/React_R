import React from 'react'
import HandleError from './HandleError'
import { LandingError } from './LandingError'

export const Pro = () => {

  return (
    <div>
      <HandleError>
        <LandingError props="car" />
      </HandleError>
      <HandleError>
        <LandingError props="water" />
      </HandleError>
      <HandleError>
        <LandingError props="fire" />
      </HandleError>
    </div>
  )
}
