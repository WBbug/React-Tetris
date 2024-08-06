import styles  from './index.module.scss'
export const BlockBoard = ()=>{
    const row = new Array(10).fill(0).map(()=>{
        return <b className={styles['block']}></b>
    })
    const board  = new Array(20).fill(0).map(()=>{
        return row
    })
    return board
}