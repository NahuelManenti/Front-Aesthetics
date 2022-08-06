import React from "react";
import Cardtreatments from "../components/CardTreatment"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import treatmentsActions from '../redux/actions/treatmentsActions';
import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";

export default function Treatments() {
  const user = useSelector((store) => store.userReducer.user)
  const { id } = useParams()
  const [search, setSearch] = React.useState('')
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(treatmentsActions.filterTreatments(search))
    // eslint-disable-next-line
  }, [search]);

  const treatment = useSelector(store => store.treatmentsReducer.filter)
  return (
    <div className="padre-card-tratamiento">
      <div className="treament-content-btn">
      <div className="btn-admin-treatment">
        {(user && user.role == 'admin' &&
          <LinkRouter to='/adminaddtreatment' className='agregar-adm'>
            <h5><button className="button3">Agregar Tratamiento</button></h5>
          </LinkRouter>)}
      </div>
      <div className='divInput'>
        <input className='inputSearch'
          type='text'
          placeholder='Buscar tratamiento'
          onKeyUp={(e) => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <div className="width-nada">
      </div>
      </div>
      {treatment.length > 0 ? <Cardtreatments filterTreatments={treatment} /> : <div><img className="border-img" src="https://i.ibb.co/sVcSS1R/1.png" alt="nohayresultados"/></div>}

    </div>
  );
}

