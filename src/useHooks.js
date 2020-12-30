import {useContext} from 'react';
import { GlobalContext } from './useContext';

export const useHooks = () => {
    const {  silver, setSilver, count, setCount } = useContext(GlobalContext)

    const addLikes = () => {
    setCount(count + 1);
  };

  const handleSilver = () => {
    setSilver(!silver);
  };

  const closeImage = () => {
    setSilver(false);
  };




    return {
        silver,
        setSilver,
        count, 
        setCount,
        addLikes,
        handleSilver,
        closeImage
    }

}