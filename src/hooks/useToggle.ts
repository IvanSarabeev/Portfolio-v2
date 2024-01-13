import {useState} from 'react'

export const useToggle = ():[boolean, () => void] => {

  const [on, setOn] = useState<boolean>(false);

  const handleToggle = () => {
    setOn(!on);
  }

  return [on, handleToggle];
};