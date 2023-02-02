import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import newsActions from "../redux/actions/newsActions";
import { useEffect } from 'react';
import '../css/news.css';
import Repiola from './CardNews';
import {Link as LinkRouter} from 'react-router-dom'





export default function News() {

    const user = useSelector((store) => store.userReducer.user)
    const novedades = useSelector((store) => store.newsReducer.news)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newsActions.getNews())
    }, [])

    return (
        <>
        <div className='news-component-flex'>
                    <div className="btn-admin">
                {(user && user.role == 'admin' &&
                    <LinkRouter to='/adminaddnews' className='agregar-adm'>
                        <h5><button className="button3">Agregar Novedad</button></h5>
                    </LinkRouter>)}
            </div>
            {/* {(novedades && novedades.map(novedad => 
            <Repiola novedad={novedad}/>))} */}
            </div>
        </>
    );
}