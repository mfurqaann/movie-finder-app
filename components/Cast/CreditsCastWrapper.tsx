'use client'
import React from 'react'
import CreditsCast from './CreditsCast'
import { CastType } from '@/app/types/DetailMovieTypes'

const CreditsCastWrapper = ({ credits }: { credits: CastType[] }) => {
    return <CreditsCast credits={credits} />
}

export default CreditsCastWrapper