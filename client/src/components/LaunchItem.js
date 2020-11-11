import React, { Component } from 'react'
import Moment from 'react-moment';
import 'moment/locale/fr';
import classNames from 'classnames';

function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success }}){
        return <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={classNames({
                        'text-success': launch_success,
                        'text-danger' : !launch_success
                    })}>{mission_name}</span></h4>
                    <p>Date: <Moment locale='fr' format='L'>{launch_date_local}</Moment></p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Launch Details</button>
                </div>
            </div>
        </div>
            
        
}

export default LaunchItem
