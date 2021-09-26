import React, { CSSProperties } from 'react';
import { ITrajectory } from '../../context/TrajectoriesContext';
import distinctColors from 'distinct-colors'

export interface IMapProps {
    displayedTrajectories: ITrajectory[];
    onHover: (trajectory: ITrajectory) => void;
}

export const Map = ({displayedTrajectories, onHover}: IMapProps) => {

    const svgStyles: CSSProperties = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "1px solid"   };
    const [width, height, border] = [600, 600, 10];
    const colors: string[] = [];
    distinctColors().map((c) => {
        colors.push(c.name())
    });
    // const normalize = (value: number) => Math.floor(value*50);

    const normalizeX = (value: number) => {
        const biggestX = Math.max(...displayedTrajectories.map(trajectory => trajectory.points).flat().map(t => t.x));
        
        return Math.floor(value * (width-border)/biggestX);
    }
    const normalizeY = (value: number) => {
        const biggestY = Math.max(...displayedTrajectories.map(trajectory => trajectory.points).flat().map(t => t.y));
        
        return Math.floor(value * (height-border)/biggestY);
    }

    return (
        <div className="map">
            <svg
                style={svgStyles}
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
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
