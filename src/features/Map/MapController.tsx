import React, { useState } from 'react';
import { Controller, Map } from '../../components';
import { ITrajectory, useTrajectoriesContext } from '../../context/TrajectoriesContext';

export const MapController = () => {

    const allTrajectories = useTrajectoriesContext();
    const [infoTrajectory, setInfoTrajectory] = useState<ITrajectory|null>(null);

    return (
        <div className="layout">
            <span className="leftPanel">
                <Map displayedTrajectories={allTrajectories} onHover={setInfoTrajectory}/>
            </span>
            <span className="rightPanel">
                {infoTrajectory !== null &&
                    <Controller infoTrajectory={infoTrajectory}/>
                }
            </span>
        </div>
    );
}
