import * as React from 'react';

import { usePDF, State, CanvasProps } from '../hooks/usePDF';

import './PDFViewer.css';


export const Canvas = (props: CanvasProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [state, setState] = React.useState<State>('loading');

    React.useEffect(function () {
        if (state === 'loading') {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;
            props.page.then((page) => {
                let viewport = page.getViewport({scale: 1.5});

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };

                // Prevent double rendering in strict mode
                if (canvas.ariaDisabled === 'true') return;
                canvas.ariaDisabled = 'true';

                const renderTask = page.render(renderContext);

                renderTask.promise.then(function () {
                    setState('success');
                    canvas.ariaDisabled = 'false';
                });
            });
        };
    });

    return (
        <canvas style={props.style} ref={canvasRef} />
    );
};


const PDFViewer = ({ 
    src, 
    byLoad = false,
    className = undefined, 
    pageProps = {}, 
    docProps = {}, 
    ...rest 
}) => {
    const pdf = usePDF(src, Canvas);

    return (
        <div className={className} {...docProps}>
            {pdf && pdf.map((pages, index) => (
                <div key={index} className="page" {...pageProps}>
                    <pages.canvas {...pages.props} />
                </div>
            ))}
        </div>
    )
};


export default PDFViewer;
