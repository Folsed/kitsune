import { AiOutlineUser } from 'react-icons/ai'
import { TbBook } from 'react-icons/tb'
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri'

export const tabs = [
    {name: 'Огляд', icon: <AiOutlineUser size={20} />},
    {name: 'Переглядаю', icon: <TbBook size={20} />},
    {name: 'Заплановано', icon: <RiBookmarkLine size={20} />},
    {name: 'Мої відгуки', icon: <RiStarLine size={20} />},
]