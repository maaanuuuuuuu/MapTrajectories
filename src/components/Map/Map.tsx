import React, { CSSProperties } from 'react';
import { ITrajectory } from '../../context/TrajectoriesContext';
import distinctColors from 'distinct-colors'
import { useMap } from './useMap';

export interface IMapProps {
    displayedTrajectories: ITrajectory[];
    onHover: (trajectory: ITrajectory) => void;
}

export const Map = ({displayedTrajectories, onHover}: IMapProps) => {

    const svgStyles: CSSProperties = { border: "1px solid" };
    const [width, height] = [800, 600];
    
    const colors: string[] = [];
    distinctColors().map((c) => {
        colors.push(c.name())
    });

    const {normalizeX, normalizeY} = useMap(displayedTrajectories, height, width)

    return (
        <div className="map">
            <svg
                style={svgStyles}
                width={width}
                height={height}
            >
                {displayedTrajectories.map((trajectory, trajectoryIndex) => {
                    return (
                        <>
                        {trajectory.points.sort((a,b) => a.time > b.time ? 1 : -1).map((dot, i) => {
                            return (
                                <>
                                    <circle
                                        key={trajectory.id+"_" + i}
                                        cx={normalizeX(dot.x)}
                                        cy={normalizeY(dot.y)}
                                        r={(i === 0 || i === trajectory.points.length -1) ? 5 : 3}
                                        fill={colors[trajectoryIndex]}
                                        onMouseOver={() => onHover(trajectory)}
                                    />
                                    {i !== 0 && 
                                        <line
                                            key={"line_" + trajectory.id+"_" + i}
                                            x1={normalizeX(trajectory.points[i-1].x)}
                                            x2={normalizeX(trajectory.points[i].x)}
                                            y1={normalizeY(trajectory.points[i-1].y)}
                                            y2={normalizeY(trajectory.points[i].y)}
                                            strokeWidth={2}
                                            stroke={colors[trajectoryIndex]}
                                            onMouseOver={() => onHover(trajectory)}
                                        />
                                    }
                                </>
                            )
                        })}
                        </>
                    )
                })}
            </svg>
        </div>
    );
}
