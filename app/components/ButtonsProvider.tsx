import React from 'react'

import { Button } from '@/components/ui/button'



export default function ButtonsProvider() {
  return (
    <div className='flex flex-col gap-4 pt-10'>
        <Button>Me connecter avec Google</Button>
        <Button>Me connecter avec Github</Button>   
    </div>
  )
}
