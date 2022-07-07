import type { NextPage } from 'next'

import Button from '@/components/Button'

import { x } from '@xstyled/emotion'
import { setDarkModeAsync } from '@/store/common/action'
import { useRedux } from '@/hooks'

const Home: NextPage = () => {
  const [darkMode, dispatch] = useRedux((state) => state.common.darkMode)

  return (
    <x.div display={{ md: 'block' }}>
      {darkMode + ''} <br />
      <Button
        bg='primary'
        color='white'
        onClick={() => {
          dispatch(setDarkModeAsync(!darkMode))
        }}>
        Button
      </Button>
    </x.div>
  )
}

export default Home
