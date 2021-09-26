import React, { useState } from 'react';
import { Controller, Map } from '../../components';
import { ITrajectory, useTrajectoriesContext } from '../../context/TrajectoriesContext';

export const MapController = () => {

    const allTrajectories = useTrajectoriesContext();
    
    const [displayedTrajectories, setDisplayedTrajectories] = useState<ITrajectory[]>(allTrajectories);
    const [infoTrajectory, setInfoTrajectory] = useState<ITrajectory|null>(null);

    return (
        <div className="layout">
            <div className="leftPanel">
                <Map displayedTrajectories={displayedTrajectories} onHover={setInfoTrajectory}/>
            </div>
            <div className="rightPanel">
                {infoTrajectory !== null &&
                    <Controller infoTrajectory={infoTrajectory}/>
                }
            </div>
        </div>
    );
}
