import * as React from 'react';

import Square from './Square';

class Grid extends React.Component<any, any> {
    createMatrix(width: number, height: number) {
        const from1toHeightArray = Array.from(Array(height).keys()).map(x => x++);
        return from1toHeightArray.map(height => this.createRow(width, height));
    }
    
    createRow(width: number, rowNumber: number) {
        const from1toWidthArray: number[] = Array.from(Array(width).keys()).map(x => x++);
        return (
            <div>
                {from1toWidthArray.map(width => <Square x={width} y={rowNumber}/>)}
            </div>
        );
    }

    render() {
        const width = 10;
        const height = 20;
        const squaresMatrix = this.createMatrix(width, height);
        return squaresMatrix;
    }
  }
export default Grid;