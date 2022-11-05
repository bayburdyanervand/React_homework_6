import React, {useCallback, useState} from 'react';
import './style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {ADD_CAR, ADD_MUS,DEL} from "../redux/constant/constant";



const Main = () => {
    const state = useSelector(function (state) {
        return state
    })
    const cars = useSelector(function (state) {
        return state.cars
    })
    const musics = useSelector(function (state) {
        return state.music
    })

    const [name, setName] = useState('');
    const [year, setYear] = useState('')
    const [singer, setSinger] = useState('');
    const [song, setSong] = useState('')
    const dispatch = useDispatch()
    const changeItemCar = useCallback(() => {
        dispatch({
            type: ADD_CAR,
            payload: {
                name: name,
                year: year
            }
        }, [name, year])
        setName('');
        setYear('')
    })
    const changeItemMusic = useCallback(() => {
        dispatch({
            type: ADD_MUS,
            payload: {
                singer: singer,
                song: song
            }

        }, [singer, song])
        setSinger('')
        setSong('')
    })
    const deleteItem =  useCallback((e) =>{
        dispatch({
            type:DEL,
            payload:{
                id:e.target.id
            }
        })
    })

    return (
        <>
            <div>
                <h2>Cars</h2>
                <table>
                    <tbody>
                    {cars.map(item => <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                    </tr>)}
                    </tbody>
                </table>
                <input onChange={(e) => setName(e.target.value)} type={'text'} value={name} placeholder={'Car'} on/>
                <input onChange={(e) => setYear(e.target.value)} type={'text'} value={year} placeholder={'year'}/>
                <button onClick={changeItemCar}>Add Car</button>

            </div>
            <div>
                <h2>MUSIC</h2>
                <table>
                    <tbody>
                    {musics.map(item => <tr key={item.id}>
                        <td>{item.singer}</td>
                        <td>{item.song}</td>
                    </tr>)}
                    </tbody>
                </table>
                <input onChange={(e) => setSinger(e.target.value)} type={'text'} value={singer} placeholder={'Singer'}/>
                <input onChange={(e) => setSong(e.target.value)} type={'text'} value={song} placeholder={'Song'}/>
                <button onClick={changeItemMusic}>Add Music</button>

            </div>
        </>

    )

}
export default Main;