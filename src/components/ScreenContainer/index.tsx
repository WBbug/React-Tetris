import { BlockBoard } from "../BlockBoard"
import style from './index.module.scss'

export const ScreenContainer = () => {

    return <div className={style['screen-container']}>
        <BlockBoard></BlockBoard>
    </div>
}