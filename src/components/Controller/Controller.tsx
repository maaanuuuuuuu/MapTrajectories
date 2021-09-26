import React from 'react';
import { ITrajectory } from '../../context/TrajectoriesContext';
import { useController } from './useController';

export interface IControllerProps {
    infoTrajectory: ITrajectory
}
export const Controller = ({infoTrajectory}: IControllerProps) => {

    const {arrivalTime, departureTime, travelTime, distanceTraveled} = useController(infoTrajectory);

    return (
        <ul>
            <li>id: {infoTrajectory.id}</li>
            <li>number of stops: {infoTrajectory.points.length -2}</li>
            <li>arrival: {arrivalTime}</li>
            <li>departure:{departureTime}</li>
            <li>travel time: {travelTime}</li>
            <li>distance traveled: {distanceTraveled}</li>
            <li>average speed: {distanceTraveled/travelTime}</li>
        </ul>
    );
}
